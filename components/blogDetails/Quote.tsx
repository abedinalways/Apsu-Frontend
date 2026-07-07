import { Quote } from 'lucide-react';
import { BlogContentBlock } from '@/types/blogDetails';

type Props = Partial<BlogContentBlock>;

export default function BlogQuote({ content }: Props) {
  if (!content) return null;

  return (
    <section
      className="
        rounded-[32px]
        border
        border-[#E5F2EC]
        bg-[#F7FCF9]
        p-8
        md:p-10
      "
    >
      <Quote className="text-[#008C5E]" size={40} />

      <p
        className="
          mt-6
          text-[28px]
          leading-[150%]
          font-medium
          text-[#17332A]
        "
      >
        {content}
      </p>
    </section>
  );
}
