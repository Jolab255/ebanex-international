import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar', () => {
  const renderWithRouter = (initialPath = '/') =>
    render(
      <MemoryRouter initialEntries={[initialPath]}>
        <Navbar />
      </MemoryRouter>,
    );

  it('renders brand and navigation links', () => {
    renderWithRouter();

    expect(screen.getByText(/EBANEX/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link').length).toBeGreaterThan(0);
  });

  it('highlights the active route', () => {
    renderWithRouter('/contact');
    const contactLinks = screen.getAllByText(/Contact/i);
    expect(contactLinks.length).toBeGreaterThan(0);
  });

  it('toggles mobile menu', () => {
    renderWithRouter();

    const toggle = screen.getByRole('button');
    fireEvent.click(toggle);
    expect(screen.getByText(/Contact Expert/i)).toBeInTheDocument();
  });
});

