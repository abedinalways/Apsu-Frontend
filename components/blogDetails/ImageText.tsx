import Image from 'next/image';
import { BlogContentBlock } from '@/types/blogDetails';

type Props = Partial<BlogContentBlock>;

export default function ImageText({
  image,
  alt,
  title,
  description,
  layout = 'left',
}: Props) {
  if (!image) return null;

  return (
    <section
      className={`
        grid
        items-center
        gap-8
        lg:grid-cols-2

        ${layout === 'right' ? '' : 'lg:[&>*:first-child]:order-2'}
      `}
    >
      <div>
        <Image
          src={image}
          alt={alt || ''}
          width={650}
          height={500}
          className="
            w-full
            rounded-[24px]
            object-cover
          "
        />
      </div>

      <div>
        <h3
          className="
            text-[34px]
            font-medium
            leading-tight
            text-[#202020]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-5
            text-[18px]
            leading-[190%]
            text-[#555]
          "
        >
          {description}
        </p>
      </div>
    </section>
  );
}
