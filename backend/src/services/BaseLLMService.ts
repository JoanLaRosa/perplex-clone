export interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface Source {
  url: string;
  title?: string;
  snippet?: string;
}

export interface LLMResponse {
  content: string;
  sources: Source[];
}

export enum FocusMode {
  Web = "web",
  Academic = "academic",
  Social = "social",
  Video = "video",
  Writing = "writing",
  Math = "math",
}

export abstract class BaseLLMService {
  protected abstract modelName: string;
  protected abstract apiKey: string;

  /**
   * Process a user query with conversation history
   */
  abstract processQuery(
    query: string,
    conversationHistory: Message[],
    searchResults?: Source[],
    focusMode?: FocusMode
  ): Promise<LLMResponse>;

  /**
   * Format conversation history into model-specific format
   */
  protected abstract formatConversationHistory(history: Message[]): any;

  /**
   * Format search results into model-specific prompt
   */
  protected abstract formatSearchResults(results: Source[]): string;
}
