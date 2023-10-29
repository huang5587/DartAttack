
//import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>
      Weclome to Dart Attack
    </h1>
    <Link to="/score-page">Go to New Page</Link>
  </div>
);
const ScorePage = () => (
  <div>
    <h1>Scoring</h1>
    <Link to="/">Go back to Home</Link>
  </div>
);


function App() {

  return (
    <>

    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/score-page" Component={ScorePage} />
      </Routes>
    </Router>
    </>
  )
}

export default App
