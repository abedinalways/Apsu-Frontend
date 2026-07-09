import Link from 'next/link';
import { BlogMeta } from '@/types/blogDetails';

interface Props {
  blog: BlogMeta;
}

export default function BlogBreadcrumb({ blog }: Props) {
  return (
    <nav className="flex items-center gap-2 text-sm mb-6">
      <Link
        href="/blog"
        className="text-[#17332A] hover:text-[#008C5E] transition-colors"
      >
        All Blogs
      </Link>
      <span className="text-[#7B7B7B]">/</span>
      <span className="text-[#7B7B7B]">{blog.category}</span>
    </nav>
  );
}