import { useState } from "react";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import ResultPage from "./pages/ResultPage";

function App() {
  const [page, setPage] = useState("start");
  const [score, setScore] = useState(0);

  return (
    <>
      {page === "start" && <StartPage onStart={() => setPage("game")} />}
      {page === "game" && (
        <GamePage onGameOver={(lvl) => { setScore(lvl); setPage("result"); }} />
      )}
      {page === "result" && (
        <ResultPage score={score} onRestart={() => setPage("start")} />
      )}
    </>
  );
}

export default App;
