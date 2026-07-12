const WORDS_PER_MINUTE = 200;

export function getReadingTime(body?: string): number {
  if (!body) {
    return 1;
  }

  const wordCount = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
}
