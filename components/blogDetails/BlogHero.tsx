import { BLOG_SIDEBAR_WIDTH } from '@/lib/blogLayout';
import { BlogMeta } from '@/types/blogDetails';
import BlogBreadcrumb from './BlogBreadcrumb';

interface Props {
  blog: BlogMeta;
}

export default function BlogHero({ blog }: Props) {
  return (
    <section className="flex flex-start items-center pt-20 pb-12 md:pt-34 md:pb-12" >
      <div className="max-w-[24rem]">
       <BlogBreadcrumb blog={blog} />
        {/* Hero Content */}
        <div className="flex-1 min-w-0">
          
            {/* Updated Date */}
            <p
              className="
                text-[12px]
                uppercase
                tracking-[0.28em]
                text-[#7B7B7B]
              "
            >
              LAST UPDATED ON {blog.date.toUpperCase()}
            </p>

            {/* Title */}
            <h1
              className="
                mt-5
                text-[2.25rem]
                font-medium
                leading-[115%]
                tracking-[-0.03em]
                text-[#17332A]

              "
            >
              {blog.title}
            </h1>

            {/* Meta */}
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
              <span
                className="
                  uppercase
                  tracking-[0.18em]
                  text-[#008C5E]
                "
              >
                {blog.category}
              </span>

              <span className="h-[5px] w-[5px] rounded-full bg-[#C7C7C7]" />

              <span className="text-[#666666]">{blog.readTime}</span>
            </div>
          </div>
      </div>
    
    </section>
  );
}
