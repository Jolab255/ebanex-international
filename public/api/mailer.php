<?php
/**
 * SMTP Helper Function
 * Sends email via local SMTP relay
 */
function send_smtp_email($to, $subject, $body, $headers) {
    $smtp_host = 'localhost';
    $smtp_port = 25;
    $from_header = '';
    
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
        
        fputs($socket, "HELO localhost\r\n");
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
function get_email_template($title, $content_html, $footer_text = "This message was sent via the Ebanex International website.") {
    $cyber_blue = "#3b82f6";
    $deep_navy = "#0a0a0a"; // Even darker for that "cyber" feel
    $text_white = "#f8fafc";
    $text_muted = "#94a3b8";

    return "
    <!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Space+Grotesk:wght@300;700&display=swap');
            body { 
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
                background-color: #020617; 
                margin: 0; 
                padding: 40px 20px; 
                color: $text_white; 
            }
            .container { 
                max-width: 600px; 
                margin: 0 auto; 
                background-color: $deep_navy; 
                border-radius: 12px; 
                overflow: hidden; 
                border: 1px solid rgba(59, 130, 246, 0.2);
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
            }
            .header { 
                background: linear-gradient(135deg, #1e293b 0%, #020617 100%);
                padding: 40px; 
                text-align: center; 
                border-bottom: 1px solid rgba(59, 130, 246, 0.1);
            }
            .header h1 { 
                font-family: 'Space Grotesk', sans-serif;
                font-size: 24px; 
                margin: 0; 
                color: $cyber_blue; 
                text-transform: uppercase; 
                letter-spacing: 2px;
            }
            .content { 
                padding: 40px; 
                line-height: 1.6; 
            }
            .field { 
                margin-bottom: 24px; 
                padding-bottom: 12px; 
                border-bottom: 1px solid rgba(255, 255, 255, 0.05); 
            }
            .label { 
                font-size: 11px; 
                text-transform: uppercase; 
                letter-spacing: 1px; 
                color: $cyber_blue; 
                font-weight: 700; 
                margin-bottom: 4px; 
            }
            .value { 
                font-size: 16px; 
                color: $text_white; 
            }
            .footer { 
                padding: 30px 40px; 
                background-color: rgba(0, 0, 0, 0.3); 
                text-align: center; 
                font-size: 12px; 
                color: $text_muted; 
            }
            .badge {
                display: inline-block;
                padding: 4px 12px;
                border-radius: 9999px;
                background: rgba(59, 130, 246, 0.1);
                color: $cyber_blue;
                font-size: 10px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 16px;
            }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <div class='badge'>Institutional Intelligence</div>
                <h1>$title</h1>
            </div>
            <div class='content'>
                $content_html
            </div>
            <div class='footer'>
                <p>$footer_text</p>
                <p>&copy; " . date('Y') . " Ebanex International. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>";
}
