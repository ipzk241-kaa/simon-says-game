import { useGameSettings } from "./useGameSettings";
import { useGameLogic } from "./useGameLogic";

export function useSimonGame() {
  const { settings, colors } = useGameSettings();
  const gameLogic = useGameLogic(colors, settings.speed);

  return {
    ...gameLogic,
    colors,
    settings
  };
}
