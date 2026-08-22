import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { BlogService } from '@/lib/services/blog.service';
import BlogDetailsPage from '@/components/blogDetails/BlogDetailsPage';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const blog = await BlogService.getBlogBySlug(slug);
    
    return {
      title: blog.title,
      description: blog.summary?.[0]?.title || 'Blog post',
      openGraph: {
        title: blog.title,
        description: blog.summary?.[0]?.title || 'Blog post',
        images: [blog.heroImage],
      },
    };
  } catch (error) {
    return {
      title: 'Blog Not Found',
    };
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  try {
    const blog = await BlogService.getBlogBySlug(slug);

    if (!blog) {
      notFound();
    }

    return <BlogDetailsPage blog={blog} />;
  } catch (error) {
    console.error('Error fetching blog:', error);
    notFound();
  }
}
