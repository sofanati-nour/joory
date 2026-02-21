import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Replaced explicit any with unknown or generic constraints where possible
export type WithoutChild<T> = T extends { child?: unknown } ? Omit<T, "child"> : T;
export type WithoutChildren<T> = T extends { children?: unknown } ? Omit<T, "children"> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

/**
 * Formats a date relative to "now"
 */
export function formatRelativeTime(date: string, locale: string = 'ar') {
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  const now = new Date();
  const diffInSeconds = Math.floor((new Date(date).getTime() - now.getTime()) / 1000);

  const units = [
    { unit: "year", seconds: 31536000 },
    { unit: "month", seconds: 2592000 },
    { unit: "day", seconds: 86400 },
    { unit: "hour", seconds: 3600 },
    { unit: "minute", seconds: 60 },
    { unit: "second", seconds: 1 },
  ] as const;

  for (const { unit, seconds } of units) {
    if (Math.abs(diffInSeconds) >= seconds || unit === "second") {
      const value = Math.round(diffInSeconds / seconds);
      return rtf.format(value, unit);
    }
  }
}

export function getSmartDirection(text: string): 'rtl' | 'ltr' {
  if (!text) return 'ltr';

  // 1. Remove URLs, mentions, and hashtags to find the "true" language
  // (Twitter ignores these for directionality to prevent short links skewing the result)
  const cleanText = text
    .replace(/https?:\/\/\S+/g, '') // Remove URLs
    .replace(/@\w+/g, '')           // Remove Mentions
    .replace(/#\w+/g, '');          // Remove Hashtags

  // 2. Count strong LTR and RTL characters
  let ltrCount = 0;
  let rtlCount = 0;

  for (const char of cleanText) {
    const code = char.charCodeAt(0);
    // Hebrew (0590-05FF), Arabic (0600-06FF), etc.
    if (code >= 0x0590 && code <= 0x08FF) {
      rtlCount++;
    }
    // Basic Latin (A-Z, a-z)
    else if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      ltrCount++;
    }
  }

  // 3. Fallback to "First Strong" if counts are zero (e.g. only emojis)
  if (rtlCount === 0 && ltrCount === 0) {
    const firstStrong = text.match(/[\u0590-\u08FF]|[A-Za-z]/);
    if (firstStrong && firstStrong[0] >= '\u0590') return 'rtl';
    return 'ltr';
  }

  // 4. Return the dominant direction
  return rtlCount > ltrCount ? 'rtl' : 'ltr';
}

export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}
