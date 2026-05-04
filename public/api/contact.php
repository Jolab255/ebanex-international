<?php
/**
 * Ebanex International - Contact Inquiry API
 * Handles multipart form data and rich HTML email
 * Uses SMTP instead of mail() for better compatibility
 */

// Enable error reporting for debugging
ini_set('display_errors', 0);
ini_set('log_errors', 1);
error_reporting(E_ALL);

require_once 'mailer.php';

// ── SETTINGS ──────────────────────────────────────────────────────────
$to_email = "yonahmatete@gmail.com";
$subject_prefix = "NEW CONTACT INQUIRY: ";
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

$fullName = strip_tags($_POST['fullName'] ?? $json_data['fullName'] ?? 'N/A');
$email = filter_var($_POST['email'] ?? $json_data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$service = strip_tags($_POST['service'] ?? $json_data['service'] ?? 'N/A');
$messageContent = strip_tags($_POST['message'] ?? $json_data['message'] ?? 'N/A');

$subject = $subject_prefix . $fullName . " (" . $service . ")";

// ── EMAIL CONSTRUCTION (MULTIPART) ────────────────────────────────────
$boundary = "PHP-mixed-" . md5(time());
$headers = "From: Ebanex Website <$from_email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Build Content HTML
$content_html = "
    <div class='field'><div class='label'>Full Name</div><div class='value'>$fullName</div></div>
    <div class='field'><div class='label'>Email Address</div><div class='value'>$email</div></div>
    <div class='field'><div class='label'>Service Interest</div><div class='value'>$service</div></div>
    <div class='field'><div class='label'>Message</div><div class='value'>" . nl2br($messageContent) . "</div></div>
";

$message_html = get_email_template("New Contact Inquiry", $content_html, "This inquiry was submitted via the Ebanex International contact form.");

// Start Body
$body = "--$boundary\r\n";
$body .= "Content-Type: text/html; charset=\"UTF-8\"\r\n";
$body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
$body .= $message_html . "\r\n\r\n";
$body .= "--$boundary--";

// ── SEND ─────────────────────────────────────────────────────────────
if (send_smtp_email($to_email, $subject, $body, $headers)) {
    echo json_encode(["ok" => true, "message" => "Inquiry transmitted successfully."]);
} else {
    error_log("SMTP delivery failed for contact inquiry");
    http_response_code(500);
    echo json_encode([
        "ok" => false,
        "error" => "The contact service is currently unavailable. Please contact info@ebanexint.co.tz directly."
    ]);
}
