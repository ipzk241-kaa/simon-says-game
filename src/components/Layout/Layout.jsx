 /**
 * `Layout` is a simple container component used to wrap page content.
 *
 * Responsibilities:
 * - Wrapping child elements
 * - Applying base styling using the `layout` CSS class
 *
 * @component
 * @exports Layout
 *
 * @param {React.ReactNode} props.children - Child elements rendered inside the Layout.
 *
 * @returns {JSX.Element}
 *
 * @example
 * <Layout>
 *   <p>Content inside the Layout</p>
 * </Layout>
 */
export default function Layout({ children }) {
  return <div className="layout">{children}</div>;
}
