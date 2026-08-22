'use client';

export function TermsHero() {
  return (
    <section className="flex flex-col justify-start mb-4 max-w-3xl">
      <div className="flex flex-col gap-2 max-w-4xl">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-[110%] text-brand">
          Terms of Use
        </h1>

        {/* Last Updated */}
        <p className="text-[20px] text-text-secondary leading-[120%]">
          Last updated on 21 June, 2026
        </p>
        {/* <hr className="py-6" /> */}
        <div className="w-full border-t border-dashed border-borderColor py-4"></div>
      </div>
    </section>
  );
}