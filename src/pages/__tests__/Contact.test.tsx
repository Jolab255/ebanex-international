import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import * as api from '../../lib/api';
import Contact from '../Contact';

describe('Contact page form', () => {
  it('validates required fields', async () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByRole('button', { name: /send inquiry/i }));

    expect(await screen.findByText(/Full name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Work email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Please tell us how we can help/i)).toBeInTheDocument();
  });

  it('submits successfully with valid data', async () => {
    const spy = vi.spyOn(api, 'sendContactInquiry').mockResolvedValue({ ok: true });

    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/EXECUTIVE NAME/i), {
      target: { value: 'Test User' },
    });
    fireEvent.change(screen.getByPlaceholderText(/OFFICIAL@ENTERPRISE.COM/i), {
      target: { value: 'user@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/DESCRIBE YOUR ORGANIZATIONAL NEEDS.../i), {
      target: { value: 'This is a longer valid message for testing.' },
    });

    fireEvent.click(screen.getByRole('button', { name: /send inquiry/i }));

    await waitFor(() => {
      expect(spy).toHaveBeenCalledTimes(1);
    });

    expect(
      await screen.findByText(/Your inquiry has been received/i),
    ).toBeInTheDocument();
  });
});

