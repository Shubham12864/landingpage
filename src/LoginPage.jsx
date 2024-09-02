import React, { useState } from 'react';
import './LoginPage.css'; // Import the CSS file

const countryCodes = [
  { code: '+1', country: 'USA' },
  { code: '+44', country: 'UK' },
  { code: '+91', country: 'India' },
  // Add more country codes as needed
];

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [countryCode, setCountryCode] = useState(countryCodes[0].code);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');

  const handleCreateAccount = () => {
    // Handle create account logic here
    console.log('Account created');
  };

  return (
    <div className="login-container">
      <h2>Create Account</h2>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Contact Number</label>
        <div className="contact-input">
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
          >
            {countryCodes.map((code) => (
              <option key={code.code} value={code.code}>
                {code.country} ({code.code})
              </option>
            ))}
          </select>
          <input
            type="text"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
          <button className="verify-button">Verify</button>
        </div>
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="verify-button">Verify</button>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Re-enter Password</label>
        <input
          type="password"
          value={reEnterPassword}
          onChange={(e) => setReEnterPassword(e.target.value)}
        />
      </div>
      <button className="create-account-button" onClick={handleCreateAccount}>
        Create Account
      </button>
    </div>
  );
};

export default LoginPage;