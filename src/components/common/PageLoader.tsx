import React from 'react';

export const PageLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-12">
        {/* Header skeleton */}
        <div className="mb-12 space-y-4">
          <div className="h-12 w-64 bg-slate-800/50 rounded-lg animate-pulse" />
          <div className="h-6 w-96 bg-slate-800/50 rounded-lg animate-pulse" />
        </div>

        {/* Hero skeleton */}
        <div className="mb-16">
          <div className="h-[400px] bg-slate-800/30 rounded-lg animate-pulse" />
        </div>

        {/* Content grid skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="h-[200px] bg-slate-800/30 rounded-lg animate-pulse" />
              <div className="h-6 w-[80%] bg-slate-800/50 rounded-lg animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 bg-slate-800/30 rounded animate-pulse" />
                <div className="h-4 bg-slate-800/30 rounded animate-pulse" />
                <div className="h-4 w-[60%] bg-slate-800/30 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats skeleton */}
        <div className="grid grid-cols-4 gap-4 mb-12">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-20 bg-slate-800/30 rounded-lg animate-pulse" />
          ))}
        </div>

        {/* CTA skeleton */}
        <div className="h-[200px] bg-slate-800/30 rounded-lg animate-pulse" />
      </div>

      {/* Loading overlay animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent animate-pulse" />
      </div>
    </div>
  );
};

export default PageLoader;
