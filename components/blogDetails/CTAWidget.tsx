'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import ThumbnailIcon from '../icons/TumbnailIcon';
import ReusableButton from '../reusable/button/ReusableButton';
import PrimaryButton from '../reusable/button/PrimaryButton';

export default function CTAWidget() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVideoOpen(true);
  }, []);

  const closeVideo = useCallback(() => {
    setIsVideoOpen(false);
  }, []);

  
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Escape') closeVideo();
    },
    [closeVideo],
  );

  return (
    <div className="overflow-hidden rounded-[20px] border border-[#ECECEC] bg-white shadow-[0_10px_30px_rgba(0,0,0,.04)]">
      <div className="relative aspect-[4/3]">
        <Image
          src="/images/blogDetails/Thumbnail.png"
          alt="CTA"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={() => setIsVideoOpen(true)}
            className="flex cursor-pointer items-center justify-center"
          >
            <ThumbnailIcon />
          </button>
        </div>
      </div>

      <div className="p-6">
        <h4 className="text-[24px] font-medium text-center text-text-primary">
          Start your journey today
        </h4>

        <div className="max-h-fit pt-4 flex items-center justify-center">
          <PrimaryButton
            text="Get Started with APSU"
            href="/"
            className="whitespace-nowrap"
          />
        </div>
      </div>

      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-[20px] bg-black"
            onClick={e => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-black hover:bg-white"
              aria-label="Close video"
            >
              <X size={18} />
            </button>

            <video
              src="/videos/demo.mp4"
              controls
              autoPlay
              className="w-full h-auto aspect-video"
            />
          </div>
        </div>
      )}
    </div>
  );
}
