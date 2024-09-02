import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RiderLandingPage.css'; // Import the CSS file

const RiderLandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <h1>Rider Login</h1>
      <form className="login-form">
        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button type="submit" className="custom-button">Login</button>
        <button type="button" className="custom-button" onClick={() => navigate('/create-account')}>
          Create Account
        </button>
      </form>
    </div>
  );
};

export default RiderLandingPage;