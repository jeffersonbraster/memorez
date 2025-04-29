import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Clock, LucideIcon, MousePointerClick, RotateCcw } from "lucide-react";
import { ANIMATIONS } from "@/constants";

type ScoreBoardsProps = {
  time: string;
  moves: number;
  onRestart: () => void;
};

type ScoreItemProps = {
  icon: LucideIcon;
  label: string;
  color: string;
  value: number | string;
};

const SCORE_ITEMS = [
  {
    icon: MousePointerClick,
    label: "Moves",
    color: "text-yellow-400",
  },
  {
    icon: Clock,
    label: "Time",
    color: "text-blue-400",
  },
] as const;

const ScoreItem = ({ icon: Icon, label, color, value }: ScoreItemProps) => {
  return (
    <div className="flex w-[130px] items-center justify-center gap-2 text-lg text-white">
      <Icon className={cn("size-6", color)} />
      {label}:<span className="min-w-[16px]">{value}</span>
    </div>
  );
};

const ScoreBoards = ({ time, moves, onRestart }: ScoreBoardsProps) => {
  return (
    <motion.div
      {...ANIMATIONS.fadeInDown}
      className="flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-blue-100 p-4 sm:w-auto sm:flex-row sm:gap-8"
    >
      {SCORE_ITEMS.map(({ icon, label, color }) => (
        <ScoreItem
          key={label}
          icon={icon}
          label={label}
          color={color}
          value={label === "Time" ? time : moves}
        />
      ))}

      <button
        onClick={onRestart}
        className="group flex items-center gap-2 px-2 text-base text-white hover:text-pink"
      >
        <RotateCcw className="size-4 transition-transform duration-500 group-hover:-rotate-180 sm:size-5" />
        Reiniciar
      </button>
    </motion.div>
  );
};

export default ScoreBoards;
