import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Combines Tailwind classes conditionally
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format a date to a readable string
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(date);
}

// Function to truncate text
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

// Generate a unique chat thread title from a message
export function generateThreadTitle(message: string): string {
  // Truncate and clean up the message to create a title
  const truncated = message.trim().split("\n")[0]; // Take first line
  return truncateText(truncated, 40);
}

// Simple function to extract domain from URL
export function extractDomain(url: string): string {
  try {
    const domain = new URL(url).hostname;
    return domain.startsWith("www.") ? domain.slice(4) : domain;
  } catch (e) {
    return url;
  }
}
