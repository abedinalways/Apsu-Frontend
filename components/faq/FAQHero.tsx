
'use client';
import { useState } from 'react';
import SearchIcon from '../icons/SearchIcon';

export function FAQHero() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="flex flex-col items-center justify-center px-4 py-20 sm:py-28 bg-[#fff] rounded-[24px] shadow-md">
      <div className="flex  flex-col items-center gap-6 text-center">
        {/* Heading */}
        <h1 className="text-5xl font-medium leading-[110%] text-primary-800 md:text-[72px]">
          Frequently Asked Questions
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl md:text-[20px] text-md leading-[160%] text-secondary-charcol-700 ">
          Everything you need to know about how Apsu works, what it costs, and
          the care we provide. No jargon, no fine-print surprises.
        </p>

        {/* Search Input */}
        <div className="relative w-full max-w-md">
          <div className="relative top-9 left-6 ">
            <SearchIcon className=" h-6 w-6 -translate-y-1/2 text-gray-400 mx-4" />
          </div>
          <input
            type="text"
            placeholder="Search Questions"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full rounded-[12px] border border-[#b8d9c6] bg-[#FDFBF7] py-3.5 pl-11 pr-4 text-sm text-gray-700 shadow-sm outline-none transition-all placeholder:text-gray-400 hover:border-green-300 focus:border-green-400 focus:shadow-md focus:ring-0"
          />
        </div>
      </div>
    </section>
  );
}