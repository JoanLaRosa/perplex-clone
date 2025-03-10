import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3001";

// Mock data for sources
const sources = [
  {
    title: "Perplexity AI Guide",
    url: "https://learnprompting.org/blog/guide-perplexity",
    snippet:
      "Perplexity remembers conversation history, allowing users to ask follow-up questions seamlessly.",
  },
  {
    title: "Getting Started with Perplexity",
    url: "https://perplexity.ai/hub/blog/getting-started-with-perplexity",
    snippet:
      "Users can narrow searches to specific content types using six focus modes.",
  },
  {
    title: "What is Perplexity AI?",
    url: "https://aitoday.com/artificial-intelligence/what-is-perplexity-ai-how-it-works-and-how-to-use-it",
    snippet:
      "Perplexity AI combines natural language processing with large language models to deliver direct, concise answers.",
  },
  {
    title: "Everything About Perplexity",
    url: "https://felloai.com/perplexity-ai-everything-you-need-to-know",
    snippet:
      "Provides citations for all answers, allowing users to verify the information easily.",
  },
];

// Mock AI responses until we can integrate with the OpenAI API
const mockResponses: Record<string, { text: string; citations: number[] }> = {
  "what is perplexity ai": {
    text: "Perplexity AI is an advanced AI-powered search engine and conversational assistant that combines natural language processing with large language models (LLMs) to deliver direct, concise, and contextually relevant answers to user queries. It synthesizes information from multiple sources, providing comprehensive responses with citations.",
    citations: [0, 2, 3],
  },
  "what are the main features of perplexity ai": {
    text: "Perplexity AI offers several key features including: 1) Contextual Memory that remembers conversation history for seamless follow-up questions, 2) Focus Modes to narrow searches to specific content types like Web, Academic, or Social, 3) Multimodal Capabilities that allow uploading documents or images for analysis, 4) Real-Time Updates for tracking live events, and 5) Source Transparency by providing citations for all answers.",
    citations: [0, 1, 2, 3],
  },
  "how does perplexity work": {
    text: "Perplexity AI works by using large language models (LLMs) to process user queries in natural language. It then searches the web in real-time to retrieve relevant information, synthesizes this information into a coherent answer, and provides citations to the original sources. The system maintains conversation context, allowing for natural follow-up questions and a conversational experience.",
    citations: [1, 2],
  },
};

// Default response for queries not in the mock data
const defaultResponse = {
  text: "I don't have specific information about that query, but I can tell you that Perplexity AI is a conversational search engine that provides direct answers with citations from the web. Would you like to know more about Perplexity's features or how it works?",
  citations: [2, 3],
};

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json();

    // Create a new conversation if needed
    const conversationId = 1; // For now, we'll use a default conversation ID

    // Send the query to our backend
    const response = await fetch(`${BACKEND_URL}/api/query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        conversationId,
      }),
    });

    if (!response.ok) {
      throw new Error(`Backend request failed with status ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json({
      text: data.answer,
      sources: data.sources,
    });
  } catch (error) {
    console.error("Error processing chat request:", error);
    return NextResponse.json(
      { error: "Failed to process your request" },
      { status: 500 }
    );
  }
}
