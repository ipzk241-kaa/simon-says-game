import { useState, useEffect } from "react";

export function useSimonGame() {
  const colors = ["red", "green", "blue", "yellow"];

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
    setSequence((prev) => [...prev, nextColor]);
    setPlayerInput([]);
  };

  useEffect(() => {
    if (isPlaying && sequence.length === 0 && level === 1) {
      nextRound();
    }
  }, [isPlaying, level]);

  useEffect(() => {
    if (sequence.length > 0) {
      setIsAnimating(true);
      let i = 0;
      const interval = setInterval(() => {
        setActiveColor(sequence[i]);
        setTimeout(() => setActiveColor(null), 400);
        i++;
        if (i >= sequence.length) {
          clearInterval(interval);
          setTimeout(() => setIsAnimating(false), 600);
        }
      }, 800);
    }
  }, [sequence]);

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
        setLevel((prev) => prev + 1);
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
