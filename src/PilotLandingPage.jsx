import React, { useState } from 'react';
import './PilotLandingPage.css';

const FormField = ({ label, id, type = 'text', placeholder }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <input type={type} id={id} placeholder={placeholder} />
  </div>
);

function PilotLandingPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="pilot-container">
      <h2>Pilot Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Personal Details</h3>
          <FormField label="First Name" id="firstName" placeholder="Enter your first name" />
          <FormField label="Last Name" id="lastName" placeholder="Enter your last name" />
          <FormField label="Email" id="email" type="email" placeholder="Enter your email" />
          <FormField label="Phone Number" id="phoneNumber" placeholder="Enter your phone number" />
          <FormField label="Address" id="address" placeholder="Enter your address" />
          <button className="verify-button">Verify Details</button>
        </div>

        <div className="form-section">
          <h3>Vehicle Details</h3>
          <FormField label="Vehicle Make" id="vehicleMake" placeholder="Enter vehicle make" />
          <FormField label="Vehicle Model" id="vehicleModel" placeholder="Enter vehicle model" />
          <FormField label="Year of Manufacture" id="yearOfManufacture" type="date" />
          <FormField label="Vehicle Registration Number" id="vehicleRegistrationNumber" placeholder="Enter vehicle registration number" />
          <FormField label="Vehicle Insurance Details" id="vehicleInsuranceDetails" placeholder="Enter vehicle insurance details" />
          <FormField label="Vehicle Color" id="vehicleColor" placeholder="Enter vehicle color" />
          <FormField label="Vehicle Type" id="vehicleType" placeholder="Enter vehicle type" />
          <FormField label="Vehicle Identification Number (VIN)" id="vehicleIdentificationNumber" placeholder="Enter VIN" />
        </div>

        <button type="submit" className="create-account-button" disabled={isLoading}>
          {isLoading ? 'Creating Account...' : 'Create Account'}
        </button>
      </form>
      <div className="login-link">
        Already have an account? <span>Log in</span>
      </div>
    </div>
  );
}

export default PilotLandingPage;