'use client';

import { useState, useCallback, useRef } from 'react';
import Image from 'next/image';
import { Camera, Paperclip, Send } from 'lucide-react';
import type { MessageAttachment } from '@/types/messaging';

type MessageComposerProps = {
  onSend: (body: string, attachment?: MessageAttachment) => void;
};

export default function MessageComposer({ onSend }: MessageComposerProps) {
  const [draft, setDraft] = useState('');
  const [attachment, setAttachment] = useState<MessageAttachment | null>(null);
  const lastSentTimeRef = useRef(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(() => {
    const now = Date.now();
    // Prevent double submission within 500ms
    if (now - lastSentTimeRef.current < 500) {
      return;
    }

    const trimmed = draft.trim();
    const hasContent = trimmed || attachment;

    if (!hasContent) return;

    // Update timestamp immediately
    lastSentTimeRef.current = now;

    onSend(trimmed, attachment || undefined);
    setDraft('');
    setAttachment(null);
  }, [draft, attachment, onSend]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSubmit();
      }
    },
    [handleSubmit],
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      // Limit file size to 5MB
      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        alert('File size must be less than 5MB');
        e.target.value = '';
        return;
      }

      // Use object URL for all files - instant and no freezing
      const objectUrl = URL.createObjectURL(file);
      const newAttachment: MessageAttachment = {
        id: `att-${Date.now()}`,
        type: file.type.startsWith('image/') ? 'image' : 'document',
        url: objectUrl,
        name: file.name,
      };

      setAttachment(newAttachment);
      e.target.value = '';
    },
    [],
  );

  const handleCameraClick = useCallback(() => {
    cameraInputRef.current?.click();
  }, []);

  const handleAttachmentClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  return (
    <div className="shrink-0 border-t border-background bg-white px-3 py-3 sm:px-4 sm:py-4">
      {/* Hidden file inputs */}
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileSelect}
        className="hidden"
        accept="image/*,.pdf,.doc,.docx"
      />
      <input
        ref={cameraInputRef}
        type="file"
        capture="environment"
        onChange={handleFileSelect}
        className="hidden"
        accept="image/*"
      />

      {/* Attachment preview */}
      {attachment && (
        <div className="mb-2 flex items-center gap-2 rounded-lg border border-lightGreenColor bg-background p-2">
          {attachment.type === 'image' ? (
            <Image
              src={attachment.url}
              alt={attachment.name}
              width={48}
              height={48}
              className="h-12 w-12 rounded object-cover"
            />
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded bg-lightGreenColor">
              <Paperclip className="h-6 w-6 text-grayColor1" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <p className="truncate text-xs text-secondary-text">
              {attachment.name}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setAttachment(null)}
            className="text-grayColor1 hover:text-blackColor"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}

      <div className="flex items-center gap-1.5 sm:gap-2 w-full min-w-0">
        {/* Camera button */}
        <button
          type="button"
          onClick={handleCameraClick}
          className="inline-flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-greenColor text-white transition hover:bg-greenColor"
          aria-label="Camera"
        >
          <Camera className="h-4 w-4" />
        </button>

        {/* Attachment button */}
        <button
          type="button"
          onClick={handleAttachmentClick}
          className="inline-flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-greenColor text-white transition hover:bg-greenColor"
          aria-label="Attach file"
        >
          <Paperclip className="h-4 w-4" />
        </button>

        {/* Text input field */}
        <input
          id="message-composer"
          type="text"
          value={draft}
          onChange={e => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a new message.."
          className="flex-1 min-w-0 h-9 sm:h-10 rounded-[20px] border border-lightGreenColor bg-white px-3 sm:px-4 py-2 text-xs sm:text-sm text-secondary-text outline-none placeholder:text-grayColor1 focus:border-lightGreenColor"
        />
        <label htmlFor="message-composer" className="sr-only">
          Type a new message
        </label>

        {/* Send button */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!draft.trim() && !attachment}
          className="inline-flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border-2 border-greenColor text-greenColor transition hover:bg-greenColor hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Send message"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
