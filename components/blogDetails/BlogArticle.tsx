import { BlogMeta } from '@/types/blogDetails';
import Image from 'next/image';
import BlogRenderer from './BlogRenderer';
import Sources from './Sources';


interface Props {
  blog: BlogMeta;
}

export default function BlogArticle({ blog }: Props) {
  return (
    <article
      className="
        rounded-[28px]
        bg-white
        p-5

        md:p-8

        xl:p-10

        shadow-[0_10px_30px_rgba(0,0,0,.04)]
      "
    >
      {/* Hero Image */}

      <div className="overflow-hidden rounded-[20px]">
        <Image
          src={blog.heroImage}
          alt={blog.title}
          width={1200}
          height={700}
          priority
          className="
            w-full
            object-cover
            transition-transform
            duration-700
            hover:scale-[1.02]
          "
        />
      </div>

      {/* Content */}

      <div className="mt-10 font-[Work_Sans]">
        {blog.content.map((section, index) => {
          // Add extra spacing after imageText blocks to prevent overlap
          const isAfterImageText = index > 0 && blog.content[index - 1].type === 'imageText';
          const spacingClass = isAfterImageText ? 'mt-2' : 'mt-10';
          
          return (
            <div key={section.id} className={index === 0 ? '' : spacingClass}>
              <BlogRenderer section={section} />
              
            </div>
          );
        })}
      </div>
    </article>
  );
}
