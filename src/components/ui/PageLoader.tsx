import React from 'react';
import { SkeletonCard } from './Skeleton';

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header skeleton */}
        <div className="mb-12 space-y-4">
          <div className="h-12 w-64 bg-slate-800/50 rounded-lg animate-pulse" />
          <div className="h-6 w-96 bg-slate-800/50 rounded-lg animate-pulse" />
        </div>

        {/* Content skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} showImage={i < 3} showTitle showText lines={3} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
