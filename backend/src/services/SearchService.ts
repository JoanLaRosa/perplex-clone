import { getJson } from "serpapi";
import { Source } from "./BaseLLMService";

export class SearchService {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async search(query: string): Promise<Source[]> {
    try {
      const response = await getJson({
        engine: "google",
        q: query,
        api_key: this.apiKey,
        num: 2, // Limit to top 2 results
      });

      const organicResults = response.organic_results || [];

      return organicResults.map((result: any) => ({
        url: result.link,
        title: result.title,
        snippet: result.snippet,
      }));
    } catch (error) {
      console.error("Search error:", error);
      return [];
    }
  }
}
