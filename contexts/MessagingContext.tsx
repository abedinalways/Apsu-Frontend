'use client';

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from 'react';
import type { Conversation, Message, MessagingState } from '@/types/messaging';
import { buildMessagingSeed } from '@/lib/messagingSeed';

const _initialState: MessagingState = {
  initialized: false,
  activeConversationId: null,
  searchQuery: '',
  conversationIds: [],
  conversationsById: {},
  messagesByConversationId: {},
  draftsByConversationId: {},
};

const buildMessageId = (prefix: 'user' | 'care-team' | 'system') =>
  `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

const moveConversationToFront = (ids: string[], conversationId: string) => [
  conversationId,
  ...ids.filter(id => id !== conversationId),
];

function upsertMessage(
  state: MessagingState,
  conversationId: string,
  message: Message,
) {
  if (!state.messagesByConversationId[conversationId]) {
    state.messagesByConversationId[conversationId] = [];
  }
  state.messagesByConversationId[conversationId].push(message);
}

function refreshConversationSnapshot(
  state: MessagingState,
  conversationId: string,
  message: Message,
) {
  const conversation = state.conversationsById[conversationId];
  if (!conversation) return;

  conversation.lastMessageAt = message.createdAt;
  conversation.lastMessagePreview =
    message.body.length > 84 ? `${message.body.slice(0, 81)}...` : message.body;
  state.conversationIds = moveConversationToFront(
    state.conversationIds,
    conversationId,
  );
}

interface MessagingContextType extends MessagingState {
  activeConversation: Conversation | null;
  activeMessages: Message[];
  filteredConversations: Conversation[];
  unreadCount: number;
  totalConversations: number;
  selectConversation: (conversationId: string) => void;
  sendMessage: (body: string, attachment?: Message['attachment']) => boolean;
  updateDraft: (value: string) => void;
  updateSearch: (value: string) => void;
  receiveMessage: (
    conversationId: string,
    body: string,
    senderName: string,
  ) => void;
  startCareTeamConversation: () => void;
}

const MessagingContext = createContext<MessagingContextType | undefined>(
  undefined,
);

export function MessagingProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<MessagingState>(() => {
    const seed = buildMessagingSeed();
    return {
      initialized: true,
      activeConversationId: seed.activeConversationId,
      searchQuery: '',
      conversationIds: seed.conversations.map(c => c.id),
      conversationsById: Object.fromEntries(
        seed.conversations.map(c => [c.id, c]),
      ),
      messagesByConversationId: seed.messagesByConversationId,
      draftsByConversationId: seed.draftsByConversationId,
    };
  });

  const activeConversation = state.activeConversationId
    ? (state.conversationsById[state.activeConversationId] ?? null)
    : null;

  const activeMessages = state.activeConversationId
    ? (state.messagesByConversationId[state.activeConversationId] ?? [])
    : [];

  const filteredConversations = state.conversationIds
    .map(id => state.conversationsById[id])
    .filter(Boolean)
    .filter(conversation => {
      if (!conversation) return false;
      const normalizedQuery = state.searchQuery.trim().toLowerCase();
      if (!normalizedQuery) return true;
      return [
        conversation.participantName,
        conversation.participantRole,
        conversation.lastMessagePreview,
      ].some(value => value.toLowerCase().includes(normalizedQuery));
    })
    .sort(
      (left, right) =>
        new Date(right.lastMessageAt).getTime() -
        new Date(left.lastMessageAt).getTime(),
    );

  const unreadCount = state.conversationIds.reduce((total, conversationId) => {
    const conversation = state.conversationsById[conversationId];
    return total + (conversation?.unreadCount ?? 0);
  }, 0);

  const totalConversations = state.conversationIds.length;

  const selectConversation = (conversationId: string) => {
    setState(prev => {
      const conversation = prev.conversationsById[conversationId];
      if (!conversation) return prev;

      return {
        ...prev,
        activeConversationId: conversationId,
        conversationIds: moveConversationToFront(
          prev.conversationIds,
          conversationId,
        ),
      };
    });
  };

  const startCareTeamConversation = () => {
    setState(prev => {
      if (prev.conversationsById['care-team-1']) {
        return {
          ...prev,
          activeConversationId: 'care-team-1',
        };
      }
      const newConv: Conversation = {
        id: 'care-team-1',
        participantName: 'Care Team',
        participantRole: 'Apsu Support',
        avatarColor: 'secondary-text',
        initials: 'CT',
        unreadCount: 0,
        online: true,
        typing: false,
        lastMessageAt: new Date().toISOString(),
        lastMessagePreview: 'Started conversation',
      };
      return {
        ...prev,
        activeConversationId: 'care-team-1',
        conversationIds: ['care-team-1', ...prev.conversationIds],
        conversationsById: {
          ...prev.conversationsById,
          'care-team-1': newConv,
        },
        messagesByConversationId: {
          ...prev.messagesByConversationId,
          'care-team-1': [],
        },
        draftsByConversationId: {
          ...prev.draftsByConversationId,
          'care-team-1': '',
        },
      };
    });
  };

  const updateSearch = (value: string) => {
    setState(prev => ({ ...prev, searchQuery: value }));
  };

  const updateDraft = (value: string) => {
    if (!state.activeConversationId) return;
    setState(prev => ({
      ...prev,
      draftsByConversationId: {
        ...prev.draftsByConversationId,
        [prev.activeConversationId!]: value,
      },
    }));
  };

  const sendMessage = (
    body: string,
    attachment?: Message['attachment'],
  ): boolean => {
    if (!state.activeConversationId) return false;
    const normalizedBody = body.trim();
    if (!normalizedBody && !attachment) return false;

    const timestamp = new Date().toISOString();
    const messageId = buildMessageId('user');

    const message: Message = {
      id: messageId,
      conversationId: state.activeConversationId,
      sender: 'user',
      senderName: 'You',
      body: normalizedBody || (attachment ? 'Sent an attachment' : ''),
      createdAt: timestamp,
      status: 'sent',
      attachment,
    };

    setState(prev => {
      // Guard: check if message with same ID already exists
      const existingMessages =
        prev.messagesByConversationId[prev.activeConversationId!] || [];
      if (existingMessages.some(msg => msg.id === messageId)) {
        return prev; // Don't add duplicate
      }

      const newState = { ...prev };
      upsertMessage(newState, prev.activeConversationId!, message);
      refreshConversationSnapshot(
        newState,
        prev.activeConversationId!,
        message,
      );
      newState.draftsByConversationId[prev.activeConversationId!] = '';
      return newState;
    });

    return true;
  };

  const receiveMessage = (
    conversationId: string,
    body: string,
    senderName: string,
  ) => {
    const timestamp = new Date().toISOString();
    const message: Message = {
      id: buildMessageId('care-team'),
      conversationId,
      sender: 'care-team',
      senderName,
      body: body.trim(),
      createdAt: timestamp,
      status: 'delivered',
    };

    setState(prev => {
      const conversation = prev.conversationsById[conversationId];
      if (!conversation) return prev;

      const newState = { ...prev };
      upsertMessage(newState, conversationId, message);
      refreshConversationSnapshot(newState, conversationId, message);

      if (conversationId === prev.activeConversationId) {
        newState.conversationsById[conversationId] = {
          ...conversation,
          unreadCount: 0,
          typing: false,
        };
      } else {
        newState.conversationsById[conversationId] = {
          ...conversation,
          unreadCount: (conversation.unreadCount ?? 0) + 1,
          typing: false,
        };
      }

      return newState;
    });
  };

  return (
    <MessagingContext.Provider
      value={{
        ...state,
        activeConversation,
        activeMessages,
        filteredConversations,
        unreadCount,
        totalConversations,
        selectConversation,
        sendMessage,
        updateDraft,
        updateSearch,
        receiveMessage,
        startCareTeamConversation,
      }}
    >
      {children}
    </MessagingContext.Provider>
  );
}

export function useMessaging() {
  const context = useContext(MessagingContext);
  if (context === undefined) {
    throw new Error('useMessaging must be used within a <MessagingProvider>');
  }
  return context;
}
