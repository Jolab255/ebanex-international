<?php
/**
 * Ebanex International - Practical IT Audit Workshop Registration API
 * Uses SMTP instead of mail()
 */

// Enable error reporting for debugging
ini_set('display_errors', 0);
ini_set('log_errors', 1);
error_reporting(E_ALL);

require_once 'mailer.php';
require_once 'security.php';

// ── SETTINGS ──────────────────────────────────────────────────────────
$to_email_primary = "info@ebanexint.co.tz";
$to_email_external = "yonahmatete@gmail.com";
$subject_prefix = "NEW PRACTICAL IT AUDIT WORKSHOP REGISTRATION: ";
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

// Honeypot check (hidden field to catch bots)
$honeypot = $_POST['website'] ?? $json_data['website'] ?? '';
if (!empty($honeypot)) {
    error_log("Bot detected via honeypot: $honeypot");
    echo json_encode(["ok" => true, "message" => "Registration transmitted successfully."]); // Fake success to fool bots
    exit;
}

// Turnstile Validation
$captcha_token = $_POST['captchaToken'] ?? $json_data['captchaToken'] ?? '';
if (!validate_turnstile($captcha_token)) {
    error_log("Turnstile validation failed for practical IT audit workshop registration.");
    http_response_code(403);
    echo json_encode(["ok" => false, "error" => "Security validation failed. Please try again."]);
    exit;
}

// Rate Limiting (max 3 requests per hour per IP)
if (!check_rate_limit('practical_it_audit_workshop', 3, 3600)) {
    error_log("Rate limit exceeded for practical IT audit workshop registration from " . $_SERVER['REMOTE_ADDR']);
    http_response_code(429);
    echo json_encode(["ok" => false, "error" => "Too many requests. Please try again later."]);
    exit;
}

