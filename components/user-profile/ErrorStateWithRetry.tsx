import { Loader2, RefreshCw, AlertCircle } from 'lucide-react';

interface ErrorStateWithRetryProps {
  message: string;
  retryCount: number;
  maxRetries: number;
  isRetrying: boolean;
  onRetry: () => void;
}

export default function ErrorStateWithRetry({
  message,
  retryCount,
  maxRetries,
  isRetrying,
  onRetry,
}: ErrorStateWithRetryProps) {
  return (
    <div className="max-w-md mx-auto space-y-4 flex flex-col items-center">
      <div className="text-redColor">
        <AlertCircle className="w-12 h-12" />
      </div>
      <div className="space-y-1 text-center">
        <h3 className="text-lg font-medium text-blackColor">Something went wrong</h3>
        <p className="text-xs md:text-sm text-grayColor1 leading-relaxed px-4">
          {message}
        </p>
        {retryCount < maxRetries && (
          <p className="text-xs text-grayColor1">
            Attempts remaining: {maxRetries - retryCount}
          </p>
        )}
      </div>
      {retryCount < maxRetries && (
        <button
          onClick={onRetry}
          disabled={isRetrying}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-primaryColor text-white hover:bg-primaryColor/80 disabled:opacity-50 transition-colors"
        >
          {isRetrying ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Retrying...
            </>
          ) : (
            <>
              <RefreshCw className="w-4 h-4" />
              Try Again
            </>
          )}
        </button>
      )}
      {retryCount >= maxRetries && (
        <p className="text-xs text-redColor">
          Maximum retry attempts reached. Please refresh the page.
        </p>
      )}
    </div>
  );
}