import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'; // Import the CSS file
import RiderLandingPage from './RiderLandingPage';
import LoginPage from './LoginPage'; // Import the LoginPage component
import PilotLandingPage from './PilotLandingPage'; // Import the PilotLandingPage component

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="button-container">
        <button className="button" onClick={() => navigate('/rider')}>
          <span className="icon" role="img" aria-label="person">🧍</span>
          RIDER
        </button>
        <button className="button" onClick={() => navigate('/pilot')}>
          <span className="icon" role="img" aria-label="car">🚗</span>
          PILOT
        </button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rider" element={<RiderLandingPage />} />
        <Route path="/create-account" element={<LoginPage />} />
        <Route path="/pilot" element={<PilotLandingPage />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
};

export default App;