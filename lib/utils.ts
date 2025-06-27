import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTimeElapsed(startDate: Date, endDate?: Date): string {
  const now = endDate || new Date();
  const start = new Date(startDate);

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  // Adjust for negative months
  if (months < 0) {
    years--;
    months += 12;
  }

  // Adjust if current day is before start day in the month
  if (now.getDate() < start.getDate()) {
    months--;
    if (months < 0) {
      years--;
      months += 12;
    }
  }

  const yearText = years === 1 ? "year" : "years";
  const monthText = months === 1 ? "month" : "months";

  if (years === 0) {
    return `${months} ${monthText}`;
  } else if (months === 0) {
    return `${years} ${yearText}`;
  } else {
    return `${years} ${yearText} ${months} ${monthText}`;
  }
}
