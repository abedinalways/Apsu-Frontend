'use client';

import { useEffect } from 'react';

export default function Error({
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
    <div className="custom-container py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-600 mb-8">
          We couldn't load the blog post. Please try again.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-[#2d6a4f] text-white rounded-lg hover:bg-[#1b4332] transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}