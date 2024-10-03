import React, { useEffect, useState } from 'react';
import './StudentPage.css';

const StudentPage = () => {
  const [profileCompletion, setProfileCompletion] = useState(60);

  // For Animating Charts and Progress
  useEffect(() => {
    const animateProgress = setTimeout(() => setProfileCompletion(90), 1000); // simulate progress growth
    return () => clearTimeout(animateProgress);
  }, []);

  return (
    <div className="student-page">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">AchieveUp <span className="arrow-up">↑</span></div>
        <ul className="nav-links">
          <li className="nav-item active">Dashboard</li>
          <li className="nav-item">Portfolio</li>
          <li className="nav-item">Upload Project</li>
          <li className="nav-item">Milestones</li>
          <li className="nav-item">Feedback</li>
          <li className="nav-item">My Profile</li>
        </ul>
        <button className="logout-btn">Log Out</button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="top-section">
          <div className="greeting">
            <h2>Hi, Student</h2>
            <p>Complete Your Profile to get Start :</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${profileCompletion}%` }}></div>
            </div>
            <p className="progress-percentage">{profileCompletion}%</p>
          </div>
          <div className="student-id">2200030809</div>
        </div>

        {/* Dashboard Section */}
        <div className="dashboard-section">
          <div className="status-card milestones-card">
            <div className="status-circle" data-percentage="10">
              <p>10%</p>
            </div>
            <p>Milestones</p>
          </div>
          <div className="status-card project-card">
            <div className="status-circle" data-percentage="25">
              <p>25%</p>
            </div>
            <p>Project Status</p>
          </div>
          <div className="status-card profile-card">
            <div className="status-circle" data-percentage="50">
              <p>50%</p>
            </div>
            <p>Profile Status</p>
          </div>
        </div>

        {/* Recommendations & Graphs */}
        <div className="bottom-section">
          <div className="recommendations">
            <h3>Recommended Enhancements for Expanding Reach and Engagement :</h3>
            <p>Enhance user experience with streamlined navigation and mobile optimization to boost engagement...</p>
          </div>
          <div className="graphs">
            <div className="graph-card bar-graph-card">
              <h4>No. of Drawbacks</h4>
              <div className="bar-chart"></div>
            </div>
            <div className="graph-card line-graph-card">
              <h4>Projects Reach</h4>
              <div className="line-chart"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
