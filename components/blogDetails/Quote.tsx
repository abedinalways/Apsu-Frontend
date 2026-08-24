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
        border-lightGreenColor
        bg-lightGreenColor
        p-8
        md:p-10
      "
    >
      <Quote className="text-greenColor" size={40} />

      <p
        className="
          mt-6
          text-[28px]
          leading-[150%]
          font-medium
          text-greenColor
        "
      >
        {content}
      </p>
    </section>
  );
}
