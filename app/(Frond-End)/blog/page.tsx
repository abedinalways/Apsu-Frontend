
import BlogContent from '@/components/blog/BlogContent'
import BlogHero from '@/components/blog/BlogHero'
import BlogSection from '@/components/blog/BlogSection';
import RecommendedCarousel from '@/components/blog/RecommendedCarousel';

import FAQFooter from '@/components/faq/FAQFooter'
import React from 'react'

export default function BlogPage() {
  return (
    <>
      <main className=" pt-50">
        <BlogHero />

        <div className=" overflow-x-hidden">
          <BlogContent />
        </div>
        {/* All Blogs */}
        <section className="mt-24 overflow-x-hidden">
          <BlogSection />
        </section>
        <div className="mt-32">
          <RecommendedCarousel />
        </div>
        <div className="mb-30" />
      </main>
      <FAQFooter />
    </>
  );
}
