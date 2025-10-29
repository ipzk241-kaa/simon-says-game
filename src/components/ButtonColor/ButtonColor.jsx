import "./ButtonColor.css";

export default function ButtonColor({ color, isActive, onClick }) {
  return (
    <button
      className={`button-color ${color} ${isActive ? "active" : ""}`}
      onClick={onClick}
    />
  );
}
