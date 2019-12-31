import React, { useState } from "react";
import { InputForm } from "./Components/InputForm";
import { OutputLeaderboard } from "./Components/OutputLeaderboard";
function App() {
  const [leaderboard, setLeaderboard] = useState([]);
  const createLeaderboardArray = eachEntry => {
    setLeaderboard([...leaderboard, eachEntry]);
  };

  return (
    <div className="container mt-4">
      <InputForm createLeaderboardArray={createLeaderboardArray} />
      <OutputLeaderboard leaderboard={leaderboard} />
    </div>
  );
}
export default App;
