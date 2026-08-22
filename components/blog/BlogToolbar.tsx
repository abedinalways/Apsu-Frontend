'use client';

import BlogCategories from './BlogCategories';
import BlogSearch from './BlogSearch';

interface BlogToolbarProps {
  categories: string[];
  activeCategory: string;
  search: string;

  onCategoryChange: (category: string) => void;
  onSearchChange: (value: string) => void;
}

export default function BlogToolbar({
  categories,
  activeCategory,
  search,
  onCategoryChange,
  onSearchChange,
}: BlogToolbarProps) {
  return (
    <div className="rounded-[24px] bg-brand-surface py-12 px-6  flex flex-col  items-center">
      <div>
        <BlogCategories
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={onCategoryChange}
        />

        <BlogSearch value={search} onChange={onSearchChange} />
      </div>
    </div>
  );
}
