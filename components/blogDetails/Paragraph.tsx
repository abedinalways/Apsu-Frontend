interface ParagraphProps {
  content?: string;
  emphasis?: boolean;
}

function renderRichText(text: string): React.ReactNode[] {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return <strong key={index} className="font-semibold text-[#111]">{part}</strong>;
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
          ? 'text-[1.13rem] font-normal text-[#3b3b3c] md:-mt-30'
          : 'text-[1.13rem] font-normal leading-relaxed text-[#3b3b3c]'
      }
    >
      {renderRichText(content)}
    </p>
  );
}
