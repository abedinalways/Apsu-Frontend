export type MessageSender = 'user' | 'care-team' | 'system';
export type MessageStatus = 'sent' | 'delivered' | 'read';

export type Conversation = {
  id: string;
  participantName: string;
  participantRole: string;
  avatarColor: string;
  initials: string;
  lastMessagePreview: string;
  lastMessageAt: string;
  unreadCount: number;
  online: boolean;
  typing: boolean;
};

export type MessageAttachment = {
  id: string;
  type: 'image' | 'document';
  url: string;
  name: string;
};

export type Message = {
  id: string;
  conversationId: string;
  sender: MessageSender;
  senderName: string;
  body: string;
  createdAt: string;
  status: MessageStatus;
  attachment?: MessageAttachment;
};

export type MessagingState = {
  initialized: boolean;
  activeConversationId: string | null;
  searchQuery: string;
  conversationIds: string[];
  conversationsById: Record<string, Conversation>;
  messagesByConversationId: Record<string, Message[]>;
  draftsByConversationId: Record<string, string>;
};