import { BlogContentBlock } from '@/types/blogDetails';

type Props = Partial<BlogContentBlock>;

export default function Heading({ id, content }: Props) {
  return (
    <h2
      id={id}
      className="
        scroll-mt-36

        text-[36px]

        font-medium

        leading-tight

        text-[#202020]
      "
    >
      {content}
    </h2>
  );
}
