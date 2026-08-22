
'use client';
import { useState } from 'react';
import SearchIcon from '../icons/SearchIcon';

export function FAQHero() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="flex flex-col items-center justify-center px-4 sm:px-6 py-12 md:py-40 bg-[#fff] rounded-[24px] shadow-md">
      <div className="flex flex-col items-center gap-4 sm:gap-6 text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-[110%] text-primary-800">
          Frequently Asked Questions
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-base sm:text-lg md:text-[20px] leading-[160%] text-secondary-charcol-700">
          Everything you need to know about how Apsu works, what it costs, and
          the care we provide. No jargon, no fine-print surprises.
        </p>

        {/* Search Input */}
        <div className="relative w-full max-w-md px-4 sm:px-0">
          <div className="absolute left-6 sm:left-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <SearchIcon className="h-5 w-5 sm:h-6 sm:h-6 text-gray-400" />
          </div>
          <input
            id="faq-search"
            type="text"
            placeholder="Search Questions"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full rounded-[12px] border border-[#b8d9c6] bg-[#FDFBF7] py-3 sm:py-3.5 pl-10 sm:pl-11 pr-4 text-sm sm:text-base text-gray-700 shadow-sm outline-none transition-all placeholder:text-gray-400 hover:border-green-300 focus:border-green-400 focus:shadow-md focus:ring-0"
          />
          <label htmlFor="faq-search" className="sr-only">
            Search Questions
          </label>
        </div>
      </div>
    </section>
  );
}