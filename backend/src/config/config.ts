import dotenv from "dotenv";
import path from "path";

// Load environment variables from .env file
dotenv.config();

export const config = {
  openai: {
    apiKey: process.env.OPENAI_API_KEY || "",
    model: "gpt-3.5-turbo",
  },
  serpapi: {
    apiKey: process.env.SERPAPI_API_KEY || "",
  },
  database: {
    path: path.join(__dirname, "../../data/perplex.db"),
  },
  server: {
    port: process.env.PORT || 3001,
  },
};
