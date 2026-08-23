'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Search,
  ArrowLeft,
  Languages,
  Menu,
  X,
  StepBackIcon,
  StepForward,
  StepForwardIcon,
} from 'lucide-react';
import { useMessaging } from '@/contexts/MessagingContext';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
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
  const [userLanguage, setUserLanguage] = useState('Spanish');
  const [showAllTranslations, setShowAllTranslations] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const prevMessagesLengthRef = useRef(0);

  useMessagingEffect();

  // Sidebar animation logic
  useGSAP(() => {
    if (!sidebarRef.current) return;

    const isLargeScreen = window.innerWidth >= 1024;

    if (showSidebar) {
      gsap.to(sidebarRef.current, {
        width: isLargeScreen ? 320 : '100%',
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'expo.out',
        display: 'flex',
        clearProps: 'transform',
      });
    } else {
      gsap.to(sidebarRef.current, {
        width: isLargeScreen ? 0 : '100%',
        opacity: 0,
        x: isLargeScreen ? -30 : 0,
        duration: 0.5,
        ease: 'expo.inOut',
        display: isLargeScreen ? 'none' : 'none',
      });
    }
  }, [showSidebar]);

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
    <div className="w-full h-[550px] sm:h-[600px] flex rounded-[12px] border border-[#EBEAE4] overflow-hidden bg-white max-w-full relative mx-2">
      {/* Sidebar Toggle Button (Desktop) */}
      {!showSidebar && (
        <button
          onClick={() => setShowSidebar(true)}
          className="hidden lg:block md:absolute md:top-9 left-2 -translate-y-1/2 z-40 bg-secondary-text text-white p-3 rounded-full shadow-lg hover:bg-[#1e3a2a] transition-colors cursor-pointer"
          aria-label="Show sidebar"
        >
          <StepBackIcon className="w-4 h-4" />
        </button>
      )}

      {/* Sidebar - Conversation List */}
      <div
        ref={sidebarRef}
        className={`${showChat ? 'hidden md:flex' : 'flex md:flex'} w-full md:w-80 border-r border-[#EBEAE4] flex-col bg-white min-w-0 relative overflow-hidden`}
      >
        <div className="p-4 border-b border-[#F4F3EF]">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-secondary-text">
              Messages
            </h2>
            <div className="flex items-center gap-1">
              <button
                onClick={handleBackToList}
                className="p-1.5 hover:bg-gray-100 rounded-full transition-colors md:hidden"
                aria-label="Close messages"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={() => setShowSidebar(false)}
                className="hidden lg:block  bg-secondary-text text-white p-3 rounded-full shadow-lg hover:bg-[#1e3a2a] transition-colors cursor-pointer"
                aria-label="Hide sidebar"
              >
                <StepForwardIcon className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => updateSearch(e.target.value)}
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
      <div
        className={`${showChat ? 'flex' : 'hidden md:flex'} ${!showSidebar ? 'lg:w-full lg:max-w-full' : ''} flex-1 flex-col bg-white min-w-0  w-full `}
      >
        {!showChat && (
          <div className="md:hidden p-4 border-b border-[#F4F3EF]">
            <button
              onClick={() => setShowChat(true)}
              className="w-full flex items-center justify-center gap-2 bg-secondary-text text-white py-3 rounded-[12px] hover:bg-[#1e3a2a] transition-colors"
            >
              <span className="text-sm font-medium">
                Select a conversation to start chatting
              </span>
            </button>
          </div>
        )}
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
                  <div className="shrink-0 md:ml-10">
                    <div
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-semibold bg-primaryColor"
                      
                    >
                      {activeConversation.initials}
                    </div>
                  </div>
                  <div className="min-w-0 ">
                    <div className="flex items-center gap-2 min-w-0">
                      <h3 className="font-semibold text-secondary-text text-sm sm:text-base truncate">
                        {activeConversation.participantName}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-500 truncate">
                      We typically reply within a few hours
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {/* <button
                    onClick={handleBackToList}
                    className="md:hidden p-2 hover:bg-gray-100 rounded-full shrink-0"
                    aria-label="Show conversation list"
                  >
                    <Menu className="w-4 h-4 text-gray-700" />
                  </button> */}
                  <div className="md:flex gap-2 block space-y-2 md:space-y-0">
                    <div className="flex  items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-lg px-2 py-1">
                      <Languages className="w-3 h-3 text-gray-600" />
                      <select
                        value={userLanguage}
                        onChange={e => setUserLanguage(e.target.value)}
                        className="bg-transparent text-xs text-gray-700 outline-none cursor-pointer"
                      >
                        <option value="Korean">Korean</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Chinese">Chinese</option>
                      </select>
                    </div>
                    <button
                      onClick={() =>
                        setShowAllTranslations(!showAllTranslations)
                      }
                      className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 hover:bg-gray-100 transition-colors cursor-pointer"
                      title={
                        showAllTranslations
                          ? 'Hide all translations'
                          : 'Show all translations'
                      }
                    >
                      <Languages className="w-3 h-3 text-gray-600" />
                      <span className="text-xs text-gray-700 font-medium">
                        {showAllTranslations ? 'Hide' : 'Translate'}
                      </span>
                    </button>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-full shrink-0">
                    <Search className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
            <div
              ref={messagesContainerRef}
              className="flex-1 overflow-y-auto px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-6 space-y-3 sm:space-y-4 min-w-0"
            >
              <div className="text-center text-xs text-gray-400 py-1 sm:py-2">
                Today, Jul 20, 2026
              </div>
              {activeMessages.map(message => (
                <MessageBubble
                  key={message.id}
                  message={message}
                  isNew={newMessageIds.has(message.id)}
                  showTranslation={showAllTranslations}
                  userLanguage={userLanguage}
                />
              ))}
            </div>
            <MessageComposer onSend={sendMessage} />
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
