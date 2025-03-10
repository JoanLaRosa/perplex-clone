"use client";

import Link from "next/link";
import { useChat } from "@/hooks/useChat";
import ChatInput from "@/components/chat/ChatInput";
import ChatMessage from "@/components/chat/ChatMessage";
import { MessageRole, FocusMode } from "@/types";
import { ThemeToggle } from "@/components/ui/ThemeProvider";

export default function ChatPage() {
  const { messages, isLoading, sendMessage } = useChat();

  const handleSendMessage = (message: string, focusMode: FocusMode) => {
    sendMessage(message, focusMode);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <span className="text-indigo-600 dark:text-indigo-400 text-xl font-bold">
                  Perplex
                </span>
                <span className="text-card-foreground text-xl font-bold">
                  Clone
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <span className="inline-flex rounded-md shadow-sm">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => window.location.reload()}
                >
                  New Chat
                </button>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Display messages */}
          <div className="space-y-6">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isLoading && (
              <div className="chat-message assistant-message">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-indigo-600 rounded-full animate-bounce"></div>
                  <div
                    className="h-2 w-2 bg-indigo-600 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="h-2 w-2 bg-indigo-600 rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                    Searching for information...
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Input area */}
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
}
