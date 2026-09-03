'use client';

import React, { useEffect, useState } from 'react';
import type { TermsSection } from '@/lib/data/termsData';

interface TermsSidebarProps {
  sections: Pick<TermsSection, 'id' | 'title' | 'sidebarTitle' | 'serial'>[];
}

export function TermsSidebar({ sections }: TermsSidebarProps) {
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

    // Smooth scroll to section
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed header
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <aside className="shrink-0 flex-col gap-6 sm:gap-8 mt-8 sm:mt-10 md:mt-0 lg:flex lg:py-12 w-full font-[work_sans] shadow rounded-[16px] bg-white border border-lightGreenColor p-8">
      <div className="flex flex-col gap-3">
        <span className="text-lg sm:text-xl md:text-2xl font-semibold uppercase tracking-wide text-blackColor">
          All Terms
        </span>
        <nav className="flex flex-col gap-2 text-base sm:text-lg">
          {sections.map(section => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
                onClick={() => handleLinkClick(section.id)}
                className={`rounded-md px-2 py-1.5 text-[16px] text-start sm:py-1 transition-colors font-medium ${isActive ? 'text-greenColor' : 'text-grayColor1'} hover:bg-lightGreenColor`}
              >
                {section.serial}. {section.sidebarTitle || section.title}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
