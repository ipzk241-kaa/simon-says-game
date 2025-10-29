import Header from "../components/Header/Header";
import ButtonColor from "../components/ButtonColor/ButtonColor";
import { useSimonGame } from "../hooks/useSimonGame";

export default function GamePage() {
  const {
    level,
    activeColor,
    isGameOver,
    startGame,
    handlePlayerClick,
  } = useSimonGame();

  return (
    <main className="game-container">
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

      {isGameOver ? (
        <button onClick={startGame} className="restart-btn">
          Почати знову
        </button>
      ) : (
        level === 0 && (
          <button onClick={startGame} className="start-btn">
            Почати гру
          </button>
        )
      )}
    </main>
  );
}
