import ReactDOM from "react-dom";
import "./GameOverModal.css";

export default function GameOverModal({ isOpen, onRestart, score }) {
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
