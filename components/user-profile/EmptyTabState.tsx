interface EmptyTabStateProps {
  message: string;
  subMessage: string;
}

export default function EmptyTabState({
  message,
  subMessage,
}: EmptyTabStateProps) {
  return (
    <div className="max-w-md mx-auto space-y-4 flex flex-col items-center">
      <div className="text-gray-400 p-3 bg-gray-50 rounded-full">
        {/* Custom Stethoscope Minimal SVG Icon matching the design */}
        <svg
          className="w-14 h-14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
          />
          <circle cx="19" cy="11" r="1.5" />
        </svg>
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-medium text-gray-900">{message}</h3>
        <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-light px-4">
          {subMessage}
        </p>
      </div>
    </div>
  );
}
