export type ContentType =
  | 'heading'
  | 'paragraph'
  | 'bullet'
  | 'number'
  | 'image'
  | 'quote'
  | 'imageText'
  | 'divider'
  | 'callout';

export interface BlogContentBlock {
  id: string;

  type: ContentType;

  content?: string;

  items?: string[];

  image?: string;

  alt?: string;

  caption?: string;

  title?: string;

  description?: string;
  layout?: 'left' | 'right';
}

export interface BlogSummaryItem {
  id: string;
  title: string;
}

export interface BlogMeta {
  id: number;

  slug: string;

  title: string;

  category: string;

  date: string;

  readTime: string;

  author: string;

  heroImage: string;

  summary: BlogSummaryItem[];

  content: BlogContentBlock[];
}
