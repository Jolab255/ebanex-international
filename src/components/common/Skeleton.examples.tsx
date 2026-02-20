/**
 * Skeleton Loading Components - Usage Examples
 * 
 * This file demonstrates how to use the skeleton loading components
 * throughout your application. These components provide a polished
 * loading experience that matches your app's design system.
 */

import React from 'react';
import Skeleton, {
  SkeletonText,
  SkeletonCard,
  SkeletonAvatar,
  SkeletonImage,
  SkeletonButton,
} from './Skeleton';

// Example 1: Basic skeleton with different variants
export const BasicExamples = () => (
  <div className="space-y-4 p-6">
    <Skeleton variant="text" width="100%" />
    <Skeleton variant="rectangular" width="200px" height="100px" />
    <Skeleton variant="circular" width="50px" height="50px" />
    <Skeleton variant="rounded" width="300px" height="150px" />
  </div>
);

// Example 2: Text skeleton with multiple lines
export const TextSkeletonExample = () => (
  <div className="p-6">
    <SkeletonText lines={4} lastLineWidth="60%" />
  </div>
);

// Example 3: Card skeleton (perfect for content cards)
export const CardSkeletonExample = () => (
  <div className="grid md:grid-cols-3 gap-6 p-6">
    <SkeletonCard showImage showTitle showText lines={3} />
    <SkeletonCard showImage showTitle showText lines={2} />
    <SkeletonCard showImage={false} showTitle showText lines={4} />
  </div>
);

// Example 4: Avatar skeleton
export const AvatarSkeletonExample = () => (
  <div className="flex items-center gap-4 p-6">
    <SkeletonAvatar size={40} />
    <SkeletonAvatar size={60} />
    <SkeletonAvatar size={80} />
  </div>
);

// Example 5: Image skeleton with aspect ratio
export const ImageSkeletonExample = () => (
  <div className="grid md:grid-cols-2 gap-6 p-6">
    <SkeletonImage aspectRatio="16/9" />
    <SkeletonImage aspectRatio="4/3" />
    <SkeletonImage aspectRatio="1/1" />
  </div>
);

// Example 6: Button skeleton
export const ButtonSkeletonExample = () => (
  <div className="flex gap-4 p-6">
    <SkeletonButton width="120px" height="40px" />
    <SkeletonButton width="150px" height="48px" />
    <SkeletonButton width="200px" height="56px" />
  </div>
);

// Example 7: Complex layout skeleton (like a blog post or article)
export const ArticleSkeletonExample = () => (
  <div className="max-w-4xl mx-auto p-6 space-y-6">
    {/* Header */}
    <div className="space-y-4">
      <Skeleton variant="text" width="60%" height="32px" />
      <Skeleton variant="text" width="40%" height="20px" />
    </div>

    {/* Featured Image */}
    <SkeletonImage aspectRatio="16/9" />

    {/* Content */}
    <SkeletonText lines={6} />
    <SkeletonText lines={4} lastLineWidth="70%" />

    {/* Author info */}
    <div className="flex items-center gap-4">
      <SkeletonAvatar size={50} />
      <div className="space-y-2 flex-1">
        <Skeleton variant="text" width="30%" height="16px" />
        <Skeleton variant="text" width="20%" height="14px" />
      </div>
    </div>
  </div>
);

// Example 8: List item skeleton
export const ListItemSkeletonExample = () => (
  <div className="space-y-4 p-6">
    {Array.from({ length: 5 }).map((_, i) => (
      <div key={i} className="flex items-center gap-4 glass p-4 rounded-lg">
        <SkeletonAvatar size={48} />
        <div className="flex-1 space-y-2">
          <Skeleton variant="text" width="40%" height="18px" />
          <Skeleton variant="text" width="80%" height="14px" />
        </div>
        <SkeletonButton width="80px" height="32px" />
      </div>
    ))}
  </div>
);
