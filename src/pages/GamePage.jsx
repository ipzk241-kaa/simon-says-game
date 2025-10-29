import Header from "../components/Header/Header";
import ButtonColor from "../components/ButtonColor/ButtonColor";

export default function GamePage() {
  return (
    <>
      <Header title="Рівень 1" />
      <div className="game-board">
        <ButtonColor color="red" />
        <ButtonColor color="green" />
        <ButtonColor color="blue" />
        <ButtonColor color="yellow" />
      </div>
    </>
  );
}
