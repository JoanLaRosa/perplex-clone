"use client";

import { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Message,
  MessageRole,
  Source,
  FocusMode,
  ChatRequest,
  ChatResponse,
} from "@/types";
import { toast } from "react-hot-toast";

// This is a simple hook to manage chat state and API calls
export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Function to add a new message to the chat
  const addMessage = useCallback(
    (content: string, role: MessageRole, sources?: Source[]) => {
      const newMessage: Message = {
        id: uuidv4(),
        content,
        role,
        createdAt: new Date(),
        sources,
      };

      setMessages((prev) => [...prev, newMessage]);
      return newMessage;
    },
    []
  );

  // Function to send a message to the API
  const sendMessage = useCallback(
    async (content: string, focusMode: FocusMode = FocusMode.Web) => {
      if (!content.trim()) return;

      // Add user message to the state
      addMessage(content, MessageRole.User);

      setIsLoading(true);

      try {
        // Create the API request payload
        const payload: ChatRequest = {
          query: content,
          focusMode,
        };

        // Call the API
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Failed to get response");
        }

        const data: ChatResponse = await response.json();

        // Add AI response to the messages
        addMessage(data.text, MessageRole.Assistant, data.sources);
      } catch (error) {
        console.error("Error sending message:", error);
        toast.error("Failed to get a response. Please try again.");

        // Add error message
        addMessage(
          "Sorry, I encountered an error processing your request. Please try again.",
          MessageRole.Assistant
        );
      } finally {
        setIsLoading(false);
      }
    },
    [addMessage]
  );

  return {
    messages,
    isLoading,
    sendMessage,
  };
}
