import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

const HomePage = () => {
  const [players, setPlayers] = useState(2); // Default to 2 players
  const [gameType, setGameType] = useState('501'); // Default game type
  const [numLegs, setNumLegs] = useState(1); // Default to 1 leg

  const handleSubmit = () => {
    // You can save the selected options to your state here
    // For example, you can store them in a context or a global state management solution
  };

  return (
    <div>
      <h1>Welcome to Dart Attack</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Number of Players:
          <input
            type="number"
            value={players}
            onChange={(e) => setPlayers(e.target.value)}
          />
        </label>
        <br />

        <label>
          Game Type:
          <select value={gameType} onChange={(e) => setGameType(e.target.value)}>
            <option value="301">301</option>
            <option value="501">501</option>
            {/* Add other game types here */}
          </select>
        </label>
        <br />

        <label>
          Number of Legs:
          <input
            type="number"
            value={numLegs}
            onChange={(e) => setNumLegs(e.target.value)}
          />
        </label>
        <br />

        <Link to="/score-page">Start Game</Link>
      </form>
    </div>
  );
};

const ScorePage = () => (
  <div>
    <h1>Scoring</h1>
    <Link to="/">Go back to Home</Link>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/score-page" element={<ScorePage />} />
      </Routes>
    </Router>
  );
}

export default App;
