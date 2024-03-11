// import React from 'react';
// import './PatientPage.css'; // Import the CSS file

// const PatientPage = ({ patient }) => {
//   // Sample patient data
//   const samplePatient = {
//     id: 1,
//     name: "John Doe",
//     email: "john.doe@example.com",
//     phoneNumber: "1234567890",
//     address: "123 Main St, City",
//     dateOfBirth: "1990-01-01",
//     appointments: [
//       {
//         id: 1,
//         appointmentDateTime: "2024-03-10 09:00 AM",
//         doctor: {
//           name: "Dr. Smith",
//           specialization: "Cardiology"
//         },
//         appointmentStatus: "Scheduled"
//       },
//       {
//         id: 2,
//         appointmentDateTime: "2024-03-15 10:00 AM",
//         doctor: {
//           name: "Dr. Johnson",
//           specialization: "Dermatology"
//         },
//         appointmentStatus: "Scheduled"
//       }
//     ]
//   };

//   // Use the sample patient data if no patient prop is provided
//   const patientData = patient || samplePatient;

//   return (
//    <>
//       <div className="row">
//         <div className="col-md-12">
//           <h1 className="my-4">Patient Details</h1>
//           <table className="table table-bordered">
//             <tbody>
//               <tr>
//                 <td>ID:</td>
//                 <td>{patientData.id}</td>
//               </tr>
//               <tr>
//                 <td>Name:</td>
//                 <td>{patientData.name}</td>
//               </tr>
//               <tr>
//                 <td>Email:</td>
//                 <td>{patientData.email}</td>
//               </tr>
//               <tr>
//                 <td>Phone Number:</td>
//                 <td>{patientData.phoneNumber}</td>
//               </tr>
//               <tr>
//                 <td>Address:</td>
//                 <td>{patientData.address}</td>
//               </tr>
//               <tr>
//                 <td>Date of Birth:</td>
//                 <td>{patientData.dateOfBirth}</td>
//               </tr>
//             </tbody>
//           </table>
//           <h2 className="my-4">Appointments:</h2>
//           <table className="table table-bordered">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Date</th>
//                 <th>Doctor</th>
//                 <th>Specialization</th>
//                 <th>Appointment Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {patientData.appointments.map(appointment => (
//                 <tr key={appointment.id}>
//                   <td>{appointment.id}</td>
//                   <td>{appointment.appointmentDateTime}</td>
//                   <td>{appointment.doctor.name}</td>
//                   <td>{appointment.doctor.specialization}</td>
//                   <td>{appointment.appointmentStatus}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <a href="#" className="btn btn-primary edit-btn">New Appointment</a>
//         </div>
//       </div>
    
//     </>
//   );
// }

// export default PatientPage;


















// PatientPage.js

// PatientPage.js

// import React, { useState, useEffect } from 'react';

// function PatientPage() {
//   const [patient, setPatient] = useState(null);

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const email = params.get('email');
//     const name = params.get('name');
//     if (email && name) {
//       fetchPatientDetails(email, name);
//     }
//   }, []);

//   const fetchPatientDetails = async (email, name) => {
//     try {
//       const response = await fetch(`http://localhost:8080/showpatient?email=${email}&name=${name}`);
//       const data = await response.json();
//       if (response.ok) {
//         setPatient(data);
//       } else {
//         console.error('Failed to fetch patient details:', data.message || 'Unknown error');
//       }
//     } catch (error) {
//       console.error('Failed to fetch patient details:', error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-12">
//           {patient ? (
//             <>
//               <h1 className="my-4">Patient Details</h1>
//               <table className="table table-bordered">
//                 <tbody>
//                   <tr>
//                     <td>Name:</td>
//                     <td>{patient.name}</td>
//                   </tr>
//                   <tr>
//                     <td>Email:</td>
//                     <td>{patient.email}</td>
//                   </tr>
//                   <tr>
//                     <td>Phone Number:</td>
//                     <td>{patient.phoneNumber}</td>
//                   </tr>
//                   <tr>
//                     <td>Address:</td>
//                     <td>{patient.address}</td>
//                   </tr>
//                   <tr>
//                     <td>Date of Birth:</td>
//                     <td>{patient.dateOfBirth}</td>
//                   </tr>
//                 </tbody>
//               </table>
//               <h2 className="my-4">Appointments:</h2>
// //           <table className="table table-bordered">
// //             <thead>
// //               <tr>
// //                 <th>ID</th>
// //                 <th>Date</th>
// //                 <th>Doctor</th>
// //                 <th>Specialization</th>
// //                 <th>Appointment Status</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {patient.appointments.map(appointment => (
//                 <tr key={appointment.id}>
//                   <td>{appointment.id}</td>
//                   <td>{appointment.appointmentDateTime}</td>
//                   <td>{appointment.doctor.name}</td>
//                   <td>{appointment.doctor.specialization}</td>
//                   <td>{appointment.appointmentStatus}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//             </>
//           ) : (
//             <p>Loading...</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PatientPage;




// PatientPage.jsx

