import { describe, it, expect } from 'vitest';
import { BlogService } from '@/lib/services/blog.service';

describe('BlogService', () => {
  it('returns a list of blogs', async () => {
    const blogs = await BlogService.getBlogs();
    expect(Array.isArray(blogs)).toBe(true);
    expect(blogs.length).toBeGreaterThan(0);
  });

  it('returns a blog by slug', async () => {
    const blog = await BlogService.getBlogBySlug('semaglutide-vs-tirzepatide');
    expect(blog).toBeDefined();
    expect(blog.title).toBeTruthy();
  });

  it('throws when slug not found', async () => {
    await expect(BlogService.getBlogBySlug('non-existent-slug')).rejects.toThrow('Blog not found');
  });
});
