export type Card = {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export type Difficulty = "easy" | "medium" | "hard";