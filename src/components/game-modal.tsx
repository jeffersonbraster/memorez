import { useState } from "react";

type GameModalProps = {
  moves: number;
  time: string | number;
  onRestart: () => void;
  attemptHistory: string[];
};

const GameModal = ({
  moves,
  time,
  onRestart,
  attemptHistory,
}: GameModalProps) => {
  const [isCopied, setIsCopied] = useState(false);

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

    const shareText = `Parabéns! 🎉

Joguei em ${date} e consegui em ${moves} tentativas e ${time}!

${formattedHistory}

👉 Jogue você também: https://memorez.jeffersonbrandao.com.br`;

    try {
      await navigator.clipboard.writeText(shareText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Erro ao copiar texto:", error);
    }
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
