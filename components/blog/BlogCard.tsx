import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import type { Blog } from '@/types/blog';

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const { image, category, date, readTime, title, description, href } = blog;

  return (
    <article
      className="
    group
    overflow-hidden
    rounded-[16px]
    
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-[#008C5E]/20
    hover:shadow-[0_18px_50px_rgba(0,0,0,.08)]
"
    >
      {/* Image */}

      <div className="relative overflow-hidden mb-8">
        <Image
          src={image}
          alt={title}
          width={648}
          height={371}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}

      <div className="p-4 rounded-2xl bg-white">
        {/* Top */}

        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#008C5E]">
            {category}
          </span>

          <span className="text-xs text-[#7D7D7D] whitespace-nowrap">
            {date} • {readTime}
          </span>
        </div>

        {/* Title */}

        <h3
          className="
          line-clamp-2
          text-[20px]
          font-medium
          leading-[140%]
          text-[#292B2A]
        "
        >
          {title}
        </h3>

        {/* Description */}

        <p
          className="
          mt-3
          line-clamp-3
          text-[15px]
          leading-[170%]
          text-[#666]
        "
        >
          {description}
        </p>

        {/* Footer */}

        <Link
          href={href}
          className="
          mt-5
          inline-flex
          items-center
          gap-2
          font-medium
          text-[#008C5E]
          transition-all
          hover:gap-3
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
            <ArrowRight size={13} />
          </span>
        </Link>
      </div>
    </article>
  );
}
