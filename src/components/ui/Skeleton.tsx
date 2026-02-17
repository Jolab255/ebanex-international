import React from 'react';
import { cn } from '../../lib/utils';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  width?: string | number;
  height?: string | number;
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'rectangular',
  width,
  height,
  className,
  style,
  ...props
}) => {
  const baseClasses = 'animate-pulse bg-slate-800/50';
  
  const variantClasses = {
    text: 'rounded h-4',
    circular: 'rounded-full',
    rectangular: 'rounded',
    rounded: 'rounded-lg',
  };

  const combinedStyle: React.CSSProperties = {
    width: width || (variant === 'text' ? '100%' : undefined),
    height: height || (variant === 'text' ? undefined : '1rem'),
    ...style,
  };

  return (
    <div
      className={cn(baseClasses, variantClasses[variant], className)}
      style={combinedStyle}
      {...props}
    />
  );
};

// Shimmer effect component for more polished loading states
export const SkeletonShimmer: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={cn(
        'absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent',
        className
      )}
      style={{
        animation: 'shimmer 2s infinite',
      }}
    />
  );
};

// Pre-built skeleton components for common patterns
export const SkeletonText: React.FC<{
  lines?: number;
  className?: string;
  lastLineWidth?: string;
}> = ({ lines = 3, className, lastLineWidth = '60%' }) => {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          width={i === lines - 1 ? lastLineWidth : '100%'}
          className="h-4"
        />
      ))}
    </div>
  );
};

export const SkeletonCard: React.FC<{
  showImage?: boolean;
  showTitle?: boolean;
  showText?: boolean;
  lines?: number;
  className?: string;
}> = ({ showImage = true, showTitle = true, showText = true, lines = 3, className }) => {
  return (
    <div className={cn('glass rounded-2xl border border-white/10 p-6 space-y-4 relative overflow-hidden', className)}>
      <SkeletonShimmer />
      {showImage && (
        <Skeleton variant="rounded" width="100%" height="200px" className="relative z-10" />
      )}
      {showTitle && (
        <Skeleton variant="text" width="70%" height="24px" className="relative z-10" />
      )}
      {showText && (
        <SkeletonText lines={lines} className="relative z-10" />
      )}
    </div>
  );
};

export const SkeletonAvatar: React.FC<{
  size?: number;
  className?: string;
}> = ({ size = 40, className }) => {
  return (
    <Skeleton
      variant="circular"
      width={size}
      height={size}
      className={className}
    />
  );
};

export const SkeletonImage: React.FC<{
  aspectRatio?: string;
  className?: string;
}> = ({ aspectRatio = '16/9', className }) => {
  return (
    <div className={cn('relative overflow-hidden rounded-lg', className)} style={{ aspectRatio }}>
      <Skeleton variant="rounded" className="absolute inset-0" />
      <SkeletonShimmer />
    </div>
  );
};

export const SkeletonButton: React.FC<{
  width?: string | number;
  height?: string | number;
  className?: string;
}> = ({ width = '120px', height = '40px', className }) => {
  return (
    <Skeleton
      variant="rounded"
      width={width}
      height={height}
      className={cn('rounded-full', className)}
    />
  );
};

export default Skeleton;
