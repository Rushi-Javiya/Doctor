// // import React from 'react';
// // import './PatientLoginPage.css'; // Import the CSS file

// // function PatientLoginPage() {
// //   return (
// //     <div className="login-page">
// //       <form>
// //         <h1>Patient Login</h1>
// //         <label htmlFor="email"><b>Email</b></label>
// //         <input type="text" placeholder="Enter Email" name="email" required />

// //         <label htmlFor="name"><b>Name</b></label>
// //         <input type="text" placeholder="Enter Name" name="name" required />

// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default PatientLoginPage;


// PatientLoginPage.js

// import React, { useState } from 'react';
// import './PatientLoginPage.css'; // Import the CSS file

// function PatientLoginPage() {
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:8080/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, name }),
//       });
//       const data = await response.text();
//       if (response.ok) {
//         // Login successful, navigate to patient page
//         window.location.href = '/patientpage'; // Change to your patient page route
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
//         <h1>Patient Login</h1>
//         <label htmlFor="email"><b>Email</b></label>
//         <input type="text" placeholder="Enter Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

//         <label htmlFor="name"><b>Name</b></label>
//         <input type="text" placeholder="Enter Name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

//         <button type="submit">Login</button>
//         {error && <p className="error-message">{error}</p>}
//       </form>
//     </div>
//   );
// }

// export default PatientLoginPage;





// PatientLoginPage.js

import React, { useState } from 'react';
import './PatientLoginPage.css';

function PatientLoginPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      });
      const data = await response.text();
      if (response.ok) {
        window.location.href = `/patientpage?email=${email}&name=${name}`;
      } else {
        setError(data);
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed');
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <h1>Patient Login</h1>
        <label htmlFor="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="name"><b>Name</b></label>
        <input type="text" placeholder="Enter Name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

        <button type="submit">Login</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}

export default PatientLoginPage;
