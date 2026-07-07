'use client';

import { useGSAP } from '@gsap/react';

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useBlogAnimation(ref: React.RefObject<HTMLDivElement>) {
  useGSAP(
    () => {
      gsap.from(
        '.animate-blog',

        {
          opacity: 0,

          y: 40,

          duration: 0.7,

          stagger: 0.12,

          scrollTrigger: {
            trigger: ref.current,

            start: 'top 80%',
          },
        },
      );
    },
    {
      scope: ref,
    },
  );
}
