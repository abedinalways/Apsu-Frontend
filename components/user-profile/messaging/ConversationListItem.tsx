'use client';

import { formatConversationTimestamp } from '@/lib/messagingUtils';
import type { Conversation } from '@/types/messaging';

type ConversationListItemProps = {
  conversation: Conversation;
  isActive: boolean;
  onSelect: (conversationId: string) => void;
};

export default function ConversationListItem({
  conversation,
  isActive,
  onSelect,
}: ConversationListItemProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(conversation.id)}
      className={`w-full px-4 py-6 flex items-start gap-3 text-left transition-colors relative ${
        isActive ? 'bg-[#E9F4EE]' : 'hover:bg-gray-50'
      }`}
    >
      {/* Avatar */}
      <div className="shrink-0">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[14px] font-semibold bg-primaryColor">
          {conversation.initials}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p className="text-[16px] font-semibold text-secondary-text truncate">
              {conversation.participantName}
            </p>
            <p className="text-[14px] text-grayColor1 truncate mt-0.5">
              {conversation.lastMessagePreview}
            </p>
          </div>
          <span className="text-[11px] font-medium text-grayColor1 shrink-0">
            {formatConversationTimestamp(conversation.lastMessageAt)}
          </span>
        </div>
      </div>

      {/* Unread indicator - left green border */}
      {conversation.unreadCount > 0 && (
        <div className="absolute left-0 top-2 bottom-2 w-1 bg-[#10B981] rounded-r-full" />
      )}
    </button>
  );
}
