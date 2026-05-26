<?php
/**
 * Ebanex International - Trainer Evaluation API
 * Handles detailed trainer feedback and sends emails (Anonymous Supported)
 */

// Enable error reporting for debugging
ini_set('display_errors', 0);
ini_set('log_errors', 1);
error_reporting(E_ALL);

require_once 'mailer.php';
require_once 'security.php';

// ── SETTINGS ──────────────────────────────────────────────────────────
$to_email_primary = "info@ebanexint.co.tz";
$to_email_external = "yonahmatete@gmail.co.tz";
$subject_prefix = "NEW TRAINER EVALUATION: ";
$from_email = "info@ebanexint.co.tz";

// ── CORS HEADERS ──────────────────────────────────────────────────────
$allowed_origins = [
    "https://ebanexint.co.tz",
    "https://www.ebanexint.co.tz",
    "http://localhost:5173", 
    "http://localhost:3000"
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
}

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
$input = file_get_contents("php://input");
$json_data = json_decode($input, true);

// Honeypot check
$honeypot = $_POST['website'] ?? $json_data['website'] ?? '';
if (!empty($honeypot)) {
    error_log("Bot detected via honeypot: $honeypot");
    echo json_encode(["ok" => true, "message" => "Evaluation submitted successfully."]); 
    exit;
}

// Turnstile Validation
$captcha_token = $_POST['captchaToken'] ?? $json_data['captchaToken'] ?? '';
if (!validate_turnstile($captcha_token)) {
    error_log("Turnstile validation failed for trainer evaluation.");
    http_response_code(403);
    echo json_encode(["ok" => false, "error" => "Security validation failed. Please try again."]);
    exit;
}

// Rate Limiting
if (!check_rate_limit('feedback', 5, 3600)) {
    error_log("Rate limit exceeded for trainer evaluation from " . $_SERVER['REMOTE_ADDR']);
    http_response_code(429);
    echo json_encode(["ok" => false, "error" => "Too many requests. Please try again later."]);
    exit;
}

// Handle Potential Missing Fields for Anonymous Feedback
$fullName = htmlspecialchars(strip_tags($_POST['fullName'] ?? $json_data['fullName'] ?? 'ANONYMOUS'), ENT_QUOTES, 'UTF-8');
$email = filter_var($_POST['email'] ?? $json_data['email'] ?? 'anonymous@ebanexint.co.tz', FILTER_SANITIZE_EMAIL);
if (empty($fullName)) $fullName = "ANONYMOUS";
if (empty($email)) $email = "anonymous@ebanexint.co.tz";

$program = htmlspecialchars(strip_tags($_POST['trainingProgram'] ?? $json_data['trainingProgram'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');

$presSkills = htmlspecialchars(strip_tags($_POST['presentationSkills'] ?? $json_data['presentationSkills'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$knowledge = htmlspecialchars(strip_tags($_POST['knowledge'] ?? $json_data['knowledge'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$confidence = htmlspecialchars(strip_tags($_POST['confidence'] ?? $json_data['confidence'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$engagement = htmlspecialchars(strip_tags($_POST['engagement'] ?? $json_data['engagement'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$timeMgmt = htmlspecialchars(strip_tags($_POST['timeManagement'] ?? $json_data['timeManagement'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');

$messageContent = htmlspecialchars(strip_tags($_POST['message'] ?? $json_data['message'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');

$subject = $subject_prefix . $fullName . " [" . $program . "]";

// ── EMAIL CONSTRUCTION (HTML using helper) ────────────────────────────────────
$content_html = "
    <tr>
        <td style='padding: 15px 0; border-bottom: 1px solid #1E293B;'>
            <div style='font-size: 10px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;'>Training Program</div>
            <div style='font-size: 16px; color: #FFFFFF; font-weight: bold;'>$program</div>
        </td>
    </tr>
    <tr>
        <td style='padding: 15px 0; border-bottom: 1px solid #1E293B;'>
            <div style='font-size: 10px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;'>Full Name</div>
            <div style='font-size: 14px; color: #FFFFFF;'>$fullName</div>
        </td>
    </tr>
    <tr>
        <td style='padding: 15px 0; border-bottom: 1px solid #1E293B;'>
            <div style='font-size: 10px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;'>Email Address</div>
            <div style='font-size: 14px; color: #FFFFFF;'>$email</div>
        </td>
    </tr>
    <tr>
        <td style='padding: 20px 0; border-bottom: 1px solid #1E293B;'>
            <div style='font-size: 12px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 15px;'>Evaluation Ratings</div>
            <table width='100%' cellpadding='0' cellspacing='0'>
                <tr>
                    <td style='padding: 5px 0; font-size: 13px; color: #94A3B8;'>Presentation Skills:</td>
                    <td style='padding: 5px 0; font-size: 13px; color: #FFFFFF; font-weight: bold; text-align: right;'>$presSkills</td>
                </tr>
                <tr>
                    <td style='padding: 5px 0; font-size: 13px; color: #94A3B8;'>Subject Knowledge:</td>
                    <td style='padding: 5px 0; font-size: 13px; color: #FFFFFF; font-weight: bold; text-align: right;'>$knowledge</td>
                </tr>
                <tr>
                    <td style='padding: 5px 0; font-size: 13px; color: #94A3B8;'>Subject Confidence:</td>
                    <td style='padding: 5px 0; font-size: 13px; color: #FFFFFF; font-weight: bold; text-align: right;'>$confidence</td>
                </tr>
                <tr>
                    <td style='padding: 5px 0; font-size: 13px; color: #94A3B8;'>Class Engagement:</td>
                    <td style='padding: 5px 0; font-size: 13px; color: #FFFFFF; font-weight: bold; text-align: right;'>$engagement</td>
                </tr>
                <tr>
                    <td style='padding: 5px 0; font-size: 13px; color: #94A3B8;'>Time Management:</td>
                    <td style='padding: 5px 0; font-size: 13px; color: #FFFFFF; font-weight: bold; text-align: right;'>$timeMgmt</td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td style='padding: 15px 0; border-bottom: 1px solid #1E293B;'>
            <div style='font-size: 10px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;'>Comments & Suggestions</div>
            <div style='font-size: 14px; color: #FFFFFF; line-height: 1.6; white-space: pre-wrap;'>$messageContent</div>
        </td>
    </tr>";

$message_html = get_email_template("New Trainer Evaluation", $content_html, "This evaluation was submitted anonymously via the Ebanex International evaluation portal.");

// Build headers
$headers = "From: Ebanex Website <$from_email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: base64\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// ── SEND ─────────────────────────────────────────────────────────────
$encoded_message = chunk_split(base64_encode($message_html));

$sent_primary = send_smtp_email($to_email_primary, $subject, $encoded_message, $headers);
$sent_external = send_smtp_email($to_email_external, $subject, $encoded_message, $headers);

if ($sent_primary || $sent_external) {
    error_log("Feedback sent: domain=$sent_primary, external=$sent_external");
    echo json_encode(["ok" => true, "message" => "Evaluation submitted successfully."]);
} else {
    http_response_code(500);
    echo json_encode([
        "ok" => false,
        "error" => "The evaluation service is currently unavailable. Please contact info@ebanexint.co.tz directly."
    ]);
}
