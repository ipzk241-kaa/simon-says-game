/**
 * `Header` is a component that renders the page or game title.
 *
 * Responsibilities:
 * - Displaying the game or page title
 * - Applying base styling using the `header` CSS class
 *
 * @component
 * @exports Header
 *
 * @param {string} props.title - The title text to display.
 *
 * @returns {JSX.Element}
 *
 * @example
 * <Header title="Simon Says" />
 */
export default function Header({ title }) {
  return <h1 className="header">{title}</h1>;
}
