import { BlogContentBlock } from '@/types/blogDetails';

type Props = Partial<BlogContentBlock>;

export default function Paragraph({ content }: Props) {
  return (
    <p
      className="
        text-[18px]
        leading-[190%]
        text-[#565656]
      "
    >
      {content}
    </p>
  );
}
