'use client';

interface BlogCategoriesProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function BlogCategories({
  categories,
  activeCategory,
  onCategoryChange,
}: BlogCategoriesProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-2xl font-medium text-[#292B2A]">Categories:</span>

      {categories.map(category => {
        const active = activeCategory === category;

        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`
              rounded-full
              border
              px-4
              py-2
              text-[16px]
              font-normal
              transition-all
              duration-300
              ${
                active
                  ? ' bg-[#b8d9c6] text-[#102b1c]'
                  : 'border-[#E3E3E3] bg-white text-[#6B6B6B] hover:border-[#008C5E] hover:text-[#008C5E]'
              }
            `}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
