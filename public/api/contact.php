<?php
// Enable error reporting for debugging (disable in final production)
ini_set('display_errors', 0);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["ok" => false, "error" => "Method not allowed"]);
    exit;
}

$input = file_get_contents("php://input");
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["ok" => false, "error" => "Invalid input data"]);
    exit;
}

$fullName = htmlspecialchars($data['fullName'] ?? 'N/A');
$email = filter_var($data['email'] ?? '', FILTER_VALIDATE_EMAIL) ? $data['email'] : 'N/A';
$service = htmlspecialchars($data['service'] ?? 'N/A');
$messageContent = htmlspecialchars($data['message'] ?? 'N/A');

$to = "yonahmatete@gmail.com";
$subject = "NEW CONTACT INQUIRY: $fullName - $service";

$message = "
New Contact Inquiry received:

Full Name: $fullName
Email: $email
Service: $service

Message:
$messageContent

---
Sent via Ebanex International Website
";

// Better headers to prevent being flagged as spam
$headers = "From: Ebanex Website <info@ebanexint.co.tz>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Additional params for mail() can help with some host configurations
$additional_params = "-f info@ebanexint.co.tz";

try {
    if (mail($to, $subject, $message, $headers, $additional_params)) {
        echo json_encode(["ok" => true]);
    } else {
        // Log error internally
        error_log("Failed to send email to $to via PHP mail()");
        http_response_code(500);
        echo json_encode(["ok" => false, "error" => "The contact service is currently unavailable. Please contact info@ebanexint.co.tz directly."]);
    }
} catch (Exception $e) {
    error_log("Exception in contact.php: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(["ok" => false, "error" => "An unexpected error occurred. Please try again later."]);
}
