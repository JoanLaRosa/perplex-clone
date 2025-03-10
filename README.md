# Perplexity AI Clone

A modern clone of Perplexity AI built with Next.js and TypeScript.

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Backend**: Node.js with Express and TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with clsx and tailwind-merge for styling
- **Development**: ESLint, TypeScript, PostCSS

## Project Structure

```
perplex-clone/
├── src/                 # Frontend source code
├── backend/            # Backend source code
│   ├── src/           # Backend TypeScript source
│   └── data/          # Data storage
├── public/            # Static assets
└── .next/            # Next.js build output
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/perplex-clone.git
cd perplex-clone
```

2. Install frontend dependencies:

```bash
npm install
```

3. Install backend dependencies:

```bash
cd backend
npm install
```

4. Set up environment variables:
   - Copy `.env.example` to `.env.local` in the root directory
   - Copy `backend/.env.example` to `backend/.env`

### Development

1. Start the frontend development server:

```bash
npm run dev
```

2. Start the backend server (in a separate terminal):

```bash
cd backend
npm run dev
```

The application will be available at `http://localhost:3000`

Note: Make sure you have all environment variables set up correctly in both `.env.local` and `backend/.env` files before starting the servers.

## Features

- Modern, responsive UI with Tailwind CSS
- Type-safe development with TypeScript
- Hot reloading for development
- ESLint for code quality
- Custom UI components with utility-first CSS

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## What is perplexity?

Perplexity AI is an advanced AI-powered search engine and conversational assistant that combines natural language processing with large language models (LLMs) to deliver direct, concise, and contextually relevant answers to user queries. It synthesizes information from multiple sources, providing comprehensive responses with citations.

## **Main Features of Perplexity AI**

1. **Contextual Memory**:

   - Perplexity remembers conversation history, allowing users to ask follow-up questions seamlessly. This feature ensures continuity and depth in discussions[1][4].

2. **Focus Modes**:

   - Users can narrow searches to specific content types using six focus modes:
     - **Web Focus**: General internet search.
     - **Academic Focus**: Scholarly articles and journals.
     - **Social Focus**: Social media and forums.
     - **Video Focus**: Video content summaries.
     - **Writing Focus**: Creative and technical writing.
     - **Math Focus**: Powered by Wolfram Alpha for computations and data analysis[1][3].

3. **Multimodal Capabilities**:

   - Users can upload documents or images for analysis, enabling insights from visual or textual data[4][5].

4. **Real-Time Updates**:

   - Tracks live events like weather, elections, or sports, providing up-to-date information[3][4].

5. **Customizable Outputs**:

   - Responses can be tailored for specific audiences or needs, making it versatile for professional or casual use[2][4].

6. **Code Generation and Debugging**:

   - Assists developers by generating code snippets or debugging existing code in various programming languages[4][5].

7. **Source Transparency**:

   - Provides citations for all answers, allowing users to verify the information easily[4][9].

8. **Quick and Pro Search Modes**:
   - "Quick Search" delivers fast answers, while "Pro Search" dives deeper into topics with clarifying questions for precision[4].

## **How People Use Perplexity AI**

1. **Research and Learning**:

   - Ideal for students, researchers, and professionals conducting in-depth studies or learning new skills like coding or languages[1][3].

2. **Content Creation**:

   - Supports SEO optimization, creative writing, brainstorming ideas, and summarizing long-form content like books or articles[2][8].

3. **Market Research and Fact-Checking**:

   - Helps users gather market trends, compare prices, and verify sources for accuracy[2][5].

4. **Real-Time Information Access**:

   - Tracks live updates on events such as elections or stock market trends[3][4].

5. **Enhanced Web Searching**:

   - Provides direct answers instead of a list of links, saving time and effort for users seeking quick insights[4][9].

6. **Collaboration and Organization**:
   - Users can organize searches into threads by topic and share them with colleagues for collaborative projects[4][5].

Perplexity AI is widely used across industries due to its ability to simplify complex tasks, provide accurate information quickly, and adapt to diverse user needs.

Citations:
[1] https://learnprompting.org/blog/guide-perplexity
[2] https://learnprompting.org/blog/perplexity_use_cases
[3] https://www.perplexity.ai/hub/blog/getting-started-with-perplexity
[4] https://aitoday.com/artificial-intelligence/what-is-perplexity-ai-how-it-works-and-how-to-use-it/
[5] https://www.reddit.com/r/perplexity_ai/comments/1dmcf20/what_are_some_use_cases_for_perplexity_ai/
[6] https://www.perplexity.ai/hub/faq/prompting-tips-and-examples-on-perplexity
[7] https://www.perplexity.ai
[8] https://www.uxdesigninstitute.com/blog/perplexity-ai-and-design-process/
[9] https://felloai.com/2024/12/perplexity-ai-everything-you-need-to-know-about-the-ai-search-engine/

What is Perplexity AI part 2?
Perplexity AI is an AI-powered conversational search engine designed to provide users with accurate, real-time answers to their queries by leveraging large language models (LLMs) and natural language processing (NLP) techniques. Launched in 2022, it aims to bridge the gap between traditional search engines and AI chatbots by delivering concise, sourced information in a conversational format. ​

Core Functionality:

    Conversational Search: Users can input queries in natural language and receive direct, concise answers accompanied by relevant citations, facilitating deeper exploration of topics. ​
    reddit.com

    Real-Time Information Retrieval: Unlike some AI models limited to static datasets, Perplexity AI accesses up-to-date information from the internet, ensuring responses reflect the most current data available. ​

    Follow-Up Interactions: The platform supports contextual follow-up questions, allowing users to delve deeper into subjects without reiterating previous queries. ​
    learnprompting.org

