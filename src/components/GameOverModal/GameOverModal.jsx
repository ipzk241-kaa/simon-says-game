import ReactDOM from "react-dom";
import "./GameOverModal.css";
import { useSelector, useDispatch } from "react-redux";
import { addScore } from "../../store/leaderboardSlice";
import { useEffect } from "react";

/**
 * `GameOverModal` is a modal window displayed after the game ends.
 *
 * Responsibilities:
 * - Displaying the player's final score
 * - Adding the result to the leaderboard in the Redux store
 * - Restarting the game via a button
 *
 * @component
 * @exports GameOverModal
 *
 * @param {boolean} props.isOpen - Indicates whether the modal is open.
 * @param {function} props.onRestart - Callback triggered to restart the game.
 * @param {number} props.score - The player's score (number of completed levels).
 *
 * @returns {JSX.Element}
 *
 * @example
 * <GameOverModal
 *   isOpen={true}
 *   score={5}
 *   onRestart={() => startGame()}
 * />
 */
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
