import React from 'react';
import { useRef } from 'react';
import Navbar1 from './Navbar1';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Admin.css'; // Import the CSS file for Admin component styling

const Admin = () => {
  const titleRef = useRef(null);
  
  return (
    <>
      <Navbar1 />
      <div className="admin-container">
      <h2 ref={titleRef}></h2>
        <div><h2>Admin Page</h2></div>
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