Notable Features:

    Focus Modes: Users can tailor their search scope using 'Focus' modes, such as 'Academic' for scholarly articles or 'Writing' to generate content without web access. ​
    uxdesigninstitute.com+1it.wikipedia.org+1

    Pro Search: Subscribers to the Pro version gain access to advanced LLMs, including GPT-4 and Claude 3.5, enabling more detailed and nuanced responses. ​
    uxdesigninstitute.com+8de.wikipedia.org+8pt.wikipedia.org+8

    File Uploads: The platform allows users to upload and analyze local files, including images, enhancing its utility for personalized research. ​
    pt.wikipedia.org+3en.wikipedia.org+3zh.wikipedia.org+3

    Image Generation: Perplexity AI offers AI-driven image creation capabilities, utilizing models like DALL·E and Stable Diffusion, allowing users to generate visual content based on textual prompts. ​
    en.wikipedia.org+1zh.wikipedia.org+1

User Interface (UI) and User Experience (UX) Highlights:

    Minimalist Design: The platform features a clean and intuitive interface, minimizing distractions and focusing on delivering information efficiently. ​
    medium.com+2mttmr.com+2nngroup.com+2

    Transparent Citations: Each response includes inline citations, enhancing trustworthiness and allowing users to verify information sources easily. ​
    it.wikipedia.org+4en.wikipedia.org+4reddit.com+4

    Interactive Threads and Collections: Users can maintain ongoing conversations (threads) and organize them into collections, facilitating structured research and easy retrieval of past interactions. ​
    uxdesigninstitute.com

    Discover Feed: A built-in news feed showcases the latest articles and topics, enabling users to stay informed on current events within the same platform. ​
    uxdesigninstitute.com

    Responsive Performance: The platform is designed for swift information delivery, aligning with users' expectations for rapid responses in a conversational search environment. ​
    nngroup.com

Perplexity AI's blend of advanced AI capabilities with user-centric design principles positions it as a valuable tool for individuals seeking efficient and reliable information retrieval in a conversational format.

Implementation:
Step-by-Step Implementation:
Step 1: Setup and Planning

    Define core features clearly:
        Conversational search (chat-like interactions)
        Real-time web information retrieval
        Inline citations for responses
        File uploads (documents for querying)
        Basic user management (signup/login via OAuth)

    Create a project structure:

/perplexity-clone
├── /frontend (Next.js)
├── /backend (Node.js + Express)
└── /db (PostgreSQL schema and migrations)

Step 2: Frontend Development (Next.js)

    Initialize Next.js:

npx create-next-app@latest frontend --use-npm

    Styling/UI:
        Tailwind CSS for rapid responsive UI development.
        shadcn/ui or simple custom UI components.
        Minimalist UI (clean search input, threads, inline citations).

    Key UI components:
        Search bar (with instant responses)
        Threads and chat interface
        Transparent inline citations (clickable sources)
        File upload component (simple drag & drop)

Step 3: Backend Development (Node.js + Express)

    Set up RESTful APIs with Express.js:
        Endpoint to handle user queries (POST /api/search)
        Endpoint to handle file uploads (/upload) → AWS S3
        User management and OAuth integration via NextAuth.js

    Middleware and libraries:
        express, cors, dotenv
        pg or prisma (to manage PostgreSQL interactions)
        multer (file upload middleware for Node.js)

Step 4: Database Setup (PostgreSQL)

    Define core schemas:
        Users (id, name, email, OAuth provider)
        Queries & Responses (questions, answers, citations)
        Files (uploads with S3 references)

    Use Prisma for schema management:

model User {
id String @id @default(uuid())
email String @unique
createdAt DateTime @default(now())
threads Thread[]
}

model Thread {
id String @id @default(uuid())
userId String
question String
answer String
sources String[]
createdAt DateTime @default(now())
}

Step 5: OpenAI Integration (GPT)

    Use OpenAI's GPT API (openai library):
        Send user queries to GPT models.
        Capture responses and relevant citations transparently.

Example Node.js API request:

const { OpenAI } = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/query', async (req, res) => {
const { question } = req.body;
const completion = await openai.chat.completions.create({
messages: [{ role: "user", content: question }],
model: "gpt-3.5-turbo",
});

res.json({ answer: completion.choices[0].message.content });
});

Step 5 (Continued): Implementing Citations

    Extract citations using response parsing logic.
    Store citations (URLs) clearly associated with responses in PostgreSQL.

Step 5: File Upload & AWS S3

    Set up AWS S3 bucket.
    Use AWS SDK (aws-sdk) in Node.js to upload and retrieve files:

const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

AWS.config.update({
accessKeyId: process.env.AWS_ACCESS_KEY_ID,
secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
region: 'us-east-1',
});

const s3 = new AWS.S3();

const upload = multer({
storage: multer.memoryStorage(),
});

app.post('/upload', upload.single('file'), async (req, res) => {
const params = {
Bucket: 'your-bucket-name',
Key: req.file.originalname,
Body: req.file.buffer,
};

s3.upload(params, (error, data) => {
if (error) return res.status(500).send(error);
res.json({ fileUrl: data.Location });
});
});

Step 6: Authentication with NextAuth.js

    Implement OAuth using NextAuth.js on the frontend (simplest):
        Providers: Google, GitHub, or similar.
