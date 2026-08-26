'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Languages, X, Download } from 'lucide-react';
import type { Message } from '@/types/messaging';
import Image from 'next/image';

type MessageBubbleProps = {
  message: Message;
  isNew?: boolean;
  showTranslation?: boolean;
  userLanguage?: string;
};

export default function MessageBubble({
  message,
  isNew,
  showTranslation,
  userLanguage,
}: MessageBubbleProps) {
  const isUser = message.sender === 'user';
  const isSystem = message.sender === 'system';
  const [showImagePreview, setShowImagePreview] = useState(false);

  if (isSystem) {
    return (
      <div className={cn('flex justify-center', isNew && 'animate-fade-in')}>
        <span className="rounded-full border border-lightGreenColor bg-white px-3 py-1 text-xs font-medium text-grayColor1">
          {message.body}
        </span>
      </div>
    );
  }

  const displayLanguage = isUser ? userLanguage || 'Your Language' : 'English';

  return (
    <div
      className={cn(
        'flex',
        isUser ? 'justify-end' : 'justify-start',
        isNew && 'animate-slide-up',
      )}
    >
      <div className="max-w-[85%] sm:max-w-[70%] min-w-0 ">
        {!isUser && <div className="flex items-start gap-2 mb-1"></div>}
        <div
          className={cn(
            'rounded-[20px] px-3 py-2.5 text-xs sm:text-sm leading-5 sm:leading-6',
            isUser
              ? 'bg-lightGreenColor text-secondary-text rounded-tr-sm'
              : 'bg-background border border-lightGreenColor text-secondary-text rounded-tl-sm',
          )}
        >
          <p className="break-words whitespace-pre-wrap">{message.body}</p>
          {message.attachment && (
            <div className="mt-2">
              {message.attachment.type === 'image' ? (
                <div className="relative inline-block">
                  <Image
                    src={message.attachment.url}
                    width={240}
                    height={240}
                    alt={message.attachment.name}
                    className="rounded-lg max-w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setShowImagePreview(true)}
                  />
                </div>
              ) : (
                <a
                  href={message.attachment.url}
                  download={message.attachment.name}
                  className="flex items-center gap-2 rounded-lg border border-lightGreenColor bg-white p-2 hover:bg-background transition-colors cursor-pointer"
                >
                  <svg
                    className="h-5 w-5 text-grayColor1"
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
                  <span className="text-xs text-secondary-text flex-1">
                    {message.attachment.name}
                  </span>
                  <Download className="w-4 h-4 text-grayColor1" />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Image Preview Modal */}
        {showImagePreview && message.attachment?.type === 'image' && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setShowImagePreview(false)}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
              <button
                onClick={() => setShowImagePreview(false)}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors z-10"
                aria-label="Close preview"
              >
                <X className="w-6 h-6" />
              </button>
              <Image
                src={message.attachment.url}
                alt={message.attachment.name}
                width={340}
                height={340}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={e => e.stopPropagation()}
              />
            </div>
          </div>
        )}

        {/* Translation section */}
        {showTranslation && (
          <div className="mt-2 space-y-2">
            <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
              <p className="text-xs text-grayColor1 mb-1.5 font-medium">
                Translated into {isUser ? 'English' : userLanguage}
              </p>
              <p className="text-sm text-blackColor leading-relaxed">
                "{message.body}"
              </p>
            </div>
          </div>
        )}
        <div
          className={cn(
            'mt-1 flex items-center gap-2 text-[11px] text-grayColor1',
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
        </div>
      </div>
    </div>
  );
}
