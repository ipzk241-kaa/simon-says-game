import ReactDOM from "react-dom";
import "./GameOverModal.css";
import { useSelector, useDispatch } from "react-redux";
import { addScore } from "../../store/leaderboardSlice";
import { useEffect } from "react";

export default function GameOverModal({ isOpen, onRestart, score }) {
  const { userId, nickname } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen && userId) {
      dispatch(addScore({
        id: userId,
        nickname: nickname || "Anonymous",
        level: score,
        ts: Date.now()
      }));
    }
  }, [isOpen, userId, nickname, score, dispatch]);


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
