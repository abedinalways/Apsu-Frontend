import type { TermsSection } from '@/lib/data/termsData';

interface TermsSectionProps {
  section: TermsSection;
}

export function TermsSectionComponent({ section }: TermsSectionProps) {
  return (
    <section
      id={section.id}
      className="scroll-mt-24"
    >
      <h2 className="text-2xl sm:text-3xl md:text-[32px] font-semibold text-[#111] mb-6">
        {section.serial && <span className="mr-2">{section.serial}.</span>}
        {section.title}
      </h2>
      <div 
        className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: section.content }}
      />
    </section>
  );
}