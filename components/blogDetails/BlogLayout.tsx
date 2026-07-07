import { BlogMeta } from '@/types/blogDetails';

import BlogArticle from './BlogArticle';
import BlogSidebar from './BlogSidebar';

interface Props {
  blog: BlogMeta;
}

export default function BlogLayout({ blog }: Props) {
  return (
    <section >
        <BlogArticle blog={blog} />
    </section>
  );
}
