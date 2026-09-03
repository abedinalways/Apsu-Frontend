interface ParagraphProps {
  content?: string;
  emphasis?: boolean;
}

function renderRichText(text: string): React.ReactNode[] {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return <strong key={index} className="font-semibold text-primary">{part}</strong>;
    }
    return part;
  });
}

export default function Paragraph({ content, emphasis }: ParagraphProps) {
  if (!content) return null;
  return (
    <p
      className={
        emphasis
          ? 'text-[1.13rem] font-normal text-bulletColor md:-mt-30'
          : 'text-[1.13rem] font-normal leading-relaxed text-bulletColor'
      }
    >
      {renderRichText(content)}
    </p>
  );
}
