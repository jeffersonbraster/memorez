import { useState } from "react";
import DifficultySelector from "./components/difficulty-selector";
import GameBoard from "./components/game-board";
import GameModal from "./components/game-modal";
import ScoreBoards from "./components/score-boards";
import { useMemoryGame } from "./hooks/use-memory-game";
import { formatTime } from "./lib/format-time";
import { Difficulty } from "./types";
import { EASY } from "./constants";
import Footer from "./components/footer";

function App() {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);

  const {
    cards,
    handleCardClick,
    moves,
    time,
    gameCompleted,
    resetGame,
    attemptHistory,
  } = useMemoryGame(difficulty || EASY);

  const formattedTime = formatTime(time);

  if (!difficulty) return <DifficultySelector onSelect={setDifficulty} />;

  const handleRestart = () => {
    setDifficulty(null);
    resetGame();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-blue-200 sm:gap-8 sm:p-8">
      <h1 className="text-3xl font-bold text-white">
        Memore<strong className="text-4xl text-pink">Z</strong>
      </h1>

      <ScoreBoards
        time={formattedTime}
        moves={moves}
        onRestart={handleRestart}
      />

      <GameBoard
        cards={cards}
        difficulty={difficulty}
        onCardClick={handleCardClick}
      />

      {gameCompleted && (
        <GameModal
          moves={moves}
          time={formattedTime}
          onRestart={handleRestart}
          attemptHistory={attemptHistory}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
