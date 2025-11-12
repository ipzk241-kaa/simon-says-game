import React, { createContext, useState, useContext, useEffect } from "react";

const GameSettingsContext = createContext();
export const useGameSettings = () => useContext(GameSettingsContext);

export const GameSettingsProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState(
    localStorage.getItem("simon-difficulty") || "medium"
  );

  useEffect(() => {
    localStorage.setItem("simon-difficulty", difficulty);
  }, [difficulty]);

  const settingsByDifficulty = {
    easy: { speed: 1000, colorsCount: 4 },
    medium: { speed: 700, colorsCount: 6 },
    hard: { speed: 450, colorsCount: 9 },
  };

  const settings = { difficulty, ...settingsByDifficulty[difficulty] };

  return (
    <GameSettingsContext.Provider value={{ difficulty, setDifficulty, settings }}>
      {children}
    </GameSettingsContext.Provider>
  );
};
