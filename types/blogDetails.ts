export type ContentType =
  | 'heading'
  | 'paragraph'
  | 'bullet'
  | 'number'
  | 'image'
  | 'quote'
  | 'imageText'
  | 'divider'
  | 'callout'
  | 'steps'
  | 'iconGrid';

export interface StepItem {
  title: string;
  description: string;
}

export interface BlogContentBlock {
  id: string;
  type: ContentType;

  content?: string;
  emphasis?: boolean;

  items?: string[];

  image?: string;
  alt?: string;
  caption?: string;

  title?: string;
  description?: string;
  bullets?: string[];
  imageRatio?: 'portrait' | 'wide'; 
  layout?: 'left' | 'right';

  steps?: StepItem[];
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
