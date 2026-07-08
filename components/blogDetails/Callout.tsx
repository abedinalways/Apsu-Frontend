interface CalloutProps {
  title?: string;
  content?: string;
}

export default function Callout({ title, content }: CalloutProps) {
  if (!content) return null;
  return (
    <div className="rounded-2xl bg-[#E1EFE9] p-8">
      {title && (
        <h2 className="mb-3 font-serif text-2xl font-semibold text-[#1E4B45]">
          {title}
        </h2>
      )}
      <p className="text-[0.98rem] leading-relaxed text-[#1E4B45]">{content}</p>
    </div>
  );
}
