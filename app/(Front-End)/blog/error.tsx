'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Blog page error:', error);
  }, [error]);

  return (
    <main className="pt-30 md:pt-50">
      <div className="custom-container flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">Something went wrong</h2>
          <p className="text-grayColor1">We couldn&apos;t load the blog posts. Please try again.</p>
        </div>
        <Button
          onClick={reset}
          variant="outline"
          className="gap-2"
        >
          <RefreshCw className="h-4 w-4" />
          Try again
        </Button>
      </div>
    </main>
  );
}
