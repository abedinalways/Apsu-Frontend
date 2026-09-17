import { BoltIcon } from '../icons/CheckIcon';

interface BulletListProps {
  items?: string[];
}

export default function BulletList({ items }: BulletListProps) {
  if (!items?.length) return null;
  return (
    <ul className="space-y-3">
      {items.map(item => (
        <li
          key={item}
          className="flex items-start gap-3 text-[0.95rem] text-bulletColor"
        >
          <BoltIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
