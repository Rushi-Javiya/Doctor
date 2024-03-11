// Home.js
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Navbar from './Navbar';

const Home = () => {
  const titleRef = useRef(null);
  const title = 'Welcome to Doctor Appointment System';

  const displayTitle = () => {
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < title.length) {
        titleRef.current.textContent += title[i];
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, 200);
  };

  displayTitle();

  return (
    <>
      <Navbar />
      <div className="home">
        <h2 ref={titleRef}></h2>
        <div className="buttons">
          <Link to="/patientlogin" className='home-button' style={{ marginRight: '1rem' }}>Patient</Link>
          <Link to="/doctorlogin" className='home-button' style={{ marginLeft: '1rem' }}>Doctor</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
