"use client";

import { Message, Source } from "@/types";
import { LinkIcon } from "@/app/icons";
import React, { useState } from "react";

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const { role, content, sources } = message;
  const isUser = role === "user";

  // Function to handle content with citations
  const renderContent = () => {
    if (!sources || sources.length === 0) {
      return (
        <p
          className={`${
            isUser ? "text-card-foreground" : "text-gray-600 dark:text-gray-300"
          }`}
        >
          {content}
        </p>
      );
    }

    // Simple citation handling - in a more complex implementation, we could parse the content to place citations
    return (
      <>
        <p
          className={`${
            isUser ? "text-card-foreground" : "text-gray-600 dark:text-gray-300"
          } mb-4`}
        >
          {content}
        </p>
        <SourcesList sources={sources} />
      </>
    );
  };

  return (
    <div
      className={`chat-message ${
        isUser ? "user-message" : "assistant-message"
      }`}
    >
      {renderContent()}
    </div>
  );
}

interface SourcesListProps {
  sources: Source[];
}

function SourcesList({ sources }: SourcesListProps) {
  const [expanded, setExpanded] = useState(false);

  if (sources.length === 0) return null;

  return (
    <div className="mt-2">
      <div className="text-sm text-gray-500 dark:text-gray-400 border-t border-border pt-2">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center text-xs text-blue-600 dark:text-blue-400 hover:underline mb-2"
        >
          <LinkIcon className="h-3 w-3 mr-1" />
          <span>{expanded ? "Hide sources" : `${sources.length} sources`}</span>
        </button>

        {expanded && (
          <div className="space-y-2 mt-1">
            {sources.map((source, index) => (
              <SourceItem key={index} source={source} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

interface SourceItemProps {
  source: Source;
  index: number;
}

function SourceItem({ source, index }: SourceItemProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-border rounded-md p-2">
      <div className="flex items-start">
        <span className="bg-background rounded-full h-5 w-5 flex items-center justify-center text-xs font-medium mr-2">
          {index + 1}
        </span>
        <div className="flex-1 min-w-0">
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
          >
            {source.title}
          </a>
          <div className="text-xs text-gray-600 dark:text-gray-300 mt-1 overflow-hidden text-ellipsis">
            {source.url.replace(/^https?:\/\//, "").split("/")[0]}
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs text-gray-500 dark:text-gray-400 mt-1 hover:text-gray-700 dark:hover:text-gray-300"
          >
            {expanded ? "Show less" : "Show more"}
          </button>
          {expanded && (
            <div className="mt-2 text-xs text-gray-600 dark:text-gray-300 bg-background p-2 rounded">
              {source.snippet}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
