// Central API/service layer for the frontend.
// All network calls should go through this module so that
// we can easily swap in a backend or proxy without touching UI code.

export interface ContactInquiryPayload {
  fullName: string;
  email: string;
  service: string;
  message: string;
}

export interface ApiResponse<T = any> {
  ok: boolean;
  data?: T;
  error?: string;
}

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

/**
 * Sends a contact inquiry to the backend.
 * Currently simulates a network call if VITE_API_URL is not provided.
 */
export async function sendContactInquiry(payload: ContactInquiryPayload): Promise<ApiResponse> {
  try {
    console.log('[sendContactInquiry] Payload:', payload);

    if (API_BASE_URL) {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to send inquiry');
      }

      const data = await response.json();
      return { ok: true, data };
    }

    // Fallback: Simulate a delay for prototyping when no API URL is set
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // For prototyping: randomly fail 5% of the time to test error states
    if (Math.random() < 0.05) {
      throw new Error('Server is temporarily unavailable. Please try again later.');
    }

    return { ok: true };
  } catch (err: any) {
    console.error('[sendContactInquiry] Error:', err);
    return { 
      ok: false, 
      error: err.message || 'Something went wrong while sending your inquiry. Please try again.' 
    };
  }
}
