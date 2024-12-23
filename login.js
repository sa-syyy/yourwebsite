
import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <div className="branding">
          <h1>InterestSphere</h1>
          <p>Connect. Predict. Engage.</p>
        </div>
        <div className="tagline">
          <h2>Discover Communities.</h2>
          <p>Expand your network based on shared interests.</p>
        </div>
      </div>
      <div className="login-right">
        <div className="login-box">
          <h2>Welcome to InterestSphere.</h2>
          <p>Log in or sign up to access your account.</p>
          <div className="login-input-group">
            <span className="country-code">🌐</span>
            <input
              type="text"
              placeholder="Enter your email or phone number"
              className="login-input"
            />
          </div>
          <button className="login-button">Continue</button>
          <p className="login-note">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
          <div className="login-divider">OR CONNECT WITH</div>
          <div className="login-social-buttons">
            <button className="social-button google-button">Google</button>
            <button className="social-button linkedin-button">LinkedIn</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
