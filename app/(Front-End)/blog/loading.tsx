import BlogSkeleton from '@/components/blog/BlogSkeleton';

export default function Loading() {
  return (
    <main className="pt-30 md:pt-50">
      <div className="custom-container">
        <BlogSkeleton />
      </div>
    </main>
  );
}