// import React, { useState, useEffect } from 'react';

// function PatientPage() {
//   const [patient, setPatient] = useState(null);

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const email = params.get('email');
//     const name = params.get('name');
//     if (email && name) {
//       fetchPatientDetails(email, name);
//     }
//   }, []);

//   const fetchPatientDetails = async (email, name) => {
//     try {
//       const response = await fetch(`http://localhost:8080/showpatient?email=${email}&name=${name}`);
//       const data = await response.json();
//       if (response.ok) {
//         setPatient(data);
//       } else {
//         console.error('Failed to fetch patient details:', data.message || 'Unknown error');
//       }
//     } catch (error) {
//       console.error('Failed to fetch patient details:', error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-12">
//           {patient ? (
//             <>
//               <h1 className="my-4">Patient Details</h1>
//               <table className="table table-bordered">
//                 <tbody>
//                   <tr>
//                     <td>Name:</td>
//                     <td>{patient.name}</td>
//                   </tr>
//                   <tr>
//                     <td>Email:</td>
//                     <td>{patient.email}</td>
//                   </tr>
//                   <tr>
//                     <td>Phone Number:</td>
//                     <td>{patient.phoneNumber}</td>
//                   </tr>
//                   <tr>
//                     <td>Address:</td>
//                     <td>{patient.address}</td>
//                   </tr>
//                   <tr>
//                     <td>Date of Birth:</td>
//                     <td>{patient.dateOfBirth}</td>
//                   </tr>
//                 </tbody>
//               </table>
//               {patient.appointments && patient.appointments.length > 0 ? (
//                 <>
//                   <h2 className="my-4">Appointments:</h2>
//                   <table className="table table-bordered">
//                     <thead>
//                       <tr>
//                         <th>ID</th>
//                         <th>Date</th>
//                         <th>Doctor</th>
//                         <th>Specialization</th>
//                         <th>Appointment Status</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {patient.appointments.map(appointment => (
//                         <tr key={appointment.id}>
//                           <td>{appointment.id}</td>
//                           <td>{appointment.appointmentDateTime}</td>
//                           <td>{appointment.doctor.name}</td>
//                           <td>{appointment.doctor.specialization}</td>
//                           <td>{appointment.appointmentStatus}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </>
//               ) : (
//                 <p>No appointments found.</p>
//               )}
//             </>
//           ) : (
//             <p>Loading...</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PatientPage;

import React, { useState, useEffect } from 'react';

function PatientPage() {
  const [patient, setPatient] = useState(null);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const email = params.get('email');
    const name = params.get('name');
    if (email && name) {
      fetchPatientDetails(email, name);
      fetchAppointments(email, name);
    }
  }, []);

  const fetchPatientDetails = async (email, name) => {
    try {
      const response = await fetch(`http://localhost:8080/showpatient?email=${email}&name=${name}`);
      const data = await response.json();
      if (response.ok) {
        setPatient(data);
      } else {
        console.error('Failed to fetch patient details:', data.message || 'Unknown error');
      }
    } catch (error) {
      console.error('Failed to fetch patient details:', error);
    }
  };

  const fetchAppointments = async (email, name) => {
    try {
      const response = await fetch(`http://localhost:8080/showappointments?patientEmail=${email}&patientName=${name}`);
      const data = await response.json();
      if (response.ok) {
        setAppointments(data);
      } else {
        console.error('Failed to fetch appointments:', data.message || 'Unknown error');
      }
    } catch (error) {
      console.error('Failed to fetch appointments:', error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {patient ? (
            <>
              <h1 className="patient_heading">Patient Details</h1>
              <table className="table table-bordered patient_table">
                <tbody>
                  <tr>
                    <td className="patient_label">Name:</td>
                    <td>{patient.name}</td>
                  </tr>
                  <tr>
                    <td className="patient_label">Email:</td>
                    <td>{patient.email}</td>
                  </tr>
                  <tr>
                    <td className="patient_label">Phone Number:</td>
                    <td>{patient.phoneNumber}</td>
                  </tr>
                  <tr>
                    <td className="patient_label">Address:</td>
                    <td>{patient.address}</td>
                  </tr>
                  <tr>
                    <td className="patient_label">Date of Birth:</td>
                    <td>{patient.dateOfBirth}</td>
                  </tr>
                </tbody>
              </table>
              {appointments.length > 0 ? (
                <>
                  <h2 className="patient_heading">Appointments:</h2>
                  <table className="table table-bordered patient_table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Doctor</th>
                        <th>Specialization</th>
                        <th>Appointment Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.map(appointment => (
                        <tr key={appointment.id}>
                          <td>{appointment.id}</td>
                          <td>{appointment.appointmentDateTime}</td>
                          <td>{appointment.doctor.name}</td>
                          <td>{appointment.doctor.specialization}</td>
                          <td>{appointment.appointmentStatus}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="patient_buttons">
                    <button className="btn btn-primary">New Appointment</button>
                  </div>
                </>
              ) : (
                <p>No appointments found.</p>
              )}
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PatientPage;
