// import React, { useState } from 'react';
// import axios from 'axios';
// import './LoginForm.css'; // Import CSS file

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get(`http://localhost:8080/validate?email=${email}&password=${password}`);
//       if (response.data === 'success') {
//         // Redirect or perform any action upon successful login
//         window.location.href = '/admin';
//       } else {
//         // Handle unsuccessful login
//         console.log('Login failed');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//     }
//   };

//   return (
//     <div className="container"> {/* Apply container class */}
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="email"><b>Email</b></label>
//         <input
//           type="text"
//           placeholder="Enter E-mail"
//           name="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <label htmlFor="password"><b>Password</b></label>
//         <input
//           type="password"
//           placeholder="Enter Password"
//           name="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;


// LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css'; // Import CSS file

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/validate?email=${email}&password=${password}`);
      if (response.data === 'success') {
        // Redirect or perform any action upon successful login
        window.location.href = '/admin';
      } else {
        // Handle unsuccessful login
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="login_container"> {/* Apply container class */}
      <h1 className="login_heading">Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="login_email"><b>Email</b></label>
        <input
          type="text"
          placeholder="Enter E-mail"
          name="login_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="login_input"
        />

        <label htmlFor="login_password"><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          name="login_password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login_input"
        />

        <button type="submit" className="login_button">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;