// Extract and Sanitize inputs
$fullName = htmlspecialchars(strip_tags($_POST['fullName'] ?? $json_data['fullName'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$jobTitle = htmlspecialchars(strip_tags($_POST['jobTitle'] ?? $json_data['jobTitle'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$organization = htmlspecialchars(strip_tags($_POST['organization'] ?? $json_data['organization'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$department = htmlspecialchars(strip_tags($_POST['department'] ?? $json_data['department'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$email = filter_var($_POST['email'] ?? $json_data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars(strip_tags($_POST['phone'] ?? $json_data['phone'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$participantsCount = htmlspecialchars(strip_tags($_POST['participantsCount'] ?? $json_data['participantsCount'] ?? '1'), ENT_QUOTES, 'UTF-8');
$participantCategory = htmlspecialchars(strip_tags($_POST['participantCategory'] ?? $json_data['participantCategory'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$preferredPayment = htmlspecialchars(strip_tags($_POST['preferredPayment'] ?? $json_data['preferredPayment'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$invoiceRequired = htmlspecialchars(strip_tags($_POST['invoiceRequired'] ?? $json_data['invoiceRequired'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$specialRequests = htmlspecialchars(strip_tags($_POST['specialRequests'] ?? $json_data['specialRequests'] ?? 'None'), ENT_QUOTES, 'UTF-8');

$subject = $subject_prefix . $fullName;

// ── EMAIL CONSTRUCTION ────────────────────────────────────────────────
$content_html = "
    <tr>
        <td style='padding: 15px 0; border-bottom: 1px solid #1E293B;'>
            <div style='font-size: 10px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;'>Training Course</div>
            <div style='font-size: 16px; color: #FFFFFF; font-weight: bold;'>Practical IT Audit Workshop</div>
        </td>
    </tr>
    <tr>
        <td style='padding: 20px 0 10px 0;'>
            <div style='font-size: 12px; font-weight: 900; color: #FFFFFF; text-transform: uppercase; letter-spacing: 2px;'>Participant / Contact Person Details</div>
        </td>
    </tr>
    <tr>
        <td style='padding: 15px 0; border-bottom: 1px solid #1E293B;'>
            <table border='0' cellpadding='0' cellspacing='0' width='100%'>
                <tr>
                    <td width='50%' style='vertical-align: top;'>
                        <div style='font-size: 10px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;'>Full Name</div>
                        <div style='font-size: 14px; color: #FFFFFF;'>$fullName</div>
                    </td>
                    <td width='50%' style='vertical-align: top;'>
                        <div style='font-size: 10px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;'>Job Title / Position</div>
                        <div style='font-size: 14px; color: #FFFFFF;'>$jobTitle</div>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td style='padding: 15px 0; border-bottom: 1px solid #1E293B;'>
            <table border='0' cellpadding='0' cellspacing='0' width='100%'>
                <tr>
                    <td width='50%' style='vertical-align: top;'>
                        <div style='font-size: 10px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;'>Organization / Institution</div>
                        <div style='font-size: 14px; color: #FFFFFF;'>$organization</div>
                    </td>
                    <td width='50%' style='vertical-align: top;'>
                        <div style='font-size: 10px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;'>Department</div>
                        <div style='font-size: 14px; color: #FFFFFF;'>$department</div>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td style='padding: 15px 0; border-bottom: 1px solid #1E293B;'>
            <table border='0' cellpadding='0' cellspacing='0' width='100%'>
                <tr>
                    <td width='50%' style='vertical-align: top;'>
                        <div style='font-size: 10px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;'>Email Address</div>
                        <div style='font-size: 14px; color: #FFFFFF;'>$email</div>
                    </td>
                    <td width='50%' style='vertical-align: top;'>
                        <div style='font-size: 10px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;'>Phone / WhatsApp</div>
                        <div style='font-size: 14px; color: #FFFFFF;'>$phone</div>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td style='padding: 20px 0 10px 0;'>
            <div style='font-size: 12px; font-weight: 900; color: #FFFFFF; text-transform: uppercase; letter-spacing: 2px;'>Registration & Fees Details</div>
        </td>
    </tr>
    <tr>
        <td style='padding: 15px 0; border-bottom: 1px solid #1E293B;'>
            <table border='0' cellpadding='0' cellspacing='0' width='100%'>
                <tr>
                    <td width='50%' style='vertical-align: top;'>
                        <div style='font-size: 10px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;'>Number of Participants</div>
                        <div style='font-size: 14px; color: #FFFFFF;'>$participantsCount</div>
                    </td>
                    <td width='50%' style='vertical-align: top;'>
                        <div style='font-size: 10px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;'>Participant Category</div>
                        <div style='font-size: 14px; color: #FFFFFF;'>$participantCategory</div>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td style='padding: 15px 0; border-bottom: 1px solid #1E293B;'>
            <table border='0' cellpadding='0' cellspacing='0' width='100%'>
                <tr>
                    <td width='50%' style='vertical-align: top;'>
                        <div style='font-size: 10px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;'>Preferred Payment</div>
                        <div style='font-size: 14px; color: #FFFFFF;'>$preferredPayment</div>
                    </td>
                    <td width='50%' style='vertical-align: top;'>
                        <div style='font-size: 10px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;'>Invoice Required?</div>
                        <div style='font-size: 14px; color: #FFFFFF;'>$invoiceRequired</div>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td style='padding: 15px 0; border-bottom: 1px solid #1E293B;'>
            <div style='font-size: 10px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;'>Special Requests / Comments</div>
            <div style='font-size: 14px; color: #FFFFFF; line-height: 1.6;'>$specialRequests</div>
        </td>
    </tr>
";

$message_html = get_email_template("Practical IT Audit Workshop Registration", $content_html, "This registration was submitted via the Ebanex International practical IT audit workshop portal.");

// Build headers
$headers = "From: Ebanex Website <$from_email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: base64\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// ── SEND ─────────────────────────────────────────────────────────────
$encoded_message = chunk_split(base64_encode($message_html));

// Send to domain email first (more reliable), then external
$sent_primary = send_smtp_email($to_email_primary, $subject, $encoded_message, $headers);
$sent_external = send_smtp_email($to_email_external, $subject, $encoded_message, $headers);

if ($sent_primary || $sent_external) {
    error_log("Practical IT Audit Workshop Registration sent: domain=$sent_primary, external=$sent_external");
    echo json_encode(["ok" => true, "message" => "Registration transmitted successfully."]);
} else {
    error_log("SMTP delivery failed for practical IT audit workshop registration");
    http_response_code(500);
    echo json_encode([
        "ok" => false,
        "error" => "The registration service is currently unavailable. Please contact info@ebanexint.co.tz directly."
    ]);
}
