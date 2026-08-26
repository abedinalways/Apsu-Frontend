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
    return (
      <main className="pt-30 md:pt-50">
        <div className="custom-container flex flex-col items-center justify-center min-h-[50vh] gap-4">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold text-primary">Unable to load blogs</h2>
            <p className="text-grayColor1">Something went wrong. Please try again later.</p>
          </div>
        </div>
      </main>
    );
  }

  const featuredBlogs = blogs.slice(0, 5);

  if (!blogs || blogs.length === 0) {
    return (
      <main className="pt-30 md:pt-50">
        <div className="custom-container flex flex-col items-center justify-center min-h-[50vh] gap-4">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold text-primary">No blogs found</h2>
            <p className="text-grayColor1">Check back later for new articles.</p>
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
