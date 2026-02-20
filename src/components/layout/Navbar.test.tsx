import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    expect(document.querySelector('nav')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });
});
