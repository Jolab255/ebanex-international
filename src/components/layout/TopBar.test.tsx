import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TopBar from './TopBar';

describe('TopBar', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <TopBar />
      </BrowserRouter>,
    );
    expect(screen.getByText(/Welcome to/)).toBeInTheDocument();
  });

  it('displays phone number', () => {
    render(
      <BrowserRouter>
        <TopBar />
      </BrowserRouter>,
    );
    expect(screen.getByText('+255 745 326 627')).toBeInTheDocument();
  });

  it('displays email', () => {
    render(
      <BrowserRouter>
        <TopBar />
      </BrowserRouter>,
    );
    expect(screen.getByText('hello@ebanex.com')).toBeInTheDocument();
  });
});
