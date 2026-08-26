'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Blog details error:', error);
  }, [error]);

  return (
    <div className="custom-container py-10 lg:py-14">
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">
            Blog not found
          </h2>
          <p className="text-grayColor1">
            The article you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
        </div>
        <div className="flex gap-3">
          <Button onClick={reset} variant="outline" className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Try again
          </Button>
          <Button asChild>
            <Link href="/blog">Back to blogs</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
