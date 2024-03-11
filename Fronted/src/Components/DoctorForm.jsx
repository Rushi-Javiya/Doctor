// import React, { useState } from 'react';
// import './DoctorForm.css';
// import axios from 'axios';


// const DoctorForm = () => {
//   const [doctor, setDoctor] = useState({
//     name: '',
//     email: '',
//     password: '',
//     phoneNumber: '',
//     specialization: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setDoctor(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/savedoctor', doctor); // Send POST request to save doctor
//       console.log('Doctor saved:', response.data);
//       // Reset the form fields
//       setDoctor({
//         name: '',
//         email: '',
//         password: '',
//         phoneNumber: '',
//         specialization: ''
//       });
//     } catch (error) {
//       console.error('Error saving doctor:', error);
//     }
//   };

//   return (
//     <div className="container">
//       <h2>New Doctor</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" value={doctor.name} onChange={handleChange} placeholder="Doctor Name" className="form-control mb-4 col-4" required />
//         <input type="text" name="email" value={doctor.email} onChange={handleChange} placeholder="Doctor Email" className="form-control mb-4 col-4" required />
//         <input type="password" name="password" value={doctor.password} onChange={handleChange} placeholder="Doctor Password" className="form-control mb-4 col-4" required />
//         <input type="text" name="phoneNumber" value={doctor.phoneNumber} onChange={handleChange} placeholder="Doctor Phonenumber" className="form-control mb-4 col-4" required />
//         <input type="text" name="specialization" value={doctor.specialization} onChange={handleChange} placeholder="Doctor Specialization" className="form-control mb-4 col-4" />
//         <button type="submit" className="btn btn-info col-2">Save Doctor</button>
//       </form>
//     </div>
//   );
// };

// export default DoctorForm;


// DoctorForm.js
import React, { useState } from 'react';
import './DoctorForm.css';
import axios from 'axios';

const DoctorForm = () => {
  const [doctor, setDoctor] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    specialization: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/savedoctor', doctor); // Send POST request to save doctor
      console.log('Doctor saved:', response.data);
      // Reset the form fields
      setDoctor({
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
        specialization: ''
      });
    } catch (error) {
      console.error('Error saving doctor:', error);
    }
  };

  return (
    <div className="doctor_container">
      <h2 className="doctor_heading">New Doctor</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={doctor.name} onChange={handleChange} placeholder="Doctor Name" className="doctor_form-control mb-4 col-4" required />
        <input type="text" name="email" value={doctor.email} onChange={handleChange} placeholder="Doctor Email" className="doctor_form-control mb-4 col-4" required />
        <input type="password" name="password" value={doctor.password} onChange={handleChange} placeholder="Doctor Password" className="doctor_form-control mb-4 col-4" required />
        <input type="text" name="phoneNumber" value={doctor.phoneNumber} onChange={handleChange} placeholder="Doctor Phonenumber" className="doctor_form-control mb-4 col-4" required />
        <input type="text" name="specialization" value={doctor.specialization} onChange={handleChange} placeholder="Doctor Specialization" className="doctor_form-control mb-4 col-4" />
        <button type="submit" className="doctor_btn btn btn-info col-2">Save Doctor</button>
      </form>
    </div>
  );
};

export default DoctorForm;

