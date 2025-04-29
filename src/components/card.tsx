import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Difficulty } from "@/types";
import { DIFFICULTIES_COLORS } from "@/constants";

const CARD_STYLES = {
  base: "absolute flex h-full w-full items-center justify-center rounded-xl border-2 backface-hidden",
  back: "border-white/20",
  front:
    "rotate-y-180 text-2xl xs:text-3xl sm:text-4xl border-purple-200 bg-white",
};

type CardProps = {
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
  difficulty: Difficulty;
};

const Card = ({
  emoji,
  isFlipped,
  isMatched,
  onClick,
  difficulty,
}: CardProps) => {
  return (
    <div
      className="xs:size-20 relative size-16 cursor-pointer sm:size-24"
      onClick={onClick}
    >
      {/* div do 3D */}
      <div
        className={cn(
          "preserve-3d h-full w-full transition-transform duration-500",
          isFlipped && "rotate-y-180",
        )}
      >
        {/* card back */}
        <div
          className={cn(
            CARD_STYLES.base,
            CARD_STYLES.back,
            DIFFICULTIES_COLORS[difficulty],
          )}
        >
          <Sparkles className="size-6 animate-pulse text-white sm:size-8" />
        </div>

        {/* card front */}
        <div
          className={cn(
            CARD_STYLES.base,
            CARD_STYLES.front,
            isMatched && "bg-green-100/90",
          )}
        >
          {emoji}
        </div>
      </div>
    </div>
  );
};

export default Card;
