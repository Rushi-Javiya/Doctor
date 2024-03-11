// import React, { useState } from 'react';
// import './PatientLoginPage.css'; // Import the CSS file

// function DoctorLoginPage() {
//   const [email, setEmail] = useState('');
//   const [password,setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:8080/login1', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.text();
//       if (response.ok) {
//         // Login successful, navigate to patient page
//         window.location.href = '/doctorpage'; // Change to your patient page route
//       } else {
//         // Display error message
//         setError(data);
//       }
//     } catch (error) {
//       console.error('Login failed:', error);

//     }
//   };

//   return (
//     <div className="login-page">
//       <form onSubmit={handleSubmit}>
//         <h1>Doctor Login</h1>
//         <label htmlFor="email"><b>Email</b></label>
//         <input type="text" placeholder="Enter Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

//         <label htmlFor="name"><b>Password</b></label>
//         <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

//         <button type="submit">Login</button>
//         {error && <p className="error-message">{error}</p>}
//       </form>
//     </div>
//   );
// }

// export default DoctorLoginPage;


import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import './PatientLoginPage.css'; 
 


function DoctorLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/login1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.text();
      if (response.ok) {
        // Redirect to DoctorPage with email parameter
        window.location.href = `/doctorpage?email=${encodeURIComponent(email)}`;
      } else {
        // Display error message
        setError(data);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <h1>Doctor Login</h1>
        <label htmlFor="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="name"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Login</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}

export default DoctorLoginPage;

