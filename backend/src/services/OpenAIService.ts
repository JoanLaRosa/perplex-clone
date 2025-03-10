import OpenAI from "openai";
import {
  BaseLLMService,
  Message,
  Source,
  LLMResponse,
  FocusMode,
} from "./BaseLLMService";

export class OpenAIService extends BaseLLMService {
  protected modelName: string = "gpt-3.5-turbo";
  protected apiKey: string;
  private openai: OpenAI;

  private getSystemPrompt(focusMode: FocusMode = FocusMode.Web): string {
    const prompts: Record<FocusMode, string> = {
      [FocusMode.Web]:
        "You are a helpful AI assistant that provides accurate and up-to-date information from the web. Use the provided search results to answer questions accurately. Always cite your sources and provide direct, concise answers.",
      [FocusMode.Academic]:
        "You are an academic research assistant. Focus on scholarly sources and academic literature. Provide detailed, well-researched answers with proper citations. Use formal language and maintain academic rigor.",
      [FocusMode.Social]:
        "You are a social media and current events expert. Focus on trending topics, social media discussions, and popular culture. Provide engaging, conversational responses while maintaining accuracy.",
      [FocusMode.Video]:
        "You are a video content specialist. Focus on video content, visual media, and multimedia sources. Provide summaries and insights from video content while maintaining accuracy.",
      [FocusMode.Writing]:
        "You are a writing assistant. Focus on creative writing, technical writing, and content creation. Provide well-structured, engaging responses with attention to style and clarity.",
      [FocusMode.Math]:
        "You are a mathematical and computational expert. Focus on numerical analysis, calculations, and mathematical concepts. Provide precise, step-by-step explanations and accurate computations.",
    };
    return prompts[focusMode];
  }

  constructor(apiKey: string) {
    super();
    this.apiKey = apiKey;
    this.openai = new OpenAI({ apiKey });
  }

  async processQuery(
    query: string,
    conversationHistory: Message[],
    searchResults: Source[] = [],
    focusMode: FocusMode = FocusMode.Web
  ): Promise<LLMResponse> {
    const formattedHistory =
      this.formatConversationHistory(conversationHistory);
    const searchContext = this.formatSearchResults(searchResults);
    const systemPrompt = this.getSystemPrompt(focusMode);

    const messages = [
      {
        role: "system",
        content: systemPrompt,
      },
      ...formattedHistory,
      {
        role: "user",
        content: `Search results:\n${searchContext}\n\nUser query: ${query}`,
      },
    ];

    const response = await this.openai.chat.completions.create({
      model: this.modelName,
      messages: messages as any[],
      temperature: 0.7,
      max_tokens: 1000,
    });

    return {
      content: response.choices[0].message.content || "",
      sources: searchResults,
    };
  }

  protected formatConversationHistory(history: Message[]): Message[] {
    return history.map((msg) => ({
      role: msg.role,
      content: msg.content,
    }));
  }

  protected formatSearchResults(results: Source[]): string {
    if (results.length === 0) return "No search results available.";

    return results
      .map((result, index) => {
        const title = result.title ? `Title: ${result.title}\n` : "";
        const snippet = result.snippet ? `Snippet: ${result.snippet}\n` : "";
        return `[${index + 1}] ${title}${snippet}URL: ${result.url}`;
      })
      .join("\n\n");
  }
}
