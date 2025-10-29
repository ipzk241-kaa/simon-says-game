import { useState } from "react";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import ResultPage from "./pages/ResultPage";

function App() {
  const [page, setPage] = useState("start");

  return (
    <>
      {page === "start" && <StartPage />}
      {page === "game" && <GamePage />}
      {page === "result" && <ResultPage />}
    </>
  );
}

export default App;
