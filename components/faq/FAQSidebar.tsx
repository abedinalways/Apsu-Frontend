
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import type { FAQCategory } from '@/types/faq';

interface FAQSidebarProps {
  topics: Pick<FAQCategory, 'id' | 'title'>[];
}

export function FAQSidebar({ topics }: FAQSidebarProps) {
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

    topics.forEach(topic => {
      const el = document.getElementById(topic.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [topics, isClicked]);

  const handleLinkClick = (id: string) => {
    setActiveId(id);
    setIsClicked(true);

  
    setTimeout(() => {
      setIsClicked(false);
    }, 800);
  };

  return (
    <aside className="hidden w-64 shrink-0 flex-col gap-8 py-12 lg:flex font-[work_sans]">
      <div className="flex flex-col gap-3">
        <span className="md:text-2xl text-lg font-semibold uppercase tracking-wide text-[#111]">
          All Topics
        </span>
        <nav className="flex flex-col gap-2 md:text-lg text-md">
          {topics.map(topic => {
            const isActive = activeId === topic.id;

            return (
              <Link
                key={topic.id}
                href={`#${topic.id}`}
                onClick={() => handleLinkClick(topic.id)}
                className={`rounded-md px-2 py-1 transition-colors font-medium ${
                  isActive ? 'text-[#00774d]' : 'text-[#6c6c6c]'
                }`}
              >
                {topic.title}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex flex-col items-start gap-3 rounded-[16px] bg-[#fff] p-5 shadow-[0_4px_22px_0_rgba(2,29,23,0.06)]">
        <p className="md:text-2xl text-lg font-medium text-[#111]">
          Still have a question?
        </p>
        <p className="md:text-lg text-md leading-[160%] text-secondary-charcol-700">
          If you didn&apos;t find your answer, feel free to reach out.
        </p>
        <button
          type="button"
          className="rounded-full bg-primary-800 px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-primary-900"
        >
          Contact Us
        </button>
      </div>
    </aside>
  );
}