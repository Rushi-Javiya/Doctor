// Home.js
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Navbar from './Navbar';

const Home = () => {
  const titleRef = useRef(null);

  return (
    <>
      <Navbar />
      <div className="home">
        <h2 ref={titleRef}></h2>
        <div className="buttons">
          <div><h2>Welcome to Home Page</h2></div>
          <Link to="/patientlogin" className='home-button' style={{ marginRight: '1rem' }}>Patient</Link>
          <Link to="/doctorlogin" className='home-button' style={{ marginLeft: '1rem' }}>Doctor</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
