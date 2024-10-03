import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoGif from '../assets/logo.gif'; // Import the logo
import './StudentPage.css';

const StudentPage = () => {
  const [activeButton, setActiveButton] = useState('Dashboard'); // State for active navbar button
  const navigate = useNavigate();

  const handleNavClick = (buttonName) => {
    setActiveButton(buttonName);
    // Add additional navigation logic here if needed
  };

  const handleLogout = () => {
    navigate('/'); // Navigate to login page on logout
  };

  return (
    <div className="student-page">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo-container">
          <span className="logo-text">AchieveUp</span>
          <img src={logoGif} alt="AchieveUp Logo" className="small-logo" />
        </div>
        <ul className="nav-links">
          <li
            className={`nav-item ${activeButton === 'Dashboard' ? 'active' : ''}`}
            onClick={() => handleNavClick('Dashboard')}
          >
            Dashboard
          </li>
          <li
            className={`nav-item ${activeButton === 'Portfolio' ? 'active' : ''}`}
            onClick={() => handleNavClick('Portfolio')}
          >
            Portfolio
          </li>
          <li
            className={`nav-item ${activeButton === 'Upload Project' ? 'active' : ''}`}
            onClick={() => handleNavClick('Upload Project')}
          >
            Upload Project
          </li>
          <li
            className={`nav-item ${activeButton === 'Milestones' ? 'active' : ''}`}
            onClick={() => handleNavClick('Milestones')}
          >
            Milestones
          </li>
          <li
            className={`nav-item ${activeButton === 'Feedback' ? 'active' : ''}`}
            onClick={() => handleNavClick('Feedback')}
          >
            Feedback
          </li>
          <li
            className={`nav-item ${activeButton === 'My Profile' ? 'active' : ''}`}
            onClick={() => handleNavClick('My Profile')}
          >
            My Profile
          </li>
        </ul>
        <button className="logout-btn" onClick={handleLogout}>Log Out</button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* The content related to the selected page goes here */}
      </div>
    </div>
  );
};

export default StudentPage;
