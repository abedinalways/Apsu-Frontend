import BlogDetailsSkeleton from '@/components/blogDetails/BlogDetailsSkeleton';

export default function Loading() {
  return (
    <div className="custom-container py-10 lg:py-14">
      <BlogDetailsSkeleton />
    </div>
  );
}
