export default function BlogDetailsSkeleton() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="h-8 w-3/4 bg-gray-200 rounded-lg animate-pulse" />
        <div className="h-6 w-1/2 bg-gray-200 rounded-lg animate-pulse" />
      </div>

      <div className="grid gap-8 lg:grid-cols-[380px_minmax(0,1fr)]">
        <div className="space-y-4">
          <div className="h-10 w-full bg-gray-200 rounded-lg animate-pulse" />
          <div className="h-10 w-full bg-gray-200 rounded-lg animate-pulse" />
          <div className="h-10 w-full bg-gray-200 rounded-lg animate-pulse" />
        </div>

        <div className="space-y-6">
          <div className="aspect-video w-full bg-gray-200 rounded-2xl animate-pulse" />

          <div className="space-y-4">
            <div className="h-6 w-full bg-gray-200 rounded animate-pulse" />
            <div className="h-6 w-full bg-gray-200 rounded animate-pulse" />
            <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />
          </div>

          <div className="space-y-4">
            <div className="h-8 w-1/3 bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-6 w-full bg-gray-200 rounded animate-pulse" />
            <div className="h-6 w-full bg-gray-200 rounded animate-pulse" />
            <div className="h-6 w-2/3 bg-gray-200 rounded animate-pulse" />
          </div>

          <div className="space-y-4">
            <div className="h-8 w-1/3 bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-6 w-full bg-gray-200 rounded animate-pulse" />
            <div className="h-6 w-full bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
