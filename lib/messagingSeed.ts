import type { Conversation, Message } from '@/types/messaging';

const minutesAgo = (minutes: number) =>
  new Date(Date.now() - minutes * 60_000).toISOString();

function buildMessage(
  id: string,
  conversationId: string,
  sender: Message['sender'],
  senderName: string,
  body: string,
  createdAt: string,
  status: Message['status'] = 'read',
): Message {
  return {
    id,
    conversationId,
    sender,
    senderName,
    body,
    createdAt,
    status,
  };
}

function buildConversation(
  config: Omit<Conversation, 'lastMessageAt' | 'lastMessagePreview' | 'typing'>,
  messages: Message[],
): Conversation {
  const lastMessage = messages[messages.length - 1];

  return {
    ...config,
    typing: false,
    lastMessageAt: lastMessage.createdAt,
    lastMessagePreview:
      lastMessage.body.length > 84
        ? `${lastMessage.body.slice(0, 81)}...`
        : lastMessage.body,
  };
}

export function buildMessagingSeed() {
  const careTeamMessages: Message[] = [
    buildMessage(
      'msg-1',
      'care-team-1',
      'care-team',
      'Care Team',
      'Hi Maria, thank you for completing your assessment. Your treatment has been reviewed by our physician and has been approved.',
      minutesAgo(48),
    ),
    buildMessage(
      'msg-2',
      'care-team-1',
      'user',
      'You',
      'Thank you! When can I expect my medication to be shipped?',
      minutesAgo(39),
    ),
    buildMessage(
      'msg-3',
      'care-team-1',
      'care-team',
      'Care Team',
      "You're welcome! Your medication will be shipped within 1-2 business days. You'll get an email with tracking information as soon as it's on the way.",
      minutesAgo(28),
    ),
    buildMessage(
      'msg-4',
      'care-team-1',
      'user',
      'You',
      'Great!',
      minutesAgo(20),
    ),
  ];

  const conversations: Conversation[] = [
    buildConversation(
      {
        id: 'care-team-1',
        participantName: 'Care Team',
        participantRole: 'Apsu Support',
        avatarColor: 'secondary-text',
        initials: 'CT',
        unreadCount: 1,
        online: true,
      },
      careTeamMessages,
    ),
  ];

  const messagesByConversationId: Record<string, Message[]> = {
    'care-team-1': careTeamMessages,
  };

  return {
    activeConversationId: 'care-team-1',
    conversations,
    messagesByConversationId,
    draftsByConversationId: {
      'care-team-1': '',
    },
  };
}
