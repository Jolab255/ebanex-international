import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TopBar from './TopBar';

describe('TopBar', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <TopBar />
      </BrowserRouter>,
    );
    // Component should have a fixed container for side icons
    expect(document.querySelector('.fixed.right-2')).toBeInTheDocument();
  });

  it('displays phone number when panel is active', () => {
    render(
      <BrowserRouter>
        <TopBar />
      </BrowserRouter>,
    );
    
    // Find phone button (using the lucide-phone class or similar, but simpler to use role if available)
    // The button has a Phone icon. We can find by querySelector or role.
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]); // Phone is first in contactInfo

    expect(screen.getByText('+255 745 326 627')).toBeInTheDocument();
  });

  it('displays email when panel is active', () => {
    render(
      <BrowserRouter>
        <TopBar />
      </BrowserRouter>,
    );
    
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[1]); // Email is second in contactInfo

    expect(screen.getByText('info@ebanexint.co.tz')).toBeInTheDocument();
  });
});
