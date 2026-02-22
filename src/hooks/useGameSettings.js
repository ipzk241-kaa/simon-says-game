import { useSelector } from "react-redux";
/**
 * Custom hook `useGameSettings` retrieves the current game settings from the Redux store.
 *
 * Responsibilities:
 * - Getting the current difficulty level
 * - Retrieving game parameters for the selected difficulty
 * - Selecting the set of colors for the game based on `colorsCount`
 *
 * @returns {Object} An object containing the game settings and color array.
 * @property {Object} settings - Game settings for the current difficulty level.
 * @property {string[]} colors - Array of colors for the game according to the settings.
 *
 * @example
 * const { settings, colors } = useGameSettings();
 * console.log(settings.difficulty); // e.g., "medium"
 * console.log(colors); // e.g., ["red", "green", "blue", "yellow"]
 */

export function useGameSettings() {
  const difficulty = useSelector(state => state.gameSettings.difficulty);
  const settingsByDifficulty = useSelector(state => state.gameSettings.settingsByDifficulty);

  const settings = { difficulty, ...settingsByDifficulty[difficulty] };
  
  const allColors = ["red","green","blue","yellow","purple","orange","pink","cyan","celadon"];
  const colors = allColors.slice(0, settings.colorsCount);

  return { settings, colors };
}
