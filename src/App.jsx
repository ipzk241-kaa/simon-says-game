import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/start" replace />} />
      <Route path="/start" element={<StartPage />} />
      <Route path="/user/:userId/game" element={<GamePage />} />
      <Route path="/user/:userId/result" element={<ResultPage />} />
      <Route path="*" element={<Navigate to="/start" replace />} />
    </Routes>
  );
}

export default App;
