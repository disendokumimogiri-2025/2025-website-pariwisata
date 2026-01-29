export function ReduceChar(words: string, lenTarget: number = 25): string {
  if (words.length > lenTarget) {
    return words.slice(0, 20) + "...";
  }
  return words;
}
