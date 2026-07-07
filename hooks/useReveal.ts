'use client';

import { useRef } from 'react';

import gsap from 'gsap';

import { useGSAP } from '@gsap/react';

export default function useReveal() {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.from(
      ref.current,

      {
        opacity: 0,

        y: 40,

        duration: 0.8,

        ease: 'power3.out',
      },
    );
  });

  return ref;
}
