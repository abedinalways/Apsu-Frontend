'use client';

export function TermsHero() {
  return (
    <section className="flex flex-col justify-start mb-4 max-w-3xl">
      <div className="flex flex-col gap-2 max-w-4xl">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-[110%] text-[#102b1c]">
          Terms of Service
        </h1>

        {/* Last Updated */}
        <p className="text-[20px] text-[#6c6c6c] leading-[120%]">
          Last updated on 21 June, 2026
        </p>
        <hr className="py-6" />
        <p className="py-4">
          Please read this carefully. This page outlines the terms and conditions
          for using Apsu's services. It does not constitute legal advice,
          and does not replace the guidance of a qualified legal professional.
          Always review the full terms document provided by your provider.
        </p>

        <p className="mb-14">
          If you have questions about these terms, please contact our support
          team. We are here to help clarify any concerns you may have about
          our services.
        </p>
      </div>
    </section>
  );
}