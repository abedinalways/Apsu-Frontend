import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Blog } from '@/types/blog';

type BlogContentCardProps = Blog;

export default function BlogContentCard({
  image,
  category,
  date: _date,
  readTime,
  title,
  description,
  href,
}: BlogContentCardProps) {
  return (
    <article className="group grid grid-cols-[1fr_1fr]  lg:grid-cols-[1fr_2fr]  gap-4 rounded-2xl bg-white p-4 transition-all duration-300 hover:shadow-lg ">
      {/* Image */}
      <div className="relative w-full h-full shrink-0 overflow-hidden rounded-[20px] flex items-start">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover md:w-full md:h-full w-full transition-transform duration-500 h-full"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <div className="hidden lg:flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[14px] font-normal leading-[132%] uppercase tracking-[0.14em] text-greenColor">
            {category}
          </p>

          <p className="text-[14px] leading-[160%] font-medium text-grayColor1">
            {readTime}
          </p>
        </div>

        {/* Title */}
        <h3 className=" mt-2 md:mt-4 text-[14px] md:text-[18px] font-normal leading-[132%] text-primary">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 md:mt-4 text-[12px] md:text-[14px] font-normal leading-[160%] text-grayColor1 line-clamp-2">
          {description}
        </p>

        {/* Footer */}
        <Link
          href={href}
          className="md:mt-2 mt-1 inline-flex w-fit items-center gap-3 text-[16px] leading-[124%] font-medium text-greenColor transition-all duration-300 hover:gap-4"
        >
          Read more
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-greenColor">
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>
      </div>
    </article>
  );
}
