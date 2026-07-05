
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import type { FAQCategory } from '@/types/faq';
import { ArrowRightIcon } from 'lucide-react';
import ArrowIcon from '../icons/ArrowIcon';
import ContactCard from './ContactCard';

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
    <aside className="shrink-0 flex-col gap-8 mt-10 md:mt-0 lg:flex lg:py-12 lg:w-91 font-[work_sans]">
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
      <hr className="" />
      <div className="hidden lg:block">
        <ContactCard />
      </div>
    </aside>
  );
}