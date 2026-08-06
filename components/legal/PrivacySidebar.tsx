'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import type { PrivacySection } from '@/lib/data/privacyData';

interface PrivacySidebarProps {
  sections: Pick<PrivacySection, 'id' | 'title' | 'sidebarTitle' | 'serial'>[];
}

export function PrivacySidebar({ sections }: PrivacySidebarProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isClicked, setIsClicked] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (isClicked) return;

        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-10% 0px -50% 0px',
      },
    );

    sections.forEach(section => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections, isClicked]);

  const handleLinkClick = (id: string) => {
    setActiveId(id);
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 800);
  };

  return (
    <aside className="shrink-0 flex-col gap-6 sm:gap-8 mt-8 sm:mt-10 md:mt-0 lg:flex lg:py-12 w-full font-[work_sans] shadow rounded-[16px] bg-white border border-[#cddcd3] p-8">
      <div className="flex flex-col gap-3">
        <span className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide text-[#111]">
          All Policy
        </span>
        <nav className="flex flex-col gap-2 text-base sm:text-lg">
          {sections.map(section => {
            const isActive = activeId === section.id;
            return (
              <Link
                key={section.id}
                href={`#${section.id}`}
                onClick={() => handleLinkClick(section.id)}
                className={`rounded-md px-2 py-1.5 text-[16px] text-start sm:py-1 transition-colors font-medium ${isActive ? 'text-[#00774d]' : 'text-[#6c6c6c]'}`}
              >
                {section.serial}. {section.sidebarTitle || section.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}