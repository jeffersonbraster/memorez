import { motion } from "motion/react";
import { Brain, Sparkles, Zap } from "lucide-react";
import { ANIMATIONS, EASY, HARD, MEDIUM } from "@/constants";
import { Difficulty } from "@/types";

const DIFFICULTIES = [
  {
    type: EASY,
    label: "Fácil",
    icon: Sparkles,
    color: "from-green-400 to-emerald-500",
  },
  {
    type: MEDIUM,
    label: "Médio",
    icon: Brain,
    color: "from-blue-400 to-indigo-500",
  },
  {
    type: HARD,
    label: "Difícil",
    icon: Zap,
    color: "from-purple-400 to-purple-700",
  },
] as const;

type DifficultySelectorProps = {
  onSelect: (difficulty: Difficulty) => void;
};

const DifficultySelector = ({ onSelect }: DifficultySelectorProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-blue-200 sm:gap-8 sm:p-8">
      <motion.div
        {...ANIMATIONS.fadeInUp}
        className="flex w-full flex-col gap-6"
      >
        <h2 className="mb-2 text-center text-2xl font-bold text-white sm:mb-4 sm:text-3xl">
          Selecione a dificuldade
        </h2>

        <div className="flex w-full flex-col justify-center gap-4 p-2 sm:flex-row">
          {DIFFICULTIES.map(({ label, icon: Icon, color, type }) => (
            <button
              key={label}
              onClick={() => onSelect(type)}
              className={`${color} h-20 w-full rounded-xl bg-gradient-to-b sm:size-32`}
            >
              <div className="flex items-center justify-center gap-2 sm:flex-col">
                <Icon className="size-6 sm:size-8" />
                <span className="text-base font-medium sm:text-lg">
                  {label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DifficultySelector;
