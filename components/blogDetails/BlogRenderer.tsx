import { BlogContentBlock } from '@/types/blogDetails';
import { BLOG_COMPONENTS } from './Registry';


interface Props {
  section: BlogContentBlock;
}

export default function BlogRenderer({ section }: Props) {
  const Component = BLOG_COMPONENTS[section.type];

  if (!Component) return null;

  return <Component {...section} />;
}
