import React from 'react';
import { Link } from 'react-router-dom';
import studentImg from './assets/StudentstoCampus.jpg';

const Home = () => {
  return (
    <div className="container">
      <div className="home-banner">
        <img src={studentImg} alt="Students to Campus" />
      </div>
      <div className="card">
        <h1>Welcome to StudentToStalk</h1>
        <p>Your comprehensive student management platform. Connect, learn, and grow together.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <h3>📚 Student Directory</h3>
            <p>View and manage student information</p>
            <Link to="/students" className="btn">View Students</Link>
          </div>

          <div className="card" style={{ textAlign: 'center' }}>
            <h3>ℹ️ About Project</h3>
            <p>Learn about this laboratory activity and its objectives</p>
            <Link to="/about" className="btn">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;