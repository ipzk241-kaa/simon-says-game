import { Routes, Route, Navigate } from "react-router-dom";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/start" replace />} />
      <Route path="/start" element={<StartPage />} />
      <Route path="/user/:userId/game" element={<GamePage />} />
      <Route path="*" element={<Navigate to="/start" replace />} />
    </Routes>
  );
}

export default App;
