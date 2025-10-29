import Header from "../components/Header/Header";

export default function StartPage({ onStart }) {
  return (
    <div className="start-page">
      <Header title="Саймон каже" />
      <button onClick={onStart}>Почати гру</button>
    </div>
  );
}
