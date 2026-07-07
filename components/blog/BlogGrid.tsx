import BlogCard from './BlogCard';
import type { Blog } from '@/types/blog';

interface BlogGridProps {
  blogs: Blog[];
}

export default function BlogGrid({ blogs }: BlogGridProps) {
  if (blogs.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center rounded-[24px] bg-white">
        <p className="text-lg text-gray-500">No blogs found.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 custom-container overflow-x-hidden">
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
