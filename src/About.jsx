import React from 'react';

const About = () => {
  return (
    <div className="container">
      <div className="card">
        <h1>About StudentToStalk</h1>
        <p>StudentToStalk is a comprehensive student management platform designed to connect, organize, and empower the academic community.</p>

        <div className="student-card" style={{ marginTop: '2rem' }}>
          <h2>🎯 Learning Objectives</h2>
          <p style={{ marginBottom: '1.5rem', fontStyle: 'italic' }}>
            At the end of this laboratory activity, the student must be able to:
          </p>

          <h3>Learning Objectives Aligned Course Learning Outcomes (CLOs)</h3>

          <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
            <li style={{ marginBottom: '1rem' }}>
              <strong>Implement routing using React router</strong> <span style={{ color: 'var(--primary-blue)' }}>CLO4</span>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong>Manage state using useState</strong> <span style={{ color: 'var(--primary-blue)' }}>CLO4</span>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong>Fetch and display data using useEffect</strong> <span style={{ color: 'var(--primary-blue)' }}>CLO4</span>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong>Build a simple-page React application</strong> <span style={{ color: 'var(--primary-blue)' }}>CLO4</span>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong>Handle navigation between components</strong> <span style={{ color: 'var(--primary-blue)' }}>CLO4</span>
            </li>
          </ol>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
          <div className="student-card">
            <h3>🚀 Technology Stack</h3>
            <ul style={{ paddingLeft: '1.2rem' }}>
              <li>React 19</li>
              <li>React Router DOM</li>
              <li>Vite</li>
              <li>CSS3</li>
            </ul>
          </div>

          <div className="student-card">
            <h3>📋 Features Implemented</h3>
            <ul style={{ paddingLeft: '1.2rem' }}>
              <li>Multi-page routing</li>
              <li>Responsive design</li>
              <li>Component-based architecture</li>
              <li>Modern UI/UX</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;