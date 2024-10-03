import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Add CSS styles
import logo from '../assets/logo.gif';  // Keep the existing logo
import ball from '../assets/ball.gif';  // Keep the existing ball animation
import bImage from '../assets/b.png';   // Import the new image b.png

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState(null);  // Initially, no category is selected
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (userType === 'student') {
      navigate('/student');
    } else {
      navigate('/teacher');
    }
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <div className="image-container">
          <img src={bImage} alt="bImage" className="b-image" />
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <img src={ball} alt="Ball" className="ball" />
      </div>
      <div className="right-section">
        <form className="login-box" onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="user-type-container">
            <label className="user-type-label">Select Your Category:</label>
            <div className="user-type">
              <button
                type="button"
                className={`user-button ${userType === 'student' ? 'active' : ''}`}
                onClick={() => setUserType('student')}
              >
                Student
              </button>
              <button
                type="button"
                className={`user-button ${userType === 'teacher' ? 'active' : ''}`}
                onClick={() => setUserType('teacher')}
              >
                Teacher
              </button>
            </div>
          </div>
          <button type="submit" disabled={!userType}>Login</button>
          <p className="forgot-password">
            <a href="#">Forgot password?</a>
          </p>
          <p className="signup-link">
            Don't have an account? <a href="/signup">Create Account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
