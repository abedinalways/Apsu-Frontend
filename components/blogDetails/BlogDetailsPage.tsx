import BlogHero from './BlogHero';
import BlogLayout from './BlogLayout';
import { BlogMeta } from '@/types/blogDetails';
import ReadingProgress from './ReadingProgress';
import BlogSidebar from './BlogSidebar';
import BlogBreadcrumb from './BlogBreadcrumb';
import Image from 'next/image';

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
      <div className="border-t border-[#b8d9c6] my-10"></div>
      <p className='text-center text-[32px] leading-[124%] font-medium flex items-start'>
       <Image src='/images/blogDetails/55.png' width={33} height={24} alt=''/> Successful weight management isn't about finding a shortcut. It's about
        finding the right plan for your body, your health, and your goals.
      </p>
    </div>
  );
}
