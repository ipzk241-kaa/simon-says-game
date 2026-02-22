import { useState, useEffect } from "react";

/**
 * Custom hook `useGameLogic` implements the "Simon Says" game logic.
 *
 * Responsibilities:
 * - Storing the sequence of colors
 * - Handling rounds and levels
 * - Validating player clicks
 * - Animating color highlights
 *
 * @param {string[]} colors - Array of available colors for the game.
 * @param {number} speed - Animation speed for color highlights in milliseconds.
 *
 * @returns {Object} An object containing the game state and control methods.
 * @property {number} level - Current game level.
 * @property {string|null} activeColor - Currently highlighted color.
 * @property {boolean} isGameOver - Whether the game has ended.
 * @property {function} startGame - Function to start the game.
 * @property {function} handlePlayerClick - Handler function for player clicks. Receives a color string.
 *
 * @example
 * const { level, activeColor, isGameOver, startGame, handlePlayerClick } = useGameLogic(
 *   ["red", "green", "blue", "yellow"],
 *   800
 * );
 */

export function useGameLogic(colors, speed) {
  const [sequence, setSequence] = useState([]);
  const [playerInput, setPlayerInput] = useState([]);
  const [level, setLevel] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [activeColor, setActiveColor] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const startGame = () => {
    setLevel(1);
    setSequence([]);
    setPlayerInput([]);
    setIsGameOver(false);
    setIsPlaying(true);
  };

  const nextRound = () => {
    const nextColor = colors[Math.floor(Math.random() * colors.length)];
    setSequence(prev => [...prev, nextColor]);
    setPlayerInput([]);
  };

  useEffect(() => {
    if (isPlaying && sequence.length === 0 && level === 1) {
      nextRound();
    }
  }, [isPlaying, level]);

  useEffect(() => {
    if (sequence.length === 0) return;
    setIsAnimating(true);
    let i = 0;
    const interval = setInterval(() => {
      setActiveColor(sequence[i]);
      setTimeout(() => setActiveColor(null), speed / 2);
      i++;
      if (i >= sequence.length) {
        clearInterval(interval);
        setTimeout(() => setIsAnimating(false), speed);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [sequence, speed]);

  const handlePlayerClick = (color) => {
    if (!isPlaying || isAnimating) return;

    setActiveColor(color);
    setTimeout(() => setActiveColor(null), 300);

    const newInput = [...playerInput, color];
    setPlayerInput(newInput);

    if (sequence[newInput.length - 1] !== color) {
      setIsGameOver(true);
      setIsPlaying(false);
      return;
    }

    if (newInput.length === sequence.length) {
      setTimeout(() => {
        setLevel(prev => prev + 1);
        nextRound();
      }, 1000);
    }
  };

  return {
    level,
    activeColor,
    isGameOver,
    startGame,
    handlePlayerClick,
  };
}
