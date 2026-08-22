interface SourceItem {
  id: string;
  title: string;
  url: string;
}

interface SourcesProps {
  title?: string;
  sources?: SourceItem[];
}

export default function Sources({ title = "Sources", sources = [] }: SourcesProps) {
  if (!sources || sources.length === 0) return null;

  return (
    <div className="mt-6 rounded-2xl bg-white shadow p-8 md:p-10 font-[Work_Sans]">
      <h2 className="mb-6 text-2xl font-semibold text-ink">{title}</h2>
      <ol className="space-y-5">
        {sources.map((source, index) => (
          <li key={source.id} className="flex gap-4">
            <span className="font-semibold text-ink min-w-[24px]">
              [{index + 1}]
            </span>
            <div className="flex-1">
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1F5FCF] hover:underline break-words"
              >
                {source.title}
              </a>
              <p className="mt-1 text-sm text-text-primary break-all">
                {source.url}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}