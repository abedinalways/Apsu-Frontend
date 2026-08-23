import { BlogService } from '@/lib/services/blog.service';
import BlogContent from '@/components/blog/BlogContent'
import BlogHero from '@/components/blog/BlogHero'
import BlogSection from '@/components/blog/BlogSection';
import RecommendedCarousel from '@/components/blog/RecommendedCarousel';

import FAQFooter from '@/components/faq/FAQFooter'
import React from 'react'

export default async function BlogPage() {
  let blogs;
  try {
    blogs = await BlogService.getBlogs();
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
    throw error;
  }

  const featuredBlogs = blogs.slice(0, 5);

  if (!blogs || blogs.length === 0) {
    return (
      <main className="pt-30 md:pt-50">
        <div className="custom-container flex flex-col items-center justify-center min-h-[50vh] gap-4">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold text-gray-900">No blogs found</h2>
            <p className="text-gray-500">Check back later for new articles.</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className="pt-30 md:pt-50 ">
        <BlogHero />

        <div className=" overflow-x-hidden">
          <BlogContent featuredBlogs={featuredBlogs} />
        </div>
        {/* All Blogs */}
        <section className="mt-24 overflow-x-hidden">
          <BlogSection initialBlogs={blogs} />
        </section>
        <div className="mt-32 custom-container">
          <RecommendedCarousel />
        </div>
        <div className="mb-30" />
      </main>
      <FAQFooter />
    </>
  );
}
