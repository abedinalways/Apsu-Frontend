'use client';

import { cn } from '@/lib/utils';
import type { Message } from '@/types/messaging';

type MessageBubbleProps = {
  message: Message;
  isNew?: boolean;
};

export default function MessageBubble({ message, isNew }: MessageBubbleProps) {
  const isUser = message.sender === 'user';
  const isSystem = message.sender === 'system';

  if (isSystem) {
    return (
      <div className={cn('flex justify-center', isNew && 'animate-fade-in')}>
        <span className="rounded-full border border-[#D0D5DD] bg-white px-3 py-1 text-xs font-medium text-[#667085]">
          {message.body}
        </span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'flex',
        isUser ? 'justify-end' : 'justify-start',
        isNew && 'animate-slide-up',
      )}
    >
      <div className="max-w-[85%] sm:max-w-[70%]">
        {!isUser && <div className="flex items-start gap-2 mb-1"></div>}
        <div
          className={cn(
            'rounded-[20px] px-4 py-3 text-sm leading-6',
            isUser
              ? 'bg-[#E8F5E9] text-[#142C1E] rounded-tr-sm'
              : 'bg-[#FAF9F4] border border-[#E5E7EB] text-[#142C1E] rounded-tl-sm',
          )}
        >
          <p>{message.body}</p>
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
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
        <div className="mt-1 flex items-center gap-1 text-[11px] text-gray-400">
          <span>
            {new Date(message.createdAt).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
          {isUser && (
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
