import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
        h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
        span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
        p: ({ children, ...props }: any) => <p {...props}>{children} </p>,
    },
    useScroll: () => ({ scrollY: { get: () => 0, onChange: () => { } } }),
    useTransform: () => 0,
}));

// Mock DataFlowMap component
vi.mock('../../components/animations', () => ({
    DataFlowMap: () => <div data-testid="data-flow-map">Map Mock</div>,
}));

describe('HeroSection', () => {
    it('renders main heading and description', () => {
        render(<HeroSection />);

        // Check for main highlights in the heading
        expect(screen.getByText(/Strengthening/i)).toBeInTheDocument();
        expect(screen.getByText(/Organizations/i)).toBeInTheDocument();
        expect(screen.getByText(/Securing the Future/i)).toBeInTheDocument();

        // Check for company description text
        expect(screen.getByText(/global training and advisory firm/i)).toBeInTheDocument();
    });

    it('renders all call to action buttons', () => {
        render(<HeroSection />);

        expect(screen.getByText(/View Training Programs/i)).toBeInTheDocument();
        expect(screen.getByText(/Partner With Us/i)).toBeInTheDocument();
        expect(screen.getByText(/Request Corporate Training/i)).toBeInTheDocument();
        expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
    });

    it('renders the DataFlowMap', () => {
        render(<HeroSection />);
        expect(screen.getByTestId('data-flow-map')).toBeInTheDocument();
    });
});
