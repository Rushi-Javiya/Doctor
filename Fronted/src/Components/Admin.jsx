import React from 'react';
import { useRef } from 'react';
import Navbar1 from './Navbar1';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Admin.css'; // Import the CSS file for Admin component styling

const Admin = () => {
  const titleRef = useRef(null);
  const title = 'Welcome Admin';

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
      <Navbar1 />
      <div className="admin-container">
      <h2 ref={titleRef}></h2>
        <div className="admin-links">
          <Link to="/newpatient" className="admin-link">Add Patient</Link>
          <Link to="/newdoctor" className="admin-link">Add Doctor</Link>
          <Link to="/newappointment" className="admin-link">Add Appointment</Link>
        </div>
      </div>
    </>
  );
};

export default Admin;
