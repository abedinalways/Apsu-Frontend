import { Blog } from '@/types/blog';
import { blogsData } from '@/lib/data/blogsData';
import { blogDetails } from '@/lib/data/blogDetails';

const USE_MOCK = (process.env.NEXT_PUBLIC_BLOG_MODE || 'mock') === 'mock';

function extractSlug(href: string): string {
  return href.replace(/^\/blog\//, '');
}

function buildMockBlogs(): Blog[] {
  try {
    return blogsData.map(listing => {
      const slug = extractSlug(listing.href);
      const detail = blogDetails.find(d => d.slug === slug);

      return {
        id: listing.id,
        slug,
        title: listing.title,
        category: listing.category,
        date: listing.date,
        readTime: listing.readTime,
        author: detail?.author || 'Apsu Health',
        image: listing.image,
        heroImage: detail?.heroImage || listing.image,
        description: listing.description,
        href: listing.href,
        summary: detail?.summary || [],
        content: detail?.content || [],
        sources: detail?.sources,
      };
    });
  } catch (error) {
    console.error('Failed to load blog mock data:', error);
    return [];
  }
}

const MOCK_BLOGS: Blog[] = buildMockBlogs();

export class BlogService {
  static async getBlogs(): Promise<Blog[]> {
    if (USE_MOCK) {
      return MOCK_BLOGS;
    }

    throw new Error('getBlogs not implemented');
  }

  static async getBlogBySlug(slug: string): Promise<Blog> {
    if (USE_MOCK) {
      const blog = MOCK_BLOGS.find(item => item.slug === slug);
      if (!blog) {
        throw new Error('Blog not found');
      }
      return blog;
    }

    throw new Error('getBlogBySlug not implemented');
  }

  static async getRelatedBlogs(slug: string, limit: number = 3): Promise<Blog[]> {
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
