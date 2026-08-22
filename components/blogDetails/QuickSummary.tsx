'use client';

import Link from 'next/link';
import { BlogSummaryItem } from '@/types/blogDetails';
import useActiveSection from '@/hooks/useActiveSection';

interface Props {
  summary: BlogSummaryItem[];
}

export default function QuickSummary({ summary }: Props) {
  const active = useActiveSection(summary.map(item => item.id));

  return (
    <div
      className="
        rounded-[24px]
        border
        border-[#E9E9E9]
        bg-white
        p-6
        shadow-[0_8px_30px_rgba(0,0,0,0.04)]
      "
    >
      {/* Heading */}
      <h3
        className="
          text-[24px]
          font-medium
          leading-tight
          text-text-primary
        "
      >
        Quick Summary
      </h3>
      {/* Summary List */}
      <nav className="mt-6">
        <ul className="space-y-2 ">
          {summary.map(item => {
            const isActive = active === item.id;

            return (
              <li key={item.id} className="list-none">
                <Link
                  href={`#${item.id}`}
                  className={`
                    group
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    px-4
                    py-3
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? ' text-success'
                        : 'text-[#606060] hover:bg-[#F8F8F8]'
                    }
                  `}
                >
                 

                  {/* Title */}
                  <span
                    className={`
                      text-[15px]
                      leading-6
                      transition-all

                      ${isActive ? 'font-semibold' : 'font-normal'}
                    `}
                  >
                    {item.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
