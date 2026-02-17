import React from 'react';
import { cn } from '../../lib/utils';

interface SkeletonProps {
    className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
    return (
        <div
            className={cn(
                "animate-pulse bg-slate-800/50 rounded-md relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent",
                className
            )}
        />
    );
};

export const HomeSkeleton: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-950 pt-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-4 mb-12">
                    <Skeleton className="h-10 w-48 opacity-40" />
                    <Skeleton className="h-20 w-3/4 max-w-2xl" />
                    <Skeleton className="h-20 w-1/2 max-w-xl" />
                    <Skeleton className="h-10 w-64 opacity-60" />
                </div>

                <div className="flex flex-col gap-12">
                    <Skeleton className="h-24 w-full max-w-2xl opacity-30" />
                    <div className="flex flex-wrap gap-4">
                        <Skeleton className="h-14 w-48 rounded-sm" />
                        <Skeleton className="h-14 w-48 rounded-sm" />
                        <Skeleton className="h-14 w-48 rounded-sm" />
                        <Skeleton className="h-14 w-14 rounded-sm" />
                    </div>
                </div>
            </div>

            {/* Globe Placeholder */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] hidden lg:block">
                <div className="w-full h-full rounded-full bg-slate-800/10 border border-white/5 animate-pulse" />
            </div>
        </div>
    );
};
