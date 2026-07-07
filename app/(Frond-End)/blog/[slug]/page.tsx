import { notFound } from 'next/navigation';

import { blogDetails } from '@/lib/data/blogDetails';
import BlogDetailsPage from '@/components/blogDetails/BlogDetailsPage';



interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const blog = blogDetails.find(item => item.slug === slug);

  if (!blog) {
    notFound();
  }

  return <BlogDetailsPage blog={blog} />;
}
