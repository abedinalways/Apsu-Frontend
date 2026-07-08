import BlogHero from './BlogHero';
import BlogLayout from './BlogLayout';
import { BlogMeta } from '@/types/blogDetails';
import ReadingProgress from './ReadingProgress';
import BlogSidebar from './BlogSidebar';
import BlogBreadcrumb from './BlogBreadcrumb';

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
    </div>
  );
}
