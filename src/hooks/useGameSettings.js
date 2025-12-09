import { useSelector } from "react-redux";

export function useGameSettings() {
  const difficulty = useSelector(state => state.gameSettings.difficulty);
  const settingsByDifficulty = useSelector(state => state.gameSettings.settingsByDifficulty);

  const settings = { difficulty, ...settingsByDifficulty[difficulty] };
  
  const allColors = ["red","green","blue","yellow","purple","orange","pink","cyan","celadon"];
  const colors = allColors.slice(0, settings.colorsCount);

  return { settings, colors };
}
