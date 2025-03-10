// Source type - represents citation sources
export interface Source {
  title: string;
  url: string;
  snippet: string;
}

// Message types
export enum MessageRole {
  User = "user",
  Assistant = "assistant",
  System = "system",
}

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  createdAt: Date;
  sources?: Source[];
}

// Chat thread types
export interface ChatThread {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

// Focus mode types
export enum FocusMode {
  Web = "web",
  Academic = "academic",
  Social = "social",
  Video = "video",
  Writing = "writing",
  Math = "math",
}

// API request types
export interface ChatRequest {
  query: string;
  threadId?: string;
  focusMode?: FocusMode;
}

export interface ChatResponse {
  text: string;
  sources: Source[];
}
