interface HeadingProps {
  id?: string;
  content?: string;
  layout?: 'left' | 'right';
}

export default function Heading({ id, content, layout }: HeadingProps) {
  if (!content) return null;

  const heading = (
    <h2
      id={id}
      className="scroll-mt-16 text-xl md:text-[1.5rem] font-medium text-primary tracking-tight leading-[116%]"
    >
      {content}
    </h2>
  );

  // no layout → full width, normal heading
  if (!layout) return heading;

  // layout='right' → left column empty, heading sits in right column
  // layout='left'  → heading sits in left column, right column empty
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {layout === 'left' ? heading : <div aria-hidden="true" />}
      {layout === 'right' ? heading : <div aria-hidden="true" />}
    </div>
  );
}
