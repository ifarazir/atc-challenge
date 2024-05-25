import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function cttd(timestamp: string): Date {
  // Replace space with 'T' to make the string compatible with the Date constructor
  const formattedTimestamp = timestamp.replace(' ', 'T');
  return new Date(formattedTimestamp);
}

export const persianDateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false, // Use 24-hour format
  timeZone: 'Asia/Tehran' // Adjust as necessary for your use case
};
