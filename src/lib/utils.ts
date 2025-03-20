import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistance, subMinutes } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function randomDateDistanceFormat() {
  return formatDistance(
    subMinutes(new Date(), Math.floor(Math.random() * 30) + 1),
    new Date(),
    {
      addSuffix: true,
    }
  );
}

export function arrayChunk<T>(array: T[], size: number) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size);
    chunks.push(chunk);
  }

  return chunks;
}
