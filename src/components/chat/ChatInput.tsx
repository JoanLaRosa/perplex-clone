"use client";

import { useState, FormEvent } from "react";
import { FileIcon, SendIcon } from "@/app/icons";
import { FocusMode } from "@/types";

interface ChatInputProps {
  onSendMessage: (message: string, focusMode: FocusMode) => void;
  isLoading: boolean;
}

export default function ChatInput({
  onSendMessage,
  isLoading,
}: ChatInputProps) {
  const [message, setMessage] = useState("");
  const [focusMode, setFocusMode] = useState<FocusMode>(FocusMode.Web);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message, focusMode);
      setMessage("");
    }
  };

  return (
    <div className="border-t border-border bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 mr-2"
            >
              <FileIcon className="h-5 w-5" />
            </button>
            <div className="flex-1 min-w-0 relative rounded-md shadow-sm">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="block w-full rounded-md border-0 py-3 pl-3 pr-12 text-foreground bg-background ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                placeholder={
                  isLoading ? "Waiting for response..." : "Ask anything..."
                }
                disabled={isLoading}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <button
                  type="submit"
                  disabled={isLoading || !message.trim()}
                  className="h-8 w-8 flex items-center justify-center text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <SendIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="flex justify-center mt-3">
          <div className="flex space-x-4 text-xs text-gray-500 dark:text-gray-400">
            <FocusModeButton
              label="Web"
              active={focusMode === FocusMode.Web}
              onClick={() => setFocusMode(FocusMode.Web)}
            />
            <FocusModeButton
              label="Academic"
              active={focusMode === FocusMode.Academic}
              onClick={() => setFocusMode(FocusMode.Academic)}
            />
            <FocusModeButton
              label="Social"
              active={focusMode === FocusMode.Social}
              onClick={() => setFocusMode(FocusMode.Social)}
            />
            <FocusModeButton
              label="Writing"
              active={focusMode === FocusMode.Writing}
              onClick={() => setFocusMode(FocusMode.Writing)}
            />
            <FocusModeButton
              label="Math"
              active={focusMode === FocusMode.Math}
              onClick={() => setFocusMode(FocusMode.Math)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface FocusModeButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

function FocusModeButton({ label, active, onClick }: FocusModeButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center ${
        active
          ? "text-indigo-600 dark:text-indigo-400 font-medium"
          : "hover:text-indigo-600 dark:hover:text-indigo-400"
      }`}
    >
      <span>{label}</span>
    </button>
  );
}
