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
  } catch {
    return {
      title: 'Blog Not Found',
    };
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  let blog;
  try {
    blog = await BlogService.getBlogBySlug(slug);
  } catch {
    return (
      <main className="pt-30 md:pt-50">
        <div className="custom-container flex flex-col items-center justify-center min-h-[50vh] gap-4">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold text-primary">Blog not found</h2>
            <p className="text-grayColor1">The article you are looking for does not exist or has been removed.</p>
          </div>
        </div>
      </main>
    );
  }

  if (!blog) {
    notFound();
  }

  return <BlogDetailsPage blog={blog} />;
}
