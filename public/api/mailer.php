<?php
/**
 * SMTP Helper Function
 * Sends email via local SMTP relay
 * 
 * PRODUCTION NOTE: 
 * For production, update $smtp_host and $smtp_port to your actual SMTP server.
 * You may also need to implement AUTH LOGIN if your server requires it.
 */
function send_smtp_email($to, $subject, $body, $headers) {
    $smtp_host = 'localhost'; // Change to e.g. 'smtp.gmail.com' for production
    $smtp_port = 25;           // Change to 465 or 587 for production
    $from_header = '';
    
    // Dot-stuffing: Any line starting with a period must have an extra period added
    // to prevent premature end-of-data signal in SMTP.
    $body = str_replace("\n.", "\n..", $body);
    
    // Extract From address from headers
    foreach (explode("\r\n", $headers) as $header) {
        if (stripos($header, 'From:') === 0) {
            $from_header = trim(substr($header, 5));
            break;
        }
    }
    
    try {
        $socket = @fsockopen($smtp_host, $smtp_port, $errno, $errstr, 5);
        if (!$socket) {
            error_log("SMTP Connection Error: $errstr ($errno)");
            return false;
        }
        
        $response = fgets($socket, 1024);
        if (substr($response, 0, 3) !== '220') {
            fclose($socket);
            return false;
        }
        
        fputs($socket, "HELO ebanexint.co.tz\r\n");
        fgets($socket, 1024);
        
        // Extract email from "Name <email>" format
        $from_email = preg_match('/<(.+?)>/', $from_header, $m) ? $m[1] : $from_header;
        fputs($socket, "MAIL FROM: <$from_email>\r\n");
        fgets($socket, 1024);
        
        fputs($socket, "RCPT TO: <$to>\r\n");
        fgets($socket, 1024);
        
        fputs($socket, "DATA\r\n");
        fgets($socket, 1024);
        
        $message = "Subject: $subject\r\n$headers\r\n\r\n$body";
        fputs($socket, $message . "\r\n.\r\n");
        fgets($socket, 1024);
        
        fputs($socket, "QUIT\r\n");
        fclose($socket);
        
        return true;
    } catch (Exception $e) {
        error_log("SMTP Error: " . $e->getMessage());
        return false;
    }
}

/**
 * Generates a branded HTML email template
 */
function get_email_template($title, $content_html, $footer_text = "This message was sent via the Ebanex International training portal.") {
    $cyber_blue = "#00BFFF"; // Ebanex theme blue
    $bg_dark = "#050B14";
    $card_bg = "#0A121E";
    $border_color = "#1E293B";
    $text_primary = "#FFFFFF";
    $text_secondary = "#94A3B8";

    return "
    <!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
    <html xmlns='http://www.w3.org/1999/xhtml'>
    <head>
        <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
        <title>$title</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
    </head>
    <body style='margin: 0; padding: 0; background-color: $bg_dark; font-family: \"Segoe UI\", Helvetica, Arial, sans-serif;'>
        <table border='0' cellpadding='0' cellspacing='0' width='100%' style='background-color: $bg_dark;'>
            <tr>
                <td align='center' style='padding: 40px 0 40px 0;'>
                    <table border='0' cellpadding='0' cellspacing='0' width='600' style='background-color: $card_bg; border: 1px solid $border_color; border-radius: 4px; border-top: 4px solid $cyber_blue;'>
                        <!-- Header -->
                        <tr>
                            <td align='center' style='padding: 40px 40px 20px 40px;'>
                                <div style='font-size: 10px; font-weight: 900; color: $cyber_blue; text-transform: uppercase; letter-spacing: 4px; margin-bottom: 10px;'>
                                    Institutional Intelligence
                                </div>
                                <h1 style='color: $text_primary; font-size: 24px; font-weight: 900; text-transform: uppercase; letter-spacing: -1px; margin: 0;'>
                                    $title
                                </h1>
                            </td>
                        </tr>
                        
                        <!-- Content -->
                        <tr>
                            <td style='padding: 20px 40px 40px 40px;'>
                                <table border='0' cellpadding='0' cellspacing='0' width='100%'>
                                    $content_html
                                </table>
                            </td>
                        </tr>
                        
                        <!-- Footer -->
                        <tr>
                            <td style='padding: 30px 40px 30px 40px; background-color: rgba(0,0,0,0.2); border-top: 1px solid $border_color;'>
                                <table border='0' cellpadding='0' cellspacing='0' width='100%'>
                                    <tr>
                                        <td style='color: $text_secondary; font-size: 12px; line-height: 18px; text-align: center;'>
                                            <p style='margin: 0 0 10px 0;'>$footer_text</p>
                                            <p style='margin: 0; font-weight: bold; color: $cyber_blue;'>&copy; " . date('Y') . " Ebanex International. All rights reserved.</p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>";
}
