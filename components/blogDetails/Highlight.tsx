interface HighlightProps {
  content?: string;
}

export default function Highlight({ content }: HighlightProps) {
  if (!content) return null;
  return (
    <div className="rounded-2xl bg-highlightColor py-4 px-2">
      <p className="text-[1.05rem] leading-relaxed text-primary">{content}</p>
    </div>
  );
}
