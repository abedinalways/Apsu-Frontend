import BlogImageCard from './BlogImageCard';
import BlogContentCard from './BlogContentCard';
import { blogData } from '@/lib/data/blogData';


export default function BlogContent() {
  const featuredBlogs = blogData.slice(0, 3);
  return (
    <section
      className="
        custom-container
        grid
        gap-6 sm:gap-8
        grid-cols-1
        md:grid-cols-[1fr_1fr]
        xl:gap-12
      "
    >
      <div className='w-full h-full'>
        <BlogImageCard />
      </div>

      <div className="flex flex-col gap-4  justify-between w-full h-full">
        {featuredBlogs.map(blog => (
          <BlogContentCard key={blog.id} {...blog} />
        ))}
      </div>
    </section>
  );
}
