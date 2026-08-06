'use client';

import { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { useMessaging } from '@/contexts/MessagingContext';
import MessageBubble from './messaging/MessageBubble';

import useMessagingEffect from '@/hooks/useMessaging';
import ConversationList from './messaging/ConversationList';
import MessageComposer from './messaging/MessageComposer';

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
  } = useMessaging();

  const [isHydrated, setIsHydrated] = useState(false);
  const [newMessageIds, setNewMessageIds] = useState<Set<string>>(new Set());
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

  if (!isHydrated) {
    return (
      <div className="flex items-center justify-center h-[400px]">
        <p className="text-gray-500">Loading messages...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-[600px] flex rounded-[16px] border border-[#EBEAE4] overflow-hidden bg-white font-[Work_Sans]">
      {/* Sidebar */}
      <div className="w-full md:w-80 border-r border-[#EBEAE4] flex flex-col bg-white">
        <div className="p-4 border-b border-[#F4F3EF]">
          <h2 className="text-lg font-semibold text-[#142C1E] mb-3">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => updateSearch(e.target.value)}
              placeholder="Search messages"
              className="w-full pl-9 pr-4 py-2 rounded-[12px] border border-[#EBEAE4] bg-white text-[16px] focus:outline-none focus:border-[#A3C9A8]"
            />
          </div>
        </div>
        <ConversationList
          conversations={filteredConversations}
          activeConversationId={activeConversation?.id || null}
          onSelectConversation={selectConversation}
        />
      </div>

      {/* Chat Panel */}
      <div className="hidden md:flex flex-1 flex-col bg-white">
        {activeConversation ? (
          <>
            <div className="px-6 py-4 border-b border-[#F4F3EF]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                      style={{ backgroundColor: activeConversation.avatarColor }}
                    >
                      {activeConversation.initials}
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#4b8a75] rounded-full border-2 border-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-[#69ae86]">
                        {activeConversation.participantName}
                      </h3>
                      
                    </div>
                    <p className="text-xs text-gray-500">
                      We typically reply within a few hours
                    </p>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Search className="w-6 h-6 text-gray-500" />
                </button>
              </div>
            </div>
            <div 
              ref={messagesContainerRef}
              className="flex-1 overflow-y-auto p-6 space-y-4"
            >
              <div className="text-center text-xs text-gray-400 py-2">
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
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-500">Select a conversation to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}