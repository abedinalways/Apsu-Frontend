import { BlogMeta } from '@/types/blogDetails';

import BlogArticle from './BlogArticle';
import BlogSidebar from './BlogSidebar';
import Sources from './Sources';


interface Props {
  blog: BlogMeta;
}

export default function BlogLayout({ blog }: Props) {
  return (
    <section >
      <BlogArticle blog={blog} />
      {blog.sources && blog.sources.length > 0 && (
        <Sources title="Sources" sources={blog.sources} />
      )}
    </section>
  );
}
