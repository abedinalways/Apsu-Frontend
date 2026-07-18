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
    <article className="group grid grid-cols-[1fr_1fr]  md:grid-cols-[1fr_2fr]  gap-4 rounded-2xl bg-white p-4 transition-all duration-300 hover:shadow-lg ">
      {/* Image */}
      <div className="relative w-full shrink-0 overflow-hidden rounded-[20px] flex items-start">
        <Image
          src={image}
          alt={title}
          fill
          className="md:object-cover object-contain md:w-full md:h-full transition-transform duration-500 "
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <div className="hidden md:flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[14px] font-normal leading-[132%] uppercase tracking-[0.14em] text-[#00774d]">
            {category}
          </p>

          <p className="text-[14px] leading-[160%] font-medium text-[#6c6c6c]">
            {date} • {readTime}
          </p>
        </div>

        {/* Title */}
        <h3 className=" mt-2 md:mt-4 text-[14px] md:text-[18px] font-normal leading-[132%] text-[#111]">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 md:mt-4 text-[12px] md:text-[14px] font-normal leading-[160%] text-[#3b3b3c] line-clamp-2" >
          {description}
        </p>

        {/* Footer */}
        <Link
          href={href}
          className="md:mt-6 mt-2 inline-flex w-fit items-center gap-3 text-[16px] leading-[124%] font-medium text-[#00774d] transition-all duration-300 hover:gap-4"
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
