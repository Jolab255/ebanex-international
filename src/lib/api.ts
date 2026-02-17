// Central API/service layer for the frontend.
// All network calls should go through this module so that
// we can easily swap in a backend or proxy without touching UI code.

export interface ContactInquiryPayload {
  fullName: string;
  email: string;
  service: string;
  message: string;
}

export interface ApiResponse<T = unknown> {
  ok: boolean;
  data?: T;
  error?: string;
}

/**
 * Send a contact inquiry.
 *
 * NOTE:
 * - This is currently a frontend stub. Replace the implementation with a call
 *   to your backend (e.g. /api/contact) once it exists.
 * - Do NOT call third‑party APIs with private keys directly from here.
 */
export async function sendContactInquiry(
  payload: ContactInquiryPayload,
): Promise<ApiResponse> {
  try {
    // TODO: Replace with real backend endpoint.
    // Example:
    // const res = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(payload),
    // });
    //
    // if (!res.ok) {
    //   const errorBody = await res.json().catch(() => ({}));
    //   return { ok: false, error: errorBody?.message ?? 'Failed to send inquiry' };
    // }
    //
    // return { ok: true, data: await res.json() };

    console.info('[sendContactInquiry] Stubbed payload:', payload);

    // Simulate network latency for better UX testing
    await new Promise((resolve) => setTimeout(resolve, 800));

    return { ok: true };
  } catch (err) {
    console.error('[sendContactInquiry] Error:', err);
    return { ok: false, error: 'Something went wrong while sending your inquiry. Please try again.' };
  }
}

