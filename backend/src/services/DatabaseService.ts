import { Database } from "sqlite3";
import { promisify } from "util";
import { Message, Source } from "./BaseLLMService";

export class DatabaseService {
  private db: Database;
  private run: (sql: string, params?: any[]) => Promise<any>;
  private get: (sql: string, params?: any[]) => Promise<any>;
  private all: (sql: string, params?: any[]) => Promise<any[]>;

  constructor(dbPath: string) {
    this.db = new Database(dbPath);
    this.run = (sql: string, params: any[] = []) => {
      return new Promise((resolve, reject) => {
        this.db.run(sql, params, function (err) {
          if (err) reject(err);
          else resolve({ lastID: this.lastID, changes: this.changes });
        });
      });
    };
    this.get = promisify(this.db.get.bind(this.db));
    this.all = promisify(this.db.all.bind(this.db));
  }

  async createConversation(): Promise<number> {
    const result = await this.run("INSERT INTO conversations DEFAULT VALUES");
    return result.lastID;
  }

  async addMessage(conversationId: number, message: Message): Promise<number> {
    const result = await this.run(
      "INSERT INTO messages (conversation_id, role, content) VALUES (?, ?, ?)",
      [conversationId, message.role, message.content]
    );
    return result.lastID;
  }

  async addSources(messageId: number, sources: Source[]): Promise<void> {
    for (const source of sources) {
      await this.run(
        "INSERT INTO sources (message_id, url, title, snippet) VALUES (?, ?, ?, ?)",
        [messageId, source.url, source.title, source.snippet]
      );
    }
  }

  async getConversationHistory(conversationId: number): Promise<Message[]> {
    return this.all(
      "SELECT role, content FROM messages WHERE conversation_id = ? ORDER BY created_at ASC",
      [conversationId]
    );
  }

  async getMessageSources(messageId: number): Promise<Source[]> {
    return this.all(
      "SELECT url, title, snippet FROM sources WHERE message_id = ?",
      [messageId]
    );
  }
}
