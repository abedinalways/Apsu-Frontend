import { Fetch } from '@/lib/Fetch';
import { BlogMeta } from '@/types/blogDetails';

// Import all blog JSON files
import blog1 from '../data/blogs/understanding-glp1.json';

export class BlogService {
  private static endpoint = '/blogs';
  private static useMockData = true; // Set to false when backend is ready
  private static mockBlogs: BlogMeta[] = [blog1 as BlogMeta];

  // Load all mock blogs
  private static async loadMockBlogs(): Promise<BlogMeta[]> {
    return this.mockBlogs;
  }

  static async getBlogBySlug(slug: string): Promise<BlogMeta> {
    // Use mock data if backend is not ready
    if (this.useMockData) {
      const blogs = await this.loadMockBlogs();
      const mockBlog = blogs.find(item => item.slug === slug);
      if (!mockBlog) {
        throw new Error('Blog not found');
      }
      return mockBlog;
    }

    // Use real API when backend is ready
    try {
      const response = await Fetch.get(`${this.endpoint}/slug/${slug}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching blog with slug ${slug}:`, error);
      throw new Error('Failed to fetch blog');
    }
  }

  static async getAllBlogs(): Promise<BlogMeta[]> {
    // Use mock data if backend is not ready
    if (this.useMockData) {
      return await this.loadMockBlogs();
    }

    // Use real API when backend is ready
    try {
      const response = await Fetch.get(this.endpoint);
      return response.data;
    } catch (error) {
      console.error('Error fetching all blogs:', error);
      throw new Error('Failed to fetch blogs');
    }
  }

  static async getRelatedBlogs(slug: string, limit: number = 3): Promise<BlogMeta[]> {
    // Use mock data if backend is not ready
    if (this.useMockData) {
      const blogs = await this.loadMockBlogs();
      const currentBlog = blogs.find(item => item.slug === slug);
      if (!currentBlog) {
        return [];
      }
      // Return other blogs excluding current one
      return blogs
        .filter(blog => blog.slug !== slug)
        .slice(0, limit);
    }

    // Use real API when backend is ready
    try {
      const response = await Fetch.get(`${this.endpoint}/${slug}/related?limit=${limit}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching related blogs:', error);
      return [];
    }
  }

  // Call this method when backend is ready
  static enableRealData() {
    this.useMockData = false;
  }
}
