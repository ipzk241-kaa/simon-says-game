import Header from "../components/Header/Header";
import ButtonColor from "../components/ButtonColor/ButtonColor";
import { useSimonGame } from "../hooks/useSimonGame";

export default function GamePage() {
  const {
    level,
    activeColor,
    isGameOver,
    handlePlayerClick,
    startGame,
  } = useSimonGame();

  return (
    <div className="game-page">
      <Header title={isGameOver ? "Гру завершено" : `Рівень ${level}`} />

      <div className="game-board">
        {["red", "green", "blue", "yellow"].map((color) => (
          <ButtonColor
            key={color}
            color={color}
            isActive={activeColor === color}
            onClick={() => handlePlayerClick(color)}
          />
        ))}
      </div>

      {isGameOver && (
        <button onClick={startGame} className="restart-btn">
          Почати знову
        </button>
      )}
    </div>
  );
}
