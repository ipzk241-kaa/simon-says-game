import Header from "../components/Header/Header";
import ButtonColor from "../components/ButtonColor/ButtonColor";
import { useSimonGame } from "../hooks/useSimonGame";
import GameOverModal from "../components/GameOverModal/GameOverModal";
import SettingsModal from "../components/SettingsModal/SettingsModal";
import { useGameSettings } from "../context/GameSettingsContext";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useEffect } from "react";

export default function GamePage() {
  const { userId: urlId } = useParams();
  const { userId, ensureUserId } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!urlId) {
      const id = ensureUserId();
      navigate(`/user/${id}/game`, { replace: true });
    }
  }, [urlId, ensureUserId, navigate]);

  const {
    level,
    activeColor,
    isGameOver,
    startGame,
    handlePlayerClick,
    colors,
  } = useSimonGame();

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { settings } = useGameSettings();

  return (
    <main className="game-container">
      <Header
        title={
          isGameOver
            ? "❌ Гру завершено"
            : level === 0
            ? "Simon Says"
            : `Рівень ${level}`
        }
      />

      <p className="difficulty-label">
        Поточна складність: <strong>{settings.difficulty}</strong>
      </p>

      <div
        className="game-board"
        style={{
          gridTemplateColumns: `repeat(${Math.ceil(
            Math.sqrt(colors.length)
          )}, 1fr)`,
        }}
      >
        {colors.map((color) => (
          <ButtonColor
            key={color}
            color={color}
            isActive={activeColor === color}
            onClick={() => handlePlayerClick(color)}
          />
        ))}
      </div>

      <div className="controls" style={{marginTop:24}}>
        {level === 0 && !isGameOver && (
          <button onClick={startGame} className="start-btn">
            ▶️ Почати гру
          </button>
        )}

        <button
          className="settings-btn"
          onClick={() => setIsSettingsOpen(true)}
        >
          ⚙️ Налаштування
        </button>

        <button className="back-btn"
          onClick={() => navigate("/start")}
        >
          Повернутись на старт
        </button>
      </div>

      <GameOverModal
        isOpen={isGameOver}
        score={level - 1}
        onRestart={startGame}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </main>
  );
}
