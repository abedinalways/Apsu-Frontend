'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Languages } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'physician';
  content: string;
  originalLanguage?: string;
  timestamp: Date;
}

export default function MedicalChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userLanguage, setUserLanguage] = useState('Korean');
  const [showTranslation, setShowTranslation] = useState<Record<string, boolean>>({});

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Add welcome message when chat is first opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          role: 'physician',
          content: "Hello! I'm your AI medical assistant. How can I help you today?",
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, messages.length]);

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Focus the input when the chat opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: trimmed,
      originalLanguage: userLanguage,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chatInput: trimmed,
          sessionId: `user-${Date.now()}`,
          userLanguage,
        }),
      });

      const data = await response.json();

      if (!response.ok && data.error) {
        const errorMessage: Message = {
          id: `error-${Date.now()}`,
          role: 'physician',
          content: data.error,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, errorMessage]);
      } else {
        const reply = data.reply || "I'm here to help. Could you please rephrase your question?";

        const physicianMessage: Message = {
          id: `physician-${Date.now()}`,
          role: 'physician',
          content: reply,
          timestamp: new Date(),
        };

        setMessages(prev => [...prev, physicianMessage]);
      }
    } catch (error) {
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        role: 'physician',
        content: 'Sorry, there was an error processing your request. Please try again later.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const toggleTranslation = (messageId: string) => {
    setShowTranslation(prev => ({
      ...prev,
      [messageId]: !prev[messageId]
    }));
  };

  return (
    <>
      {/* Floating action button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-[#01503b] text-white shadow-lg hover:scale-110 active:scale-95 transition-transform flex items-center justify-center"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[9999] w-[calc(100vw-3rem)] sm:w-[420px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-[#01503b] text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Languages className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Multilingual Support</h3>
                <p className="text-xs text-white/70">AI Medical Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-white/10 rounded-md transition-colors"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Language selector */}
          <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
            <select
              value={userLanguage}
              onChange={(e) => setUserLanguage(e.target.value)}
              className="text-xs bg-white border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#01503b]/30"
            >
              <option value="Korean">Korean</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Japanese">Japanese</option>
              <option value="Chinese">Chinese</option>
            </select>
          </div>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className="max-w-[85%] space-y-1.5">
                  {/* Sender info */}
                  <div className={`flex items-center gap-2 text-xs text-gray-500 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                    <span className="font-medium">
                      {msg.role === 'user' ? 'You' : 'Physician'} • {msg.role === 'user' ? userLanguage : 'English'}
                    </span>
                  </div>

                  {/* Message bubble */}
                  <div
                    className={`rounded-2xl px-4 py-3 ${
                      msg.role === 'user'
                        ? 'bg-[#d1e7d4] text-[#142C1E] rounded-tr-sm'
                        : 'bg-white border border-gray-200 text-[#142C1E] rounded-tl-sm'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                      {msg.content}
                    </p>
                  </div>

                  {/* Translation toggle for user messages */}
                  {msg.role === 'user' && showTranslation[msg.id] && (
                    <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
                      <p className="text-xs text-gray-500 mb-1.5 font-medium">Translated into English</p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        "{msg.content}"
                      </p>
                    </div>
                  )}

                  {/* Translation toggle for physician messages */}
                  {msg.role === 'physician' && showTranslation[msg.id] && (
                    <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
                      <p className="text-xs text-gray-500 mb-1.5 font-medium">Translated into your language</p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {msg.content}
                      </p>
                    </div>
                  )}

                  {/* Translation button */}
                  <button
                    onClick={() => toggleTranslation(msg.id)}
                    className="text-xs text-[#01503b] hover:text-[#01503b]/80 font-medium flex items-center gap-1 mt-1"
                  >
                    <Languages className="w-3 h-3" />
                    {showTranslation[msg.id] ? 'Hide translation' : 'Translate'}
                  </button>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-sm px-4 py-3">
                  <div className="flex gap-1.5 items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="p-3 border-t border-gray-200 bg-white">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Write a message..."
                disabled={isLoading}
                className="flex-1 px-4 py-2.5 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#01503b]/30 disabled:opacity-50"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 rounded-full bg-[#01503b] text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-transform disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}