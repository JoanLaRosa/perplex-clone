# Perplexity AI Clone

A modern clone of Perplexity AI built with Next.js and TypeScript, featuring a clean and intuitive interface for AI-powered search and conversation.

## Tech Stack

- **Frontend**:
  - Next.js 14 with TypeScript
  - Tailwind CSS for styling
  - Custom UI components with clsx and tailwind-merge
  - React Hot Toast for notifications
- **Backend**:
  - Node.js with Express and TypeScript
  - RESTful API architecture
  - Modular service-based structure
- **Development**:
  - ESLint for code quality
  - TypeScript for type safety
  - PostCSS and Tailwind for styling

## Project Structure

```
perplex-clone/
├── src/                    # Frontend source code
│   ├── app/               # Next.js app router pages
│   ├── components/        # Reusable UI components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── types/            # TypeScript type definitions
├── backend/              # Backend source code
│   ├── src/
│   │   ├── config/      # Configuration files
│   │   ├── database/    # Database setup and models
│   │   ├── models/      # Data models
│   │   ├── routes/      # API routes
│   │   ├── services/    # Business logic
│   │   └── index.ts     # Main server file
│   └── data/            # Data storage
├── public/              # Static assets
└── .next/              # Next.js build output
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
- Modular backend architecture
- RESTful API endpoints
- Real-time updates with React Hot Toast

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
