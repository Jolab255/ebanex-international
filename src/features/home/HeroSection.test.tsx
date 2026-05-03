import { describe, it, expect, vi, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HeroSection from './HeroSection';

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: React.ComponentPropsWithoutRef<'div'>) => <div {...props}>{children}</div>,
        h1: ({ children, ...props }: React.ComponentPropsWithoutRef<'h1'>) => <h1 {...props}>{children}</h1>,
        span: ({ children, ...props }: React.ComponentPropsWithoutRef<'span'>) => <span {...props}>{children}</span>,
        p: ({ children, ...props }: React.ComponentPropsWithoutRef<'p'>) => <p {...props}>{children} </p>,
    },
    useScroll: () => ({ scrollY: { get: () => 0, onChange: () => { } } }),
    useTransform: () => 0,
}));

beforeAll(() => {
    // Mock HTMLMediaElement.prototype.play to avoid "play() is not implemented" errors
    Object.defineProperty(HTMLMediaElement.prototype, 'play', {
        configurable: true,
        value: vi.fn().mockResolvedValue(undefined),
    });
});

describe('HeroSection', () => {
    it('renders main heading and description', () => {
        render(
            <BrowserRouter>
                <HeroSection />
            </BrowserRouter>
        );

        // Check for main highlights in the heading
        expect(screen.getAllByText(/Strengthening/i).length).toBeGreaterThan(0);
        expect(screen.getByText(/Organizations/i)).toBeInTheDocument();
        expect(screen.getByText(/Securing the Future/i)).toBeInTheDocument();

        // Check for company description text
        expect(screen.getByText(/global training and advisory firm/i)).toBeInTheDocument();
    });

    it('renders all call to action buttons', () => {
        render(
            <BrowserRouter>
                <HeroSection />
            </BrowserRouter>
        );

        expect(screen.getByText(/View Training Programs/i)).toBeInTheDocument();
        expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
    });
});
