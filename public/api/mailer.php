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
