import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="custom-container py-10 lg:py-14">
      <div className="space-y-8">
        {/* Hero Skeleton */}
        <Skeleton className="w-full h-[400px] rounded-[20px]" />
        
        {/* Content Skeleton */}
        <div className="grid gap-8 lg:grid-cols-[380px_minmax(0,1fr)]">
          {/* Sidebar Skeleton */}
          <div className="space-y-4">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          
          {/* Article Skeleton */}
          <div className="space-y-6">
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-64 w-full rounded-[12px]" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
