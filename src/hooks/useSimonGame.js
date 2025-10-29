import { useState, useEffect } from "react";

export function useSimonGame() {
  const colors = ["red", "green", "blue", "yellow"];

  const [sequence, setSequence] = useState([]);
  const [playerInput, setPlayerInput] = useState([]);
  const [level, setLevel] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [activeColor, setActiveColor] = useState(null);

  const startGame = () => {
    setLevel(1);
    setSequence([]);
    setPlayerInput([]);
    setIsPlaying(true);
    setIsGameOver(false);
  };

  const nextRound = () => {
    const nextColor = colors[Math.floor(Math.random() * colors.length)];
    setSequence((prev) => [...prev, nextColor]);
    setPlayerInput([]);
  };

  useEffect(() => {
    if (isPlaying && sequence.length > 0) {
      let i = 0;
      const interval = setInterval(() => {
        setActiveColor(sequence[i]);
        setTimeout(() => setActiveColor(null), 500);
        i++;
        if (i >= sequence.length) clearInterval(interval);
      }, 800);
    }
  }, [sequence, isPlaying]);

  const handlePlayerClick = (color) => {
    if (!isPlaying) return;

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

  useEffect(() => {
    if (level === 1) nextRound();
  }, [level]);

  return {
    level,
    sequence,
    playerInput,
    activeColor,
    isPlaying,
    isGameOver,
    startGame,
    handlePlayerClick,
  };
}
