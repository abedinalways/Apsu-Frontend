interface IconGridProps {
  items?: string[];
}

export default function IconGrid({ items }: IconGridProps) {
  if (!items?.length) return null;
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {items.map(item => (
        <div
          key={item}
          className="flex items-center gap-3 rounded-xl border border-[#E4DFD1] bg-white p-4 text-sm font-semibold text-[#1E4B45]"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E1EFE9]">
            <span className="h-2 w-2 rounded-full bg-[#2B7A6E]" />
          </span>
          {item}
        </div>
      ))}
    </div>
  );
}
