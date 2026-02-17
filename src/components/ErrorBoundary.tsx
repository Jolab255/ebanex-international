import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    // eslint-disable-next-line no-console
    console.error('[ErrorBoundary] Caught error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[50vh] flex items-center justify-center bg-slate-950">
          <div className="glass max-w-lg mx-auto px-6 py-10 rounded-2xl border border-red-500/30 text-center text-slate-100">
            <h2 className="text-2xl font-bold mb-4 text-red-300">Something went wrong.</h2>
            <p className="text-slate-400 mb-6">
              An unexpected error occurred while rendering this section. You can try refreshing the page, or come back
              later.
            </p>
            <button
              type="button"
              onClick={this.handleReset}
              className="inline-flex items-center justify-center px-6 py-2 rounded-md bg-purple-600 text-white text-sm font-semibold hover:bg-purple-500 transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

