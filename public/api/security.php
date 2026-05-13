<?php
/**
 * Security Utilities for Ebanex International API
 */

// Define Turnstile Secret Key centrally if not already defined
if (!defined('TURNSTILE_SECRET_KEY')) {
    // Replace with your actual secret key in production
    define('TURNSTILE_SECRET_KEY', "0x4AAAAAADOqU_3fOCvYrar0F36ofq-Fr8g");
}

/**
 * Validates a Cloudflare Turnstile token
 * 
 * @param string $token The token from the frontend
 * @param string $secret_key The Turnstile secret key (optional, defaults to TURNSTILE_SECRET_KEY)
 * @return bool True if valid, false otherwise
 */
function validate_turnstile($token, $secret_key = null) {
    if ($secret_key === null) {
        $secret_key = TURNSTILE_SECRET_KEY;
    }
    
    if (empty($token)) {
        error_log("Turnstile validation failed: Empty token provided.");
        return false;
    }

    $ip = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['REMOTE_ADDR'];
    $url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
    $data = [
        'secret' => $secret_key,
        'response' => $token,
        'remoteip' => $ip
    ];

    // Prefer cURL if available for better reliability and SSL handling
    if (function_exists('curl_version')) {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true); // Keep security enabled
        $result = curl_exec($ch);
        $curl_error = curl_error($ch);
        curl_close($ch);

        if ($result === false) {
            error_log("Turnstile cURL error: " . $curl_error);
            // Fallback to file_get_contents if cURL fails
        } else {
            $response_data = json_decode($result, true);
            if (isset($response_data['success']) && $response_data['success'] === true) {
                return true;
            } else {
                error_log("Turnstile validation failed: " . ($result ?: "Empty response"));
                return false;
            }
        }
    }

    // Fallback to file_get_contents
    $options = [
        'http' => [
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data),
            'timeout' => 10
        ]
    ];

    $context  = stream_context_create($options);
    $result = @file_get_contents($url, false, $context);
    
    if ($result === FALSE) {
        error_log("Turnstile file_get_contents error: Failed to reach Cloudflare.");
        return false;
    }

    $response_data = json_decode($result, true);
    if (isset($response_data['success']) && $response_data['success'] === true) {
        return true;
    } else {
        error_log("Turnstile validation failed (fallback): " . $result);
        return false;
    }
}

/**
 * Simple Rate Limiter
 * 
 * @param string $action The action being performed (e.g., 'contact', 'enroll')
 * @param int $limit Maximum number of requests allowed in the window
 * @param int $window Window size in seconds
 * @return bool True if allowed, false if rate limited
 */
function check_rate_limit($action, $limit = 5, $window = 3600) {
    $ip = $_SERVER['REMOTE_ADDR'];
    $tmp_dir = sys_get_temp_dir();
    $hash = md5($ip . $action);
    $file = $tmp_dir . "/ratelimit_" . $hash;

    $now = time();
    $requests = [];

    if (file_exists($file)) {
        $content = file_get_contents($file);
        $requests = json_decode($content, true) ?: [];
    }

    // Filter out old requests
    $requests = array_filter($requests, function($timestamp) use ($now, $window) {
        return $timestamp > ($now - $window);
    });

    if (count($requests) >= $limit) {
        return false;
    }

    $requests[] = $now;
    file_put_contents($file, json_encode($requests));
    return true;
}
