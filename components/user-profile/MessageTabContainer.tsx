'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, ArrowLeft } from 'lucide-react';
import { useMessaging } from '@/contexts/MessagingContext';
import MessageBubble from './messaging/MessageBubble';
import ConversationList from './messaging/ConversationList';
import MessageComposer from './messaging/MessageComposer';
import MessageEmptyState from './MessageEmptyState';
import useMessagingEffect from '@/hooks/useMessaging';

export default function MessageTabContainer() {
  const {
    activeConversation,
    activeMessages,
    filteredConversations,
    searchQuery,
    unreadCount,
    totalConversations,
    selectConversation,
    sendMessage,
    updateDraft,
    updateSearch,
    startCareTeamConversation,
  } = useMessaging();

  const [isHydrated, setIsHydrated] = useState(false);
  const [newMessageIds, setNewMessageIds] = useState<Set<string>>(new Set());
  const [showChat, setShowChat] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const prevMessagesLengthRef = useRef(0);

  useMessagingEffect();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Auto-scroll and track new messages for animation
  useEffect(() => {
    if (!isHydrated || !activeConversation) return;

    const currentLength = activeMessages.length;
    const prevLength = prevMessagesLengthRef.current;

    // Check if new messages were added
    if (currentLength > prevLength && prevLength > 0) {
      const newIds = new Set<string>();
      for (let i = prevLength; i < currentLength; i++) {
        newIds.add(activeMessages[i].id);
      }
      setNewMessageIds(newIds);

      // Scroll to bottom smoothly
      setTimeout(() => {
        messagesContainerRef.current?.scrollTo({
          top: messagesContainerRef.current.scrollHeight,
          behavior: 'smooth',
        });
      }, 0);

      // Clear new message animation after animation completes
      setTimeout(() => {
        setNewMessageIds(new Set());
      }, 300);
    }

    prevMessagesLengthRef.current = currentLength;
  }, [activeMessages.length, isHydrated, activeConversation]);

  const handleConversationSelect = (conversationId: string) => {
    selectConversation(conversationId);
    setShowChat(true);
  };

  const handleBackToList = () => {
    setShowChat(false);
  };

  if (!isHydrated) {
    return (
      <div className="flex items-center justify-center h-[400px]">
        <p className="text-gray-500">Loading messages...</p>
      </div>
    );
  }

  if (totalConversations === 0) {
    return (
      <div className="w-full flex items-center justify-center min-h-[360px] bg-white rounded-[24px]">
        <MessageEmptyState onMessageCareTeam={startCareTeamConversation} />
      </div>
    );
  }

  return (
    <div className="w-full h-[550px] sm:h-[600px] flex rounded-[12px] border border-[#EBEAE4] overflow-hidden bg-white max-w-full">
      {/* Sidebar - Conversation List */}
      <div className={`${showChat ? 'hidden md:flex' : 'flex'} w-full md:w-80 border-r border-[#EBEAE4] flex-col bg-white min-w-0`}>
        <div className="p-4 border-b border-[#F4F3EF]">
          <h2 className="text-lg font-semibold text-[#142C1E] mb-3">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => updateSearch(e.target.value)}
              placeholder="Search messages"
              className="w-full pl-9 pr-4 py-2 rounded-[12px] border border-[#EBEAE4] bg-[#FAF9F5] text-[14px] focus:outline-none focus:border-[#A3C9A8]"
            />
          </div>
        </div>
        <ConversationList
          conversations={filteredConversations}
          activeConversationId={activeConversation?.id || null}
          onSelectConversation={handleConversationSelect}
        />
      </div>

      {/* Chat Panel */}
      <div className={`${showChat ? 'flex' : 'hidden md:flex'} flex-1 flex-col bg-white min-w-0 w-full`}>
        {activeConversation ? (
          <>
            <div className="px-3 py-3 sm:px-4 sm:py-4 border-b border-[#F4F3EF] shrink-0">
              <div className="flex items-center justify-between gap-2 min-w-0">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  {/* Back button for mobile */}
                  <button
                    onClick={handleBackToList}
                    className="md:hidden p-1.5 -ml-1 hover:bg-gray-100 rounded-full shrink-0"
                    aria-label="Back to conversations"
                  >
                    <ArrowLeft className="w-5 h-5 text-gray-700" />
                  </button>
                  <div className="relative shrink-0">
                    <div
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-semibold"
                      style={{ backgroundColor: activeConversation.avatarColor }}
                    >
                      {activeConversation.initials}
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#10B981] rounded-full border-2 border-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 min-w-0">
                      <h3 className="font-semibold text-[#142C1E] text-sm sm:text-base truncate">
                        {activeConversation.participantName}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-500 truncate">
                      We typically reply within a few hours
                    </p>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full shrink-0">
                  <Search className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>
            <div 
              ref={messagesContainerRef}
              className="flex-1 overflow-y-auto px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-6 space-y-3 sm:space-y-4 min-w-0"
            >
              <div className="text-center text-xs text-gray-400 py-1 sm:py-2">
                Today, Jul 20, 2026
              </div>
              {activeMessages.map((message) => (
                <MessageBubble 
                  key={message.id} 
                  message={message}
                  isNew={newMessageIds.has(message.id)}
                />
              ))}
            </div>
            <MessageComposer
              onSend={sendMessage}
            />
          </>
        ) : (
          <div className="hidden md:flex flex-1 items-center justify-center p-4">
            <MessageEmptyState onMessageCareTeam={startCareTeamConversation} />
          </div>
        )}
      </div>
    </div>
  );
}
