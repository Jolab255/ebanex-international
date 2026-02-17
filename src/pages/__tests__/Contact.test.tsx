import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import * as api from '../../lib/api';
import Contact from '../Contact';

describe('Contact page form', () => {
  it('validates required fields', async () => {
    render(<Contact />);

    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    expect(await screen.findByText(/Full name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Work email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Please tell us how we can help/i)).toBeInTheDocument();
  });

  it('submits successfully with valid data', async () => {
    const spy = vi.spyOn(api, 'sendContactInquiry').mockResolvedValue({ ok: true });

    render(<Contact />);

    fireEvent.change(screen.getByPlaceholderText(/John Doe/i), {
      target: { value: 'Test User' },
    });
    fireEvent.change(screen.getByPlaceholderText(/john@enterprise.com/i), {
      target: { value: 'user@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/How can we help you\?/i), {
      target: { value: 'This is a longer valid message for testing.' },
    });

    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(spy).toHaveBeenCalledTimes(1);
    });

    expect(
      await screen.findByText(/Your inquiry has been received/i),
    ).toBeInTheDocument();
  });
});

