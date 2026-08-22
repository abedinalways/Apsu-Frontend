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
        className="text-brand hover:text-success transition-colors"
      >
        All Blogs
      </Link>
      <span className="text-text-muted">/</span>
      <span className="text-text-muted">{blog.category}</span>
    </nav>
  );
}