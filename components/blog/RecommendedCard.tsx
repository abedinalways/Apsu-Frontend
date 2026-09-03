

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import type { RecommendedBlog } from '@/types/recommended';

interface RecommendedCardProps {
  blog: RecommendedBlog;
}

export default function RecommendedCard({ blog }: RecommendedCardProps) {
  return (
    <article
      className="
        group
        max-w-[340px] 
        overflow-hidden
        rounded-t-[12px] 
        rounded-b-[12px]
        shadow-custom

      
      "
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-[16px]">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5 ">
        <div className="mb-4 flex items-center justify-between gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-greenColor">
            {blog.category}
          </span>

          <span className="text-[11px] text-grayColor1 whitespace-nowrap">
            {blog.date} • {blog.readTime}
          </span>
        </div>
        <h3 className="line-clamp-2 text-[20px] leading-[135%] font-medium text-primary mb-5">
          {blog.title}
        </h3>
        <Link
          href={blog.href}
          className="
            inline-flex
            items-center
            gap-2
            text-greenColor
            font-medium
            transition-all
            duration-300
            hover:gap-3
            text-[15px]
          "
        >
          Read more
          <span
            className="
flex
h-5
w-5
items-center
justify-center
rounded-full
border
border-current
transition-all
duration-300
group-hover/readmore:translate-x-1
"
          >
            <ArrowRight size={12} />
          </span>
        </Link>
      </div>
    </article>
  );
}
