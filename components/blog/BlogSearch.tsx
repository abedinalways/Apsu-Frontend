'use client';

import { Search } from 'lucide-react';

interface BlogSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function BlogSearch({ value, onChange }: BlogSearchProps) {
  return (
    <div className="relative mt-6">
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A3A3A3]"
        size={18}
      />

      <input
        id="blog-search"
        type="text"
        placeholder="Search any title here..."
        value={value}
        onChange={e => onChange(e.target.value)}
        className="
          h-12
          w-full
          rounded-xl
          border
          border-[#b8d9c6]
          bg-white
          pl-11
          pr-4
          text-sm
          outline-none
          transition
          focus:border-[#008C5E]
          focus:ring-2
          focus:ring-[#008C5E]/10
        "
      />
      <label htmlFor="blog-search" className="sr-only">
        Search blogs
      </label>
    </div>
  );
}
