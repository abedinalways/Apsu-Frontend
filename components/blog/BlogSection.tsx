'use client';

import { useMemo, useState } from 'react';

import BlogGrid from './BlogGrid';
import BlogToolbar from './BlogToolbar';

import { blogCategories } from '@/types/blogCategories';
import type { Blog } from '@/types/blog';
import PrimaryButton from '../reusable/button/PrimaryButton';

const INITIAL_VISIBLE = 4;

interface BlogSectionProps {
  initialBlogs: Blog[];
}

export default function BlogSection({ initialBlogs }: BlogSectionProps) {
  const [activeCategory, setActiveCategory] = useState('All Post');

  const [search, setSearch] = useState('');

  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const filteredBlogs = useMemo(() => {
    return initialBlogs.filter(blog => {
      const matchCategory =
        activeCategory === 'All Post' || blog.category === activeCategory;

      const keyword = search.trim().toLowerCase();

      const matchSearch =
        blog.title.toLowerCase().includes(keyword) ||
        blog.description.toLowerCase().includes(keyword);

      return matchCategory && matchSearch;
    });
  }, [activeCategory, search, initialBlogs]);

  const visibleBlogs = filteredBlogs.slice(0, visibleCount);

  const hasMore = visibleCount < filteredBlogs.length;

  const handleCategory = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(INITIAL_VISIBLE);
  };

  const handleSearch = (value: string) => {
    setSearch(value);
    setVisibleCount(INITIAL_VISIBLE);
  };

  return (
    <section className="space-y-10 ">
      <BlogToolbar
        categories={blogCategories}
        activeCategory={activeCategory}
        search={search}
        onCategoryChange={handleCategory}
        onSearchChange={handleSearch}
      />

      <BlogGrid blogs={visibleBlogs} />

      {hasMore && (
        <div className="flex justify-center mt-4 cursor-pointer ">
          <PrimaryButton
            text="See More"
            onClick={() => setVisibleCount(prev => prev + 4)}
          />
        </div>
      )}
    </section>
  );
}
