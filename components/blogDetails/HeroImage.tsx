import Image from 'next/image';
import { BlogContentBlock } from '@/types/blogDetails';

type Props = Partial<BlogContentBlock>;

export default function HeroImage({ image, alt }: Props) {
  if (!image) return null;

  return (
    <div className="overflow-hidden rounded-[20px]">
      <Image
        src={image}
        alt={alt || ''}
        width={1200}
        height={700}
        className="
          w-full
          rounded-[20px]
          object-cover
        "
      />
    </div>
  );
}
