// import Image from 'next/image';
// import Link from 'next/link';
// import { ArrowRight } from 'lucide-react';

// import type { RecommendedBlog } from '@/types/recommended';

// interface RecommendedCardProps {
//   blog: RecommendedBlog;
// }

// export default function RecommendedCard({ blog }: RecommendedCardProps) {
//   return (
//     <article
//       className="
//         group
//         overflow-hidden
//         rounded-[12px]
//         bg-white

//         shadow-[1px 1px 2px 0 rgba(0, 0, 0, 0.1), 2px 3px 4px 0 rgba(0, 0, 0, 0.09), 5px 7px 5px 0 rgba(0, 0, 0, 0.05), 9px 13px 6px 0 rgba(0, 0, 0, 0.01), 15px 20px 7px 0 rgba(0, 0, 0, 0)]
//         transition-all
//         duration-300
//         hover:-translate-y-1
//         hover:shadow-[0_18px_40px_rgba(0,0,0,.12)]
//       "
//     >
//       {/* Image */}

//       <div className="relative  overflow-hidden rounded-t-[12px]">
//         <Image
//           src={blog.image}
//           alt={blog.title}
//           width={316}
//           height={278}
//           className="object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//       </div>

//       {/* Content */}

//       <div className="p-4 bg-[background]">
//         <div className="mb-3 flex items-center justify-between gap-2">
//           <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-success">
//             {blog.category}
//           </span>

//           <span className="text-[10px] text-text-muted whitespace-nowrap">
//             {blog.date} • {blog.readTime}
//           </span>
//         </div>

//         <h3 className="line-clamp-2 text-[18px] leading-[140%] font-medium text-text-primary">
//           {blog.title}
//         </h3>

//         <Link
//           href={blog.href}
//           className="
//             mt-5
//             inline-flex
//             items-center
//             gap-2
//             text-success
//             font-medium
//             transition-all
//             duration-300
//             hover:gap-3
//           "
//         >
//           Read more
//           <span className="flex h-5 w-5 items-center justify-center rounded-full border border-current">
//             <ArrowRight size={13} />
//           </span>
//         </Link>
//       </div>
//     </article>
//   );
// }

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import type { RecommendedBlog } from '@/types/recommended';

interface RecommendedCardProps {
  blog: RecommendedBlog;
}

export default function RecommendedCard({ blog }: RecommendedCardProps) {
  return (
    <article
      className="
        group
        max-w-[340px] 
        overflow-hidden
        rounded-t-[12px] 
        rounded-b-[12px]
        shadow-custom

      
      "
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-[16px]">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5 ">
        <div className="mb-4 flex items-center justify-between gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-success">
            {blog.category}
          </span>

          <span className="text-[11px] text-text-muted whitespace-nowrap">
            {blog.date} • {blog.readTime}
          </span>
        </div>
        <h3 className="line-clamp-2 text-[20px] leading-[135%] font-medium text-text-primary mb-5">
          {blog.title}
        </h3>
        <Link
          href={blog.href}
          className="
            inline-flex
            items-center
            gap-2
            text-success
            font-medium
            transition-all
            duration-300
            hover:gap-3
            text-[15px]
          "
        >
          Read more
          <span
            className="
flex
h-5
w-5
items-center
justify-center
rounded-full
border
border-current
transition-all
duration-300
group-hover/readmore:translate-x-1
"
          >
            <ArrowRight size={12} />
          </span>
        </Link>
      </div>
    </article>
  );
}
