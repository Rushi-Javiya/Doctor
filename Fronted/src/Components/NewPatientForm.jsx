// import React, { useState } from 'react';
// import axios from 'axios';
// import './NewPatientForm.css';

// const NewPatientForm = () => {
//   const [patient, setPatient] = useState({
//     name: '',
//     email: '',
//     phoneNumber: '',
//     address: '',
//     dateOfBirth: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPatient({
//       ...patient,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/savePatient', patient); // Assuming your backend API endpoint is /api/patients
//       console.log('Response from backend:', response.data);
//       // Reset the form after successful submission
//       setPatient({
//         name: '',
//         email: '',
//         phoneNumber: '',
//         address: '',
//         dateOfBirth: '',
//       });
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   return (
//     <div className="container">
//       <h2>New Patient</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Patient Name"
//           value={patient.name}
//           onChange={handleChange}
//           className="form-control mb-4 col-4"
//           required
//         />

//         <input
//           type="text"
//           name="email"
//           placeholder="Patient Email"
//           value={patient.email}
//           onChange={handleChange}
//           className="form-control mb-4 col-4"
//           required
//         />

//         <input
//           type="text"
//           name="phoneNumber"
//           placeholder="Patient Phonenumber"
//           value={patient.phoneNumber}
//           onChange={handleChange}
//           className="form-control mb-4 col-4"
//           required
//         />

//         <input
//           type="text"
//           name="address"
//           placeholder="Patient Address"
//           value={patient.address}
//           onChange={handleChange}
//           className="form-control mb-4 col-4"
//         />

//         <input
//           type="date"
//           name="dateOfBirth"
//           value={patient.dateOfBirth}
//           onChange={handleChange}
//           className="form-control datepicker mb-4 col-2"
//           placeholder="yyyy/mm/dd"
//           pattern="\d{4}/\d{2}/\d{2}"
//           title="Please enter a valid date in the format yyyy/mm/dd"
//         />

//         <button type="submit" className="btn btn-info col-2">
//           Save Patient
//         </button>
//       </form>
//     </div>
//   );
// };

// export default NewPatientForm;

// NewPatientForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './NewPatientForm.css';

const NewPatientForm = () => {
  const [patient, setPatient] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    dateOfBirth: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient({
      ...patient,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/savePatient', patient); // Assuming your backend API endpoint is /api/patients
      console.log('Response from backend:', response.data);
      // Reset the form after successful submission
      setPatient({
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
        dateOfBirth: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="patient_container">
      <h2 className="patient_heading">New Patient</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Patient Name"
          value={patient.name}
          onChange={handleChange}
          className="patient_input form-control mb-4 col-4"
          required
        />

        <input
          type="text"
          name="email"
          placeholder="Patient Email"
          value={patient.email}
          onChange={handleChange}
          className="patient_input form-control mb-4 col-4"
          required
        />

        <input
          type="text"
          name="phoneNumber"
          placeholder="Patient Phonenumber"
          value={patient.phoneNumber}
          onChange={handleChange}
          className="patient_input form-control mb-4 col-4"
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Patient Address"
          value={patient.address}
          onChange={handleChange}
          className="patient_input form-control mb-4 col-4"
        />

        <input
          type="date"
          name="dateOfBirth"
          value={patient.dateOfBirth}
          onChange={handleChange}
          className="patient_input form-control datepicker mb-4 col-2"
          placeholder="yyyy/mm/dd"
          pattern="\d{4}-\d{2}-\d{2}"
          title="Please enter a valid date in the format yyyy/mm/dd"
        />

        <button type="submit" className="patient_btn btn btn-info col-2">
          Save Patient
        </button>
      </form>
    </div>
  );
};

export default NewPatientForm;
