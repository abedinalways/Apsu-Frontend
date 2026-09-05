'use client';

import ConversationListItem from './ConversationListItem';
import type { Conversation } from '@/types/messaging';

type ConversationListProps = {
  conversations: Conversation[];
  activeConversationId: string | null;
  onSelectConversation: (conversationId: string) => void;
};

export default function ConversationList({
  conversations,
  activeConversationId,
  onSelectConversation,
}: ConversationListProps) {
  if (!conversations.length) {
    return (
      <div className="p-4 text-center">
        <p className="text-sm text-grayColor1">No conversations found.</p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto">
      {conversations.map(conversation => (
        <ConversationListItem
          key={conversation.id}
          conversation={conversation}
          isActive={activeConversationId === conversation.id}
          onSelect={onSelectConversation}
        />
      ))}
    </div>
  );
}
