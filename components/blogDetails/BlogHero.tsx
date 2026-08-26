import { BLOG_SIDEBAR_WIDTH } from '@/lib/blogLayout';
import { BlogMeta } from '@/types/blogDetails';
import BlogBreadcrumb from './BlogBreadcrumb';

interface Props {
  blog: BlogMeta;
}

export default function BlogHero({ blog }: Props) {
  return (
    <section className="flex flex-start items-center pt-20 pb-12 md:pt-34 md:pb-12" >
      <div className="">
       <BlogBreadcrumb blog={blog} />
        {/* Hero Content */}
        <div className="flex-1 min-w-0">
          
           

            {/* Title */}
            <h1
              className="
                mt-5
                text-[2.25rem]
                font-medium
                leading-[115%]
                tracking-[-0.03em]
                text-primaryColor

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
                  text-greenColor
                "
              >
                {blog.category}
              </span>

            <span className="text-greenColor" >
              |
              </span>

              <span className="text-grayColor1">{blog.readTime}</span>
            </div>
          </div>
      </div>
    
    </section>
  );
}
