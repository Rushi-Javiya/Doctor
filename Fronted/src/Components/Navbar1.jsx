// Navbar1.js
import React from 'react';
import './Navbar1.css';
import { Link } from 'react-router-dom';

const Navbar1 = ({ onLogout }) => {
  return (
    <nav className="navbar1_navbar">
      <div className="navbar1_left">
        <Link to="/" className="navbar1_link">Home</Link>
        <Link to="/patients" className="navbar1_link">Patient</Link>
        <Link to="/doctors" className="navbar1_link">Doctor</Link>
        <Link to="/appointments" className="navbar1_link">Appointment</Link>
      </div>
      <div className="navbar1_right">
        <button className="navbar1_logout-button" onClick={onLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar1;
