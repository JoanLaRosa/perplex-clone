"use client";

import Link from "next/link";
import { ArrowRightIcon } from "./icons"; // We'll create this soon
import { ThemeToggle } from "@/components/ui/ThemeProvider";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // Store the query in session storage to pre-fill the chat
      sessionStorage.setItem("initialQuery", query);
      router.push("/chat");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="flex flex-col items-center justify-center flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              <span className="text-indigo-600 dark:text-indigo-400">
                Perplex
              </span>{" "}
              Clone
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg">
              An AI-powered search engine that provides direct answers with
              sources.
            </p>
          </div>

          <div className="bg-card shadow rounded-lg px-4 py-5 sm:p-6">
            <form onSubmit={handleSubmit}>
              <div className="mt-1 flex rounded-md shadow-sm">
                <div className="relative flex items-stretch flex-grow">
                  <input
                    type="text"
                    name="query"
                    id="query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="block w-full rounded-l-md border-0 py-3 px-4 text-foreground bg-card ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    placeholder="Ask me anything..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <ArrowRightIcon className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Feature
              title="Real-time Search"
              description="Get instant answers from the web with accurate, up-to-date information."
            />
            <Feature
              title="Source Transparency"
              description="Every answer includes citations so you can verify the information."
            />
            <Feature
              title="Contextual Memory"
              description="Ask follow-up questions naturally without repeating context."
            />
            <Feature
              title="Focus Modes"
              description="Tailor your search to academic, web, or social content."
            />
            <Feature
              title="File Analysis"
              description="Upload documents for analysis and get insights."
            />
            <Feature
              title="Code Generation"
              description="Generate code snippets and debug existing code."
            />
          </div>

          <div className="text-center pt-8">
            <Link
              href="/chat"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-card shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium text-card-foreground">{title}</h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}
