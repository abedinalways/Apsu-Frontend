import { BlogSummaryItem, BlogContentBlock, SourceItem } from './blogDetails';

export interface Blog {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  heroImage: string;
  description: string;
  href: string;
  summary: BlogSummaryItem[];
  content: BlogContentBlock[];
  sources?: SourceItem[];
}
