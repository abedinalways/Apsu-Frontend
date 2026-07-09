interface ParagraphProps {
  content?: string;
  emphasis?: boolean;
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
      {content}
    </p>
  );
}
