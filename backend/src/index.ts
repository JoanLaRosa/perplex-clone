import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { config } from "./config/config";
import { OpenAIService } from "./services/OpenAIService";
import { SearchService } from "./services/SearchService";
import { DatabaseService } from "./services/DatabaseService";
import { initializeDatabase } from "./database/schema";
import { Database } from "sqlite3";

// Load environment variables
dotenv.config();

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Initialize services
const openAIService = new OpenAIService(config.openai.apiKey);
const searchService = new SearchService(config.serpapi.apiKey);
const dbService = new DatabaseService(config.database.path);

// Initialize database
const db = new Database(config.database.path);
initializeDatabase(db).catch(console.error);

// Routes
app.post("/api/conversation", async (req, res) => {
  try {
    const conversationId = await dbService.createConversation();
    res.json({ conversationId });
  } catch (error) {
    console.error("Error creating conversation:", error);
    res.status(500).json({ error: "Failed to create conversation" });
  }
});

app.post("/api/query", async (req, res) => {
  try {
    const { query, conversationId, focusMode } = req.body;

    // Get conversation history
    const history = await dbService.getConversationHistory(conversationId);

    // Perform web search
    const searchResults = await searchService.search(query);

    // Process query with OpenAI
    const response = await openAIService.processQuery(
      query,
      history,
      searchResults,
      focusMode
    );

    // Save the user's message
    const userMessageId = await dbService.addMessage(conversationId, {
      role: "user",
      content: query,
    });

    // Save the assistant's response
    const assistantMessageId = await dbService.addMessage(conversationId, {
      role: "assistant",
      content: response.content,
    });

    // Save sources
    await dbService.addSources(assistantMessageId, response.sources);

    res.json({
      answer: response.content,
      sources: response.sources,
    });
  } catch (error) {
    console.error("Error processing query:", error);
    res.status(500).json({ error: "Failed to process query" });
  }
});

app.get("/api/conversation/:id/history", async (req, res) => {
  try {
    const { id } = req.params;
    const history = await dbService.getConversationHistory(parseInt(id));
    res.json({ history });
  } catch (error) {
    console.error("Error fetching conversation history:", error);
    res.status(500).json({ error: "Failed to fetch conversation history" });
  }
});

// Start server
const port = config.server.port;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
