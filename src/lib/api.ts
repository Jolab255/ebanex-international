// Central API/service layer for the frontend.
// All network calls should go through this module so that
// we can easily swap in a backend or proxy without touching UI code.

export interface ContactInquiryPayload {
  fullName: string;
  email: string;
  service: string;
  message: string;
}

export interface ConferenceRegistrationPayload {
  fullName: string;
  email: string;
  phone: string;
  institution: string;
  role: string;
}

export interface ApiResponse<T = unknown> {
  ok: boolean;
  data?: T;
  error?: string;
}

// In production, we assume the API is relative to the current origin
const API_BASE = '/api';

/**
 * Sends a contact inquiry to the PHP backend.
 */
export async function sendContactInquiry(payload: ContactInquiryPayload): Promise<ApiResponse> {
  try {
    console.log('[sendContactInquiry] Payload:', payload);

    const response = await fetch(`${API_BASE}/contact.php`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.error || 'Failed to send inquiry via local API');
    }

    return { ok: true, data };
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error(String(err));
    console.error('[sendContactInquiry] Error:', error);
    return { 
      ok: false, 
      error: error.message || 'Something went wrong while sending your inquiry. Please try again.' 
    };
  }
}

/**
 * Sends a conference registration to the PHP backend.
 * Recipient: yonahmatete@gmail.com
 */
export async function sendConferenceRegistration(payload: ConferenceRegistrationPayload): Promise<ApiResponse> {
  try {
    console.log('[sendConferenceRegistration] Payload:', payload);

    const response = await fetch(`${API_BASE}/register.php`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.error || 'The registration service is currently unavailable. Please contact info@ebanexint.co.tz directly.');
    }

    return { ok: true, data };
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error(String(err));
    console.error('[sendConferenceRegistration] Error:', error);
    return { 
      ok: false, 
      error: error.message || 'Something went wrong while sending your registration. Please try again.' 
    };
  }
}
