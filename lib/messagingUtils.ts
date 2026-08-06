export function formatConversationTimestamp(isoDate: string) {
  const date = new Date(isoDate);
  const diffInMinutes = Math.max(
    1,
    Math.floor((Date.now() - date.getTime()) / 60_000),
  );

  if (diffInMinutes < 60) {
    return `${diffInMinutes} min ago`;
  }

  if (diffInMinutes < 1440) {
    return `${Math.floor(diffInMinutes / 60)}h ago`;
  }

  const now = new Date();
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);

  if (date.toDateString() === yesterday.toDateString()) {
    return 'Yesterday';
  }

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
}