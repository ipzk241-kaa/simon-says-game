import { useGameSettings } from "./useGameSettings";
import { useGameLogic } from "./useGameLogic";
/**
 * Custom hook `useSimonGame` combines game settings and game logic for the "Simon Says" game.
 *
 * Uses:
 * - `useGameSettings` to get current game settings (difficulty, speed, colorsCount)
 * - `useGameLogic` to manage game state (sequence, levels, player clicks)
 *
 * @returns {Object} An object containing all game states and methods.
 * @property {number} level - Current game level.
 * @property {string|null} activeColor - Currently highlighted color.
 * @property {boolean} isGameOver - Whether the game has ended.
 * @property {function} startGame - Function to start the game.
 * @property {function} handlePlayerClick - Handler function for player clicks. Receives a color string.
 * @property {string[]} colors - Array of colors for the game.
 * @property {Object} settings - Current game settings (difficulty, speed, colorsCount).
 *
 * @example
 * const {
 *   level,
 *   activeColor,
 *   isGameOver,
 *   startGame,
 *   handlePlayerClick,
 *   colors,
 *   settings
 * } = useSimonGame();
 */

export function useSimonGame() {
  const { settings, colors } = useGameSettings();
  const gameLogic = useGameLogic(colors, settings.speed);

  return {
    ...gameLogic,
    colors,
    settings
  };
}
