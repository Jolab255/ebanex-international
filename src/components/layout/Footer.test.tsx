import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

describe('Footer', () => {
    it('renders correctly', () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );

        // Check for Brand Name
        expect(screen.getByText(/EBANEX/i)).toBeInTheDocument();

        // Check for Section Headers
        expect(screen.getByText(/Services/i)).toBeInTheDocument();
        expect(screen.getByText(/Company/i)).toBeInTheDocument();
        expect(screen.getByText(/Connect/i)).toBeInTheDocument();
    });

    it('displays contact information', () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );

        expect(screen.getByText(/Dar es Salaam/i)).toBeInTheDocument();
        expect(screen.getByText(/info@ebanex.com/i)).toBeInTheDocument();
    });
});
