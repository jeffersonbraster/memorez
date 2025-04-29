export const EASY = "easy";
export const MEDIUM = "medium";
export const HARD = "hard";

export const EMOJIS = [
  "🐶", "🐱", "🐭", "🐹", "🐰", "🐻",
  "🐼", "🐨", "🐯", "🦁", "🐮", "🐷",
  "🐸", "🐵", "🐔", "🐧", "🐦", "🦆",
  "🦉", "🦊", "🦋", "🐢", "🐍", "🦄"
] as const;

export const PAIR_COUNTS = {
  [EASY]: 6,
  [MEDIUM]: 10,
  [HARD]: 15,
} as const;

export const DIFFICULTIES_COLORS = {
  [EASY]: "bg-green-500",
  [MEDIUM]: "bg-blue-500",
  [HARD]: "bg-purple-500",
} as const;

export const ANIMATIONS = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
  },
} as const;
