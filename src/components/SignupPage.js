import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css'; 
import logo from '../assets/logo.gif'; 

const SignupPage = () => {
  const [userType, setUserType] = useState(''); 
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const navigate = useNavigate();

  const handleAddSkill = () => {
    if (newSkill && !selectedSkills.includes(newSkill)) {
      setSelectedSkills([...selectedSkills, newSkill]);
      setNewSkill('');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    alert('Signup Successful!');
    navigate('/');
  };

  const handleSkillRemove = (skill) => {
    setSelectedSkills(selectedSkills.filter((item) => item !== skill));
  };

  return (
    <div className="signup-container">
      <div className="image-container">
      
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="signup-box">
        <h2 className="signup-title">Create Your Account</h2>

        {!userType && (
          <div className="user-type-section">
            <select value={userType} onChange={(e) => setUserType(e.target.value)} className="user-type-dropdown">
              <option value="">-- Select Role --</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
        )}

        {userType && (
          <form onSubmit={handleSignup} className="signup-form">
            <input type="text" placeholder="Enter your full name" required />

            <input type="text" placeholder="Create a username" required />

            <input type="password" placeholder="Create a password" required />

            <input type="password" placeholder="Re-enter password" required />

            {userType === 'student' && (
              <>
                <input type="file" accept="image/*" placeholder="Profile Photo" />

                <select required>
                  <option value="btech">B.Tech</option>
                  <option value="mtech">M.Tech</option>
                </select>

                <input type="text" placeholder="Enter your course" required />

                <input type="file" accept=".pdf,.doc,.docx" placeholder="Upload Resume" />

                <div className="skill-section">
                  <input
                    type="text"
                    placeholder="Add a skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                  />
                  <button type="button" onClick={handleAddSkill} className="add-skill-btn">
                    Add
                  </button>
                </div>

                <div className="selected-skills">
                  {selectedSkills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      {skill}
                      <button type="button" onClick={() => handleSkillRemove(skill)} className="remove-skill-btn">
                        X
                      </button>
                    </div>
                  ))}
                </div>

                <textarea placeholder="Tell us something about yourself (optional)" />
              </>
            )}

            {userType === 'teacher' && (
              <>
                <input type="file" accept="image/*" placeholder="Profile Photo" />

                <input type="text" placeholder="Subjects you teach" required />

                <input type="number" placeholder="Years of experience" required />

                <input type="file" accept=".pdf,.doc,.docx" placeholder="Upload Resume" />
              </>
            )}

            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>
        )}

        <p className="login-link">
          Already have an account? <a href="/">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
