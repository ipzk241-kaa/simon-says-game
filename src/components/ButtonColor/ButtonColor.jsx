import "./ButtonColor.css";

/**
 * `ButtonColor` is a component that renders a colored button on the game board.
 *
 * Responsibilities:
 * - Rendering a button with a specific color
 * - Highlighting the button when it is active
 * - Triggering a callback when the button is clicked
 * @component
 * @exports ButtonColor
 *
 * @param {string} props.color - The button color (must match a CSS class name).
 * @param {boolean} props.isActive - Indicates whether the button is currently highlighted.
 * @param {function} props.onClick - Function called when the button is clicked.
 *
 * @returns {JSX.Element}
 *
 * @example
 * <ButtonColor
 *   color="red"
 *   isActive={true}
 *   onClick={() => console.log("Clicked")}
 * />
 */
export default function ButtonColor({ color, isActive, onClick }) {
  return (
    <button
      className={`button-color ${color} ${isActive ? "active" : ""}`}
      onClick={onClick}
    />
  );
}
