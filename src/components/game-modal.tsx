import { useState } from "react";
import { Difficulty } from "@/types";

type GameModalProps = {
  moves: number;
  time: string | number;
  onRestart: () => void;
  attemptHistory: string[];
  difficulty: Difficulty;
};

const GameModal = ({
  moves,
  time,
  onRestart,
  attemptHistory,
  difficulty,
}: GameModalProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const getDifficultyText = (difficulty: Difficulty) => {
    switch (difficulty) {
      case "easy":
        return "Fácil";
      case "medium":
        return "Médio";
      case "hard":
        return "Difícil";
      default:
        return "";
    }
  };

  const handleShare = async () => {
    const date = new Date().toLocaleDateString("pt-BR");

    const formattedHistory = attemptHistory
      .reduce(
        (acc, curr, i) => {
          if (i % 10 === 0) acc.push("");
          acc[acc.length - 1] += curr;
          return acc;
        },
        [""] as string[],
      )
      .join("\n");

    const shareText = `🎮 MemoreZ - Jogo da Memória ��

Joguei em ${date} no nível ${getDifficultyText(difficulty)} e consegui em ${moves} tentativas e ${time}!

${formattedHistory}

👉 Jogue você também: https://memorez.jefferson.brandao.com.br`;

    try {
      await navigator.clipboard.writeText(shareText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Erro ao copiar texto:", error);
    }
  };

  const handleTwitterShare = () => {
    const date = new Date().toLocaleDateString("pt-BR");

    // Formatar o histórico para o Twitter (mais conciso)
    const twitterHistory = attemptHistory.join("");

    const text = `🎮 Joguei MemoreZ em ${date} no nível ${getDifficultyText(difficulty)} e consegui em ${moves} tentativas e ${time}!

${twitterHistory}

Jogue você também:`;
    const url = "https://memorez.jeffersonbrandao.com.br";
    const hashtags = "MemoreZ,JogoDaMemoria";

    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&hashtags=${hashtags}`;
    window.open(twitterUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="max-w-sm rounded-xl bg-white p-6 text-center sm:p-8">
        <h2 className="mb-4 text-2xl font-bold sm:text-4xl">
          🎉 Muito bem! 🎉
        </h2>
        <p className="mb-6 text-lg">
          Você completou o game em <br />
          <b>{moves} movimentos</b> e com o tempo de <b>{time}</b>!
        </p>
        <div className="flex flex-col gap-3">
          <button
            onClick={onRestart}
            className="rounded-lg bg-pink px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
          >
            Jogar novamente
          </button>
          <button
            onClick={handleTwitterShare}
            className="rounded-lg bg-[#1DA1F2] px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
          >
            Compartilhar no Twitter
          </button>
          <button
            onClick={handleShare}
            className={`rounded-lg px-6 py-3 font-medium text-white transition-all duration-300 ${
              isCopied
                ? "scale-105 bg-green-500"
                : "bg-blue-500 hover:opacity-90"
            }`}
          >
            {isCopied ? "✓ Copiado!" : "Copiar resultado"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameModal;
