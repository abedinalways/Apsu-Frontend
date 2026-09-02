import BlogHero from './BlogHero';
import BlogLayout from './BlogLayout';
import { BlogMeta } from '@/types/blogDetails';
import ReadingProgress from './ReadingProgress';
import BlogSidebar from './BlogSidebar';
import Image from 'next/image';
import BlogFAQs from './BlogFAQs';
import RecommendedCarousel from '../blog/RecommendedCarousel';

interface Props {
  blog: BlogMeta;
}

export default function BlogDetailsPage({ blog }: Props) {
  return (
    <div className="custom-container py-10 lg:py-14">
      <ReadingProgress />
      <div className="w-full h-full">
        <BlogHero blog={blog} />
      </div>
      <div
        className="
          grid gap-8 lg:grid-cols-[380px_minmax(0,1fr)] xl:grid-cols-[380px_minmax(0,1fr)]
        "
      >
        <BlogSidebar blog={blog} />
        <BlogLayout blog={blog} />
      </div>
      <div className="border-t border-lightGreenColor my-10"></div>
      <p className="text-center text-[32px] leading-[124%] font-medium flex items-start">
        <Image src="/images/blogDetails/55.png" width={33} height={24} alt="" />{' '}
        If you are considering GLP-1 treatment, Apsu can help you take the next
        step with a clinician-reviewed intake, eligibility review, and care
        coordination. The goal is not just to start a medication, but to
        understand your options, use treatment safely, and have support
        throughout the process.
      </p>
      
      <BlogFAQs />
      <RecommendedCarousel />
    </div>
  );
}
