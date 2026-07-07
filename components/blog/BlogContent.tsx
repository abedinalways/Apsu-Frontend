import BlogImageCard from './BlogImageCard';
import BlogContentCard from './BlogContentCard';
import { blogData } from '@/lib/data/blogData';


export default function BlogContent() {
  const featuredBlogs = blogData.slice(0, 3);
  return (
    <section
      className="
        px-4 sm:px-6 md:px-8 lg:px-10
        grid
        gap-6 sm:gap-8
        grid-cols-1
        lg:grid-cols-[1fr_1fr]
        xl:grid-cols-[520px_1fr]
        xl:gap-10
      "
    >
      <BlogImageCard />

      <div className="space-y-8">
        {featuredBlogs.map(blog => (
          <BlogContentCard key={blog.id} {...blog} />
        ))}
      </div>
    </section>
  );
}
