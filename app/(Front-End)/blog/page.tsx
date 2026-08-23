import { BlogService } from '@/lib/services/blog.service';
import BlogContent from '@/components/blog/BlogContent'
import BlogHero from '@/components/blog/BlogHero'
import BlogSection from '@/components/blog/BlogSection';
import RecommendedCarousel from '@/components/blog/RecommendedCarousel';

import FAQFooter from '@/components/faq/FAQFooter'
import React from 'react'

export default async function BlogPage() {
  const blogs = await BlogService.getBlogs();
  const featuredBlogs = blogs.slice(0, 5);

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
