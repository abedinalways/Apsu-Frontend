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
      <span className="text-2xl font-medium text-primary">Categories:</span>

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
                  ? ' bg-lightGreenColor text-primary'
                  : 'border-background bg-white text-grayColor1 hover:border-greenColorhover:text-greenColor'
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
