import ReactDOM from "react-dom";
import "./GameOverModal.css";
import { addScore } from "./leaderboard";
import { useUser } from "../../context/UserContext";
import { useEffect } from "react";

export default function GameOverModal({ isOpen, onRestart, score }) {
  const { userId, nickname } = useUser();

  useEffect(() => {
    if (isOpen && userId) {
      addScore({ id: userId, nickname: nickname || "Anonymous", level: score, ts: Date.now() });
    }
  }, [isOpen, userId, nickname, score]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>🎮 Гру завершено</h2>
        <p>Ваш результат: {score}</p>
        <div className="modal-buttons">
          <button onClick={onRestart}>🔁 Почати знову</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
