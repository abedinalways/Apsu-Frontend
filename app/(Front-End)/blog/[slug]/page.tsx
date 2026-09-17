import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { pageMetadata, siteUrl, defaultImage } from '@/lib/seo/metadata';
import { BlogService } from '@/lib/services/blog.service';
import BlogDetailsPage from '@/components/blogDetails/BlogDetailsPage';
import StructuredData from '@/components/seo/StructuredData';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const blog = await BlogService.getBlogBySlug(slug).catch(() => null);
  if (!blog) {
    // Calling notFound() here (in generateMetadata, which runs BEFORE the
    // loading.tsx streaming shell is sent) ensures the response carries a
    // proper 404 status code. If this were left to the page component alone,
    // the loading.tsx shell would already have been sent with a 200 status,
    // making the not-found page a soft 404.
    notFound();
  }

  const description =
    blog.summary?.[0]?.title ||
    blog.description ||
    'Health insights from the Apsu medical team.';
  const image = blog.heroImage || defaultImage;
  const parsedDate = blog.date ? new Date(blog.date) : null;
  const publishedTime =
    parsedDate && !Number.isNaN(parsedDate.getTime())
      ? parsedDate.toISOString()
      : undefined;

  const baseMetadata = pageMetadata({
    title: blog.title,
    description,
    path: `/blog/${blog.slug}`,
    image,
  });

  return {
    ...baseMetadata,
    openGraph: {
      ...baseMetadata.openGraph,
      type: 'article' as const,
      ...(publishedTime ? { publishedTime } : {}),
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const blog = await BlogService.getBlogBySlug(slug).catch(() => null);
  if (!blog) {
    notFound();
  }

  const articleData = {
    headline: blog.title,
    description: blog.summary?.[0]?.title || blog.description,
    image: blog.heroImage || defaultImage,
    datePublished: blog.date,
    url: `${siteUrl}/blog/${blog.slug}`,
  };

  return (
    <>
      <StructuredData type="article" data={articleData} />
      <BlogDetailsPage blog={blog} />
    </>
  );
}
