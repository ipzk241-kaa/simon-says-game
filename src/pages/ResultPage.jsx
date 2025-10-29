import Header from "../components/Header/Header";

export default function ResultPage({ score, onRestart }) {
  return (
    <div className="result-page">
      <Header title="Результат гри" />
      <p>Ваш рівень: {score}</p>
      <button onClick={onRestart}>Грати знову</button>
    </div>
  );
}
