'use client';

import useReadingProgress from '@/hooks/useReadingProgress';

export default function ReadingProgress() {
  const progress = useReadingProgress();

  return (
    <div
      className="
      fixed
      top-0
      left-0
      z-[999]
      h-[4px]
      w-full
      bg-transparent
    "
    >
      <div
        className="
          h-full
          bg-success
          transition-all
          duration-150
        "
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}
