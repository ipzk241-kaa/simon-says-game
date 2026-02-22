import CookieConsent from "react-cookie-consent";
import "./CookieBanner.css";

/**
 * `CookieBanner` is a component that displays a cookie consent banner.
 *
 * Responsibilities:
 * - Displaying a banner with "Accept" and "Decline" buttons
 * - Saving the user's choice in a cookie (`simonGameConsent`)
 * - Demonstrating GDPR compliance / fulfilling laboratory assignment requirements
 * @component
 * @exports CookieBanner
 * @see https://gdpr.eu/cookies/
 * @returns {JSX.Element}
 *
 * @example
 * <CookieBanner />
 */
export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Прийняти"
      declineButtonText="Відхилити"
      enableDeclineButton
      cookieName="simonGameConsent"
      className="cookie-banner"
      buttonClasses="accept-button"
      declineButtonClasses="decline-button"
      expires={365}
    >
      Цей сайт використовує cookies для покращення роботи гри «Саймон каже».
    </CookieConsent>
  );
}