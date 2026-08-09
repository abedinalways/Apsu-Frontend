'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Languages } from 'lucide-react';
import type { Message } from '@/types/messaging';

type MessageBubbleProps = {
  message: Message;
  isNew?: boolean;
  showTranslation?: boolean;
  onToggleTranslation?: () => void;
  userLanguage?: string;
};

export default function MessageBubble({ message, isNew, showTranslation, onToggleTranslation, userLanguage }: MessageBubbleProps) {
  const isUser = message.sender === 'user';
  const isSystem = message.sender === 'system';
  const [internalShowTranslation, setInternalShowTranslation] = useState(false);
  
  const shouldShowTranslation = showTranslation ?? internalShowTranslation;
  const handleToggle = onToggleTranslation ?? (() => setInternalShowTranslation(prev => !prev));

  if (isSystem) {
    return (
      <div className={cn('flex justify-center', isNew && 'animate-fade-in')}>
        <span className="rounded-full border border-[#D0D5DD] bg-white px-3 py-1 text-xs font-medium text-[#667085]">
          {message.body}
        </span>
      </div>
    );
  }

  const displayLanguage = isUser ? (userLanguage || 'Your Language') : 'English';

  return (
    <div
      className={cn(
        'flex',
        isUser ? 'justify-end' : 'justify-start',
        isNew && 'animate-slide-up',
      )}
    >
      <div className="max-w-[85%] sm:max-w-[70%] min-w-0">
        {!isUser && <div className="flex items-start gap-2 mb-1"></div>}
        <div
          className={cn(
            'rounded-[20px] px-3 py-2.5 text-xs sm:text-sm leading-5 sm:leading-6',
            isUser
              ? 'bg-[#E8F5E9] text-[#142C1E] rounded-tr-sm'
              : 'bg-[#FAF9F4] border border-[#E5E7EB] text-[#142C1E] rounded-tl-sm',
          )}
        >
          <p className="break-words whitespace-pre-wrap">{message.body}</p>
          {message.attachment && (
            <div className="mt-2">
              {message.attachment.type === 'image' ? (
                <img
                  src={message.attachment.url}
                  alt={message.attachment.name}
                  className="rounded-lg max-w-full h-auto"
                />
              ) : (
                <div className="flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white p-2">
                  <svg
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 0 01-2-2V5a2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-xs text-[#142C1E]">
                    {message.attachment.name}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Translation section */}
        {shouldShowTranslation && (
          <div className="mt-2 space-y-2">
            <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
              <p className="text-xs text-gray-500 mb-1.5 font-medium">
                Translated into {isUser ? 'English' : userLanguage}
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                "{message.body}"
              </p>
            </div>
          </div>
        )}
        <div
          className={cn(
            'mt-1 flex items-center gap-2 text-[11px] text-gray-400',
            isUser && 'justify-end',
          )}
        >
          <span className="font-medium">
            {message.senderName} • {displayLanguage}
          </span>
          <span>
            {new Date(message.createdAt).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
          {isUser && (
            <svg
              className="w-3 h-3 text-[#10B981]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          )}
        </div>

        {/* Translation toggle button */}
        <button
          onClick={handleToggle}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#A3C9A8] bg-white hover:bg-[#E8F3ED] text-[11px] font-semibold text-[#102b1c] transition-all cursor-pointer mt-2 hover:shadow-sm"
        >
          <Languages className="w-3.5 h-3.5" />
          {shouldShowTranslation ? 'Hide Translation' : 'Translate'}
        </button>
      </div>
    </div>
  );
}
