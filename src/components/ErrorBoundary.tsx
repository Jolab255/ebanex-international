import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
  errorStack: string;
  detailsOpen: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    errorMessage: '',
    errorStack: '',
    detailsOpen: false,
  };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true, errorMessage: '', errorStack: '', detailsOpen: false };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidCatch(error: unknown, info: React.ErrorInfo) {
    // Capture error details for enhanced debugging in the UI
    const message = error instanceof Error ? error.message : String(error);
    const stack = info?.componentStack ?? '';
    this.setState({
      errorMessage: message,
      errorStack: stack,
    });
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  private detectAreaFromStack(stack: string): string {
    if (!stack) return 'Unknown area';
    const sections = [
      'TrainingApproachSection',
      'ClientsSection',
      'CoreServicesSection',
      'WhoWeAreSection',
      'HeroSection',
      'Home',
    ];
    for (const s of sections) {
      if (stack.includes(s)) return s;
    }
    return 'Unknown area';
  }

  render() {
    if (this.state.hasError) {
      const area = this.detectAreaFromStack(this.state.errorStack);
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center bg-slate-950 px-4">
          <div className="glass max-w-2xl w-full p-6 rounded-2xl border border-red-500/30 text-center text-slate-100">
            <h2 className="text-2xl font-bold mb-2 text-red-300">Something went wrong.</h2>
            <p className="mb-4 text-slate-300">
              An unexpected error occurred while rendering this section. You can try refreshing the
              page, or come back later.
            </p>
            <button
              type="button"
              onClick={this.handleReset}
              className="inline-flex items-center justify-center px-6 py-2 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition-colors"
            >
              Try again
            </button>
          </div>
          <details className="mt-6 w-full max-w-2xl text-left bg-slate-900/40 text-slate-100 rounded-md p-3">
            <summary className="cursor-pointer font-semibold">
              Error details (click to expand)
            </summary>
            <pre className="mt-2 text-xs" aria-label="error-details">
              {`Area: ${area}`}
              {`\nMessage: ${this.state.errorMessage}`}
              {`\nStack:\n${this.state.errorStack}`}
            </pre>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
