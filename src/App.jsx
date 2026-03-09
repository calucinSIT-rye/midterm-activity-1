import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import Students from './Students';
import StudentDetails from './StudentDetails';
import About from './About';
import logo from './assets/LogoNiReign2.png';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/students" element={<Students />} />
              <Route path="/students/:id" element={<StudentDetails />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function Header() {
  const location = useLocation();

  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <img src={logo} alt="LogoNiReign2" style={{ width: '120px', height: 'auto' }} />
        </div>
        <nav>
          <ul>
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/students" className={location.pathname.startsWith('/students') ? 'active' : ''}>Students</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2026 Calucin_R. All rights reserved.</p>
    </footer>
  );
}

export default App;
