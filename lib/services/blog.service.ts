import { Fetch } from '@/lib/Fetch';
import { BlogMeta } from '@/types/blogDetails';

// Import all blog JSON files
import blog1 from '../data/blogs/understanding-glp1.json';

const USE_MOCK = (process.env.NEXT_PUBLIC_BLOG_MODE || 'mock') === 'mock';
const MOCK_BLOGS: BlogMeta[] = [blog1 as BlogMeta];

export class BlogService {
  static async getBlogBySlug(slug: string): Promise<BlogMeta> {
    if (USE_MOCK) {
      const blog = MOCK_BLOGS.find(item => item.slug === slug);
      if (!blog) {
        throw new Error('Blog not found');
      }
      return blog;
    }

    throw new Error('getBlogBySlug not implemented');
  }

  static async getAllBlogs(): Promise<BlogMeta[]> {
    if (USE_MOCK) {
      return MOCK_BLOGS;
    }

    throw new Error('getAllBlogs not implemented');
  }

  static async getRelatedBlogs(slug: string, limit: number = 3): Promise<BlogMeta[]> {
    if (USE_MOCK) {
      const currentBlog = MOCK_BLOGS.find(item => item.slug === slug);
      if (!currentBlog) {
        return [];
      }
      return MOCK_BLOGS
        .filter(blog => blog.slug !== slug)
        .slice(0, limit);
    }

    throw new Error('getRelatedBlogs not implemented');
  }
}
