'use client';

import React from 'react';

type MessageEmptyStateProps = {
  title?: string;
  subTitle?: string;
  onMessageCareTeam?: () => void;
};

export default function MessageEmptyState({
  title = 'No messages yet',
  subTitle = 'Need help with your treatment, prescription, or order?',
  onMessageCareTeam,
}: MessageEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 py-12 max-w-md mx-auto space-y-4">
      {/* Empty State Icon */}
      <div className="relative w-20 h-20 flex items-center justify-center mb-1">
        <svg
          width="76"
          height="76"
          viewBox="0 0 76 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Speech Bubble */}
          <path
            d="M36 54C47.0457 54 56 46.165 56 36.5C56 26.835 47.0457 19 36 19C24.9543 19 16 26.835 16 36.5C16 41.8142 18.6908 46.5702 22.9161 49.7806L20 59L29.6521 55.4559C31.6268 56.446 33.7645 54 36 54Z"
            stroke="#9CA3AF"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Three dots */}
          <circle cx="28" cy="36.5" r="1.3" fill="#9CA3AF" />
          <circle cx="36" cy="36.5" r="1.3" fill="#9CA3AF" />
          <circle cx="44" cy="36.5" r="1.3" fill="#9CA3AF" />
          {/* X mark on top right */}
          <path
            d="M50 17L62 29M62 17L50 29"
            stroke="#9CA3AF"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Text Content */}
      <div className="space-y-1.5">
        <h3 className="text-lg sm:text-xl font-medium text-secondary-text">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 italic font-light max-w-xs sm:max-w-sm">
          {subTitle}
        </p>
      </div>

      {/* Action Button */}
      {onMessageCareTeam && (
        <button
          type="button"
          onClick={onMessageCareTeam}
          className="mt-3 px-6 py-2.5 bg-[#102B1C] hover:bg-[#1c3d2a] text-white text-xs sm:text-sm font-medium rounded-full transition-colors shadow-sm cursor-pointer"
        >
          Message Care Team
        </button>
      )}
    </div>
  );
}
