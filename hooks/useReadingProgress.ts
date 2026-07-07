'use client';

import { useEffect, useState } from 'react';

export default function useReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percent = (scrollTop / documentHeight) * 100;

      setProgress(percent);
    };

    calculateProgress();

    window.addEventListener('scroll', calculateProgress);

    return () => window.removeEventListener('scroll', calculateProgress);
  }, []);

  return progress;
}
