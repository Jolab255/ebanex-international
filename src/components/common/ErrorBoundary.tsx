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

  componentDidCatch(error: unknown, info: React.ErrorInfo) {
    // Capture error details for enhanced debugging in the UI
    const message = error instanceof Error ? error.message : String(error);
    const stack = info?.componentStack ?? '';

    // Detect if this is a chunk loading error (common after new deployments)
    const isChunkError =
      message.includes('Failed to fetch dynamically imported module') ||
      message.includes('Importing a module script failed') ||
      message.includes('error loading dynamically imported module');

    this.setState({
      errorMessage: message,
      errorStack: stack,
    });

    if (isChunkError) {
      console.warn('Chunk loading error detected. This usually happens after a new deployment.');
      // Optionally auto-reload after a short delay, but for now we'll just show a better UI
    }

    console.error('ErrorBoundary caught an error:', error, info);
  }

  handleReset = () => {
    // If it's a chunk error, a simple state reset won't help; we need a hard reload
    const isChunkError =
      this.state.errorMessage.includes('Failed to fetch dynamically imported module') ||
      this.state.errorMessage.includes('Importing a module script failed') ||
      this.state.errorMessage.includes('error loading dynamically imported module');

    if (isChunkError) {
      window.location.reload();
    } else {
      this.setState({ hasError: false });
    }
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
      const isChunkError =
        this.state.errorMessage.includes('Failed to fetch dynamically imported module') ||
        this.state.errorMessage.includes('Importing a module script failed') ||
        this.state.errorMessage.includes('error loading dynamically imported module');

      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center bg-slate-950 px-4">
          <div className="glass max-w-2xl w-full p-8 rounded-2xl border border-[#00BFFF]/30 text-center text-slate-100 shadow-[0_0_50px_rgba(0,191,255,0.1)]">
            <div className="w-16 h-16 bg-[#00BFFF]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              {isChunkError ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00BFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 2v6h-6" />
                  <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
                  <path d="M3 22v-6h6" />
                  <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF4B4B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              )}
            </div>

            <h2 className="text-2xl font-bold mb-3 text-white">
              {isChunkError ? 'Update Available' : 'Something went wrong'}
            </h2>

            <p className="mb-8 text-slate-400 max-w-md mx-auto leading-relaxed">
              {isChunkError
                ? 'A new version of Ebanex International is available. Please refresh to load the latest changes.'
                : 'An unexpected error occurred while rendering this section. You can try refreshing the page.'}
            </p>

            <button
              type="button"
              onClick={this.handleReset}
              className="inline-flex items-center justify-center px-8 py-3 rounded-none bg-[#00BFFF] text-black text-sm font-black uppercase tracking-widest hover:bg-white transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              {isChunkError ? 'Refresh Now' : 'Try again'}
            </button>
          </div>

          <details className="mt-8 w-full max-w-2xl text-left bg-white/5 text-slate-400 rounded-none p-4 border border-white/10">
            <summary className="cursor-pointer font-bold text-[10px] uppercase tracking-widest hover:text-[#00BFFF] transition-colors">
              Technical details
            </summary>
            <pre className="mt-4 text-[10px] leading-relaxed overflow-x-auto p-4 bg-black/50 border border-white/5">
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
