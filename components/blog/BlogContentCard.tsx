import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Blog } from '@/types/blog';

type BlogContentCardProps = Blog;

export default function BlogContentCard({
  image,
  category,
  date,
  readTime,
  title,
  description,
  href,
}: BlogContentCardProps) {
  return (
    <article className="group flex flex-col gap-5 rounded-[24px] bg-white p-5 transition-all duration-300 hover:shadow-lg sm:flex-row">
      {/* Image */}
      <div className="relative h-[220px] w-full shrink-0 overflow-hidden rounded-[20px] sm:h-[184px] sm:w-[205px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[14px] font-normal leading-[132%] uppercase tracking-[0.14em] text-[#00774d]">
            {category}
          </p>

          <p className="text-[14px] leading-[160%] font-medium text-[#6c6c6c]">
            {date} • {readTime}
          </p>
        </div>

        {/* Title */}
        <h3 className="mt-4 text-[18px] font-normal leading-[132%] text-[#111]">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-[14px] font-normal leading-[160%] text-[#3b3b3c]">
          {description}
        </p>

        {/* Footer */}
        <Link
          href={href}
          className="mt-6 inline-flex w-fit items-center gap-3 text-[16px] leading-[124%] font-medium text-[#00774d] transition-all duration-300 hover:gap-4"
        >
          Read more
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#008C5E]">
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>
      </div>
    </article>
  );
}
