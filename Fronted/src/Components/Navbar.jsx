// // Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css'; 

// // Import CSS file for styling

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <Link to="/">Doctor Appointment System</Link>
//       </div>
//       <div className="buttons">
//         <Link to="/adlogin">Login</Link>
          
//         <Link to="/newpatient">New Patient</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

// Import CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar_navbar">
      <div className="navbar_logo">
        <Link to="/" className="navbar_link">Doctor Appointment System</Link>
      </div>
      <div className="navbar_buttons">
        <Link to="/adlogin" className="navbar_link">Login</Link>
          
        <Link to="/newpatient" className="navbar_link">New Patient</Link>
      </div>
    </nav>
  );
};

export default Navbar;

