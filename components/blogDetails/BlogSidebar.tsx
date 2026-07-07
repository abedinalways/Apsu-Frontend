import { BlogMeta } from '@/types/blogDetails';
import QuickSummary from './QuickSummary';
import CTAWidget from './CTAWidget';


interface Props {
  blog: BlogMeta;
}

export default function BlogSidebar({ blog }: Props) {
  return (
    <aside
      className="
        flex
        flex-col
        gap-5

        lg:sticky
        lg:top-28

        h-fit
      "
    >
      <QuickSummary summary={blog.summary} />

      <CTAWidget />
    </aside>
  );
}
