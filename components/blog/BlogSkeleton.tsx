export default function BlogSkeleton() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <div className="h-10 w-3/4 bg-gray-200 rounded-lg animate-pulse" />
        <div className="h-6 w-1/2 bg-gray-200 rounded-lg animate-pulse" />
      </div>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-[1fr_1fr] xl:gap-12">
        <div className="w-full h-full">
          <div className="aspect-[4/3] bg-gray-200 rounded-2xl animate-pulse" />
        </div>

        <div className="flex flex-col gap-4 justify-between w-full h-full">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex gap-4 rounded-2xl bg-gray-100 p-4">
              <div className="aspect-video w-1/3 bg-gray-200 rounded-xl animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse" />
                <div className="h-5 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="h-8 w-1/3 bg-gray-200 rounded-lg animate-pulse" />
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="rounded-2xl bg-gray-100 p-4 space-y-3">
              <div className="aspect-video bg-gray-200 rounded-xl animate-pulse" />
              <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse" />
              <div className="h-5 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
