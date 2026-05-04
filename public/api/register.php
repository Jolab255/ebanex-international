<?php
/**
 * Ebanex International - Conference Registration API
 * Handles multipart form data and rich HTML email
 */

// Enable error reporting for debugging
ini_set('display_errors', 0);
ini_set('log_errors', 1);
error_reporting(E_ALL);

// ── SETTINGS ──────────────────────────────────────────────────────────
$to_email = "yonahmatete@gmail.com";
$subject_prefix = "NEW CONFERENCE REGISTRATION: ";
$from_email = "info@ebanexint.co.tz";

// ── CORS HEADERS ──────────────────────────────────────────────────────
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// ── VALIDATION ────────────────────────────────────────────────────────
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["ok" => false, "error" => "Method not allowed"]);
    exit;
}

// ── DATA PREPARATION ──────────────────────────────────────────────────
// Try to get data from POST (multipart) or JSON
$input = file_get_contents("php://input");
$json_data = json_decode($input, true);

$fullName = htmlspecialchars($_POST['fullName'] ?? $json_data['fullName'] ?? 'N/A');
$email = filter_var($_POST['email'] ?? $json_data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars($_POST['phone'] ?? $json_data['phone'] ?? 'N/A');
$institution = htmlspecialchars($_POST['institution'] ?? $json_data['institution'] ?? 'N/A');
$role = htmlspecialchars($_POST['role'] ?? $json_data['role'] ?? 'N/A');

$subject = $subject_prefix . $fullName;

// ── EMAIL CONSTRUCTION (MULTIPART) ────────────────────────────────────
$boundary = "PHP-mixed-" . md5(time());
$headers = "From: Ebanex Website <$from_email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// HTML Message
$message_html = "
<html>
<body style='font-family: sans-serif; line-height: 1.6; color: #333;'>
    <div style='background: #004a99; padding: 20px; color: #ffffff;'>
        <h2 style='margin:0;'>Digital Trust Conference Registration</h2>
    </div>
    <div style='padding: 20px; border: 1px solid #eee; background: #fff;'>
        <p><strong>Full Name:</strong> $fullName</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Institution:</strong> $institution</p>
        <p><strong>Role:</strong> $role</p>
        <hr style='border:none; border-top:1px solid #eee; margin:20px 0;'>
        <p style='font-size: 12px; color: #666;'>This registration was submitted via the Ebanex International website.</p>
    </div>
</body>
</html>";

// Start Body
$body = "--$boundary\r\n";
$body .= "Content-Type: text/html; charset=\"UTF-8\"\r\n";
$body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
$body .= $message_html . "\r\n\r\n";
$body .= "--$boundary--";

// ── SEND ─────────────────────────────────────────────────────────────
// Additional params for mail() can help with some host configurations
$additional_params = "-f $from_email";

if (mail($to_email, $subject, $body, $headers, $additional_params)) {
    echo json_encode(["ok" => true, "message" => "Registration transmitted successfully."]);
} else {
    $last_error = error_get_last();
    error_log("Mail delivery failed: " . ($last_error ? $last_error['message'] : "Unknown error"));
    http_response_code(500);
    echo json_encode([
        "ok" => false,
        "error" => "The registration service is currently unavailable. Please contact info@ebanexint.co.tz directly.",
        "debug" => $last_error ? $last_error['message'] : "Unknown error"
    ]);
}
