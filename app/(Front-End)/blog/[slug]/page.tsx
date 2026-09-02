import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { AppConfig } from '@/config/app.config';
import { BlogService } from '@/lib/services/blog.service';
import BlogDetailsPage from '@/components/blogDetails/BlogDetailsPage';

const appConfig = AppConfig();
const siteUrl = appConfig.app.meta.url;
const siteName = appConfig.app.meta.siteName;
const defaultImage = appConfig.app.meta.image;

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  try {
    const blog = await BlogService.getBlogBySlug(slug);
    const description =
      blog.summary?.[0]?.title ||
      blog.description ||
      'Health insights from the Apsu medical team.';
    const url = `${siteUrl}/blog/${blog.slug}`;
    const image = blog.heroImage || defaultImage;
    const parsedDate = blog.date ? new Date(blog.date) : null;
    const publishedTime =
      parsedDate && !Number.isNaN(parsedDate.getTime())
        ? parsedDate.toISOString()
        : undefined;

    return {
      title: blog.title,
      description,
      alternates: { canonical: url },
      openGraph: {
        type: 'article',
        title: blog.title,
        description,
        url,
        siteName,
        ...(publishedTime ? { publishedTime } : {}),
        images: [{ url: image, alt: blog.title }],
      },
      twitter: {
        card: 'summary_large_image',
        title: blog.title,
        description,
        images: [image],
      },
    };
  } catch {
    return {
      title: 'Blog Not Found',
      robots: { index: false, follow: false },
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
