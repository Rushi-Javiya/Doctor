// import React from 'react';


// const DoctorPage = () => {
//   const doctor = {
//     id: 1,
//     name: "Dr. John Smith",
//     email: "john.smith@example.com",
//     phoneNumber: "1234567890",
//     appointments: [
//       {
//         id: 1,
//         appointmentDateTime: "2024-03-10 09:00 AM",
//         patient: {
//           name: "John Doe"
//         },
//         appointmentStatus: "Scheduled"
//       },
//       {
//         id: 2,
//         appointmentDateTime: "2024-03-15 10:00 AM",
//         patient: {
//           name: "Jane Doe"
//         },
//         appointmentStatus: "Scheduled"
//       }
//     ]
//   };

//   return (
//     <>
//       <div className="row">
//         <div className="col-md-12">
//           <h1 className="my-4">Doctor Details</h1>
//           <table className="table table-bordered">
//             <tbody>
//               <tr>
//                 <td>ID:</td>
//                 <td>{doctor.id}</td>
//               </tr>
//               <tr>
//                 <td>Name:</td>
//                 <td>{doctor.name}</td>
//               </tr>
//               <tr>
//                 <td>Email:</td>
//                 <td>{doctor.email}</td>
//               </tr>
//               <tr>
//                 <td>Phone Number:</td>
//                 <td>{doctor.phoneNumber}</td>
//               </tr>
//             </tbody>
//           </table>
//           <h2 className="my-4">Appointments:</h2>
//           <table className="table table-bordered">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Date</th>
//                 <th>Patient</th>
//                 <th>Appointment Status</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {doctor.appointments.map(appointment => (
//                 <tr key={appointment.id}>
//                   <td>{appointment.id}</td>
//                   <td>{appointment.appointmentDateTime}</td>
//                   <td>{appointment.patient.name}</td>
//                   <td>{appointment.appointmentStatus}</td>
//                   <td><button className="btn btn-primary">Done</button></td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
    
//     </>
//   );
// }

// export default DoctorPage;


// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom'; // Import useLocation hook
// //import './DoctorPage.css'; // Import the CSS file

// function DoctorPage() {
//   const [doctor, setDoctor] = useState(null);
//   const location = useLocation(); // Initialize useLocation hook
//   const searchParams = new URLSearchParams(location.search);
//   const email = searchParams.get('email'); // Extract email parameter from URL

//   useEffect(() => {
//     const fetchDoctorDetails = async () => {
//       try {
//         const response = await fetch(`http://localhost:8080/getDoctorDetails?email=${email}`);
//         const data = await response.json();
//         if (response.ok) {
//           setDoctor(data);
//         } else {
//           console.error('Failed to fetch doctor details:', data.message || 'Unknown error');
//         }
//       } catch (error) {
//         console.error('Failed to fetch doctor details:', error);
//       }
//     };

//     if (email) {
//       fetchDoctorDetails();
//     }
//   }, [email]);

//   return (
//     <>
//       {doctor ? (
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12">
//               <h1 className="my-4">Doctor Details</h1>
//               <table className="table table-bordered">
//                 <tbody>
//                   <tr>
//                     <td>ID:</td>
//                     <td>{doctor.id}</td>
//                   </tr>
//                   <tr>
//                     <td>Name:</td>
//                     <td>{doctor.name}</td>
//                   </tr>
//                   <tr>
//                     <td>Email:</td>
//                     <td>{doctor.email}</td>
//                   </tr>
//                   <tr>
//                     <td>Phone Number:</td>
//                     <td>{doctor.phoneNumber}</td>
//                   </tr>
//                 </tbody>
//               </table>
//               <h2 className="my-4">Appointments:</h2>
//               <table className="table table-bordered">
//                 <thead>
//                   <tr>
//                     <th>ID</th>
//                     <th>Date</th>
//                     <th>Patient</th>
//                     <th>Appointment Status</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 {/* <tbody>
//                   {doctor.appointments.map(appointment => (
//                     <tr key={appointment.id}>
//                       <td>{appointment.id}</td>
//                       <td>{appointment.appointmentDateTime}</td>
//                       <td>{appointment.patient.name}</td>
//                       <td>{appointment.appointmentStatus}</td>
//                       <td><button className="btn btn-primary">Done</button></td>
//                     </tr>
//                   ))}
//                 </tbody> */}
//               </table>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </>
//   );
// }

// export default DoctorPage;

// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom'; // Import useLocation hook

// function DoctorPage() {
//   const [doctor, setDoctor] = useState(null);
//   const [appointments, setAppointments] = useState([]);
//   const location = useLocation(); // Initialize useLocation hook
//   const searchParams = new URLSearchParams(location.search);
//   const email = searchParams.get('email'); // Extract email parameter from URL

//   useEffect(() => {
//     const fetchDoctorDetails = async () => {
//       try {
//         const response = await fetch(`http://localhost:8080/getDoctorDetails?email=${email}`);
//         const data = await response.json();
//         if (response.ok) {
//           setDoctor(data);
//         } else {
//           console.error('Failed to fetch doctor details:', data.message || 'Unknown error');
//         }
//       } catch (error) {
//         console.error('Failed to fetch doctor details:', error);
//       }
//     };

//     const fetchAppointments = async () => {
//       try {
//         const response = await fetch(`http://localhost:8080/getAppointments?email=${email}`);
//         const data = await response.json();
//         if (response.ok) {
//           setAppointments(data);
//         } else {
//           console.error('Failed to fetch appointments:', data.message || 'Unknown error');
//         }
//       } catch (error) {
//         console.error('Failed to fetch appointments:', error);
//       }
//     };

//     if (email) {
//       fetchDoctorDetails();
//       fetchAppointments();
//     }
//   }, [email]);

//   return (
//     <>
//       {doctor ? (
        
//           <div className="row">
//             <div className="col-md-12">
//               <h1 className="my-4">Doctor Details</h1>
//               <table className="table table-bordered">
//                 <tbody>
//                   <tr>
//                     <td>ID:</td>
//                     <td>{doctor.id}</td>
//                   </tr>
//                   <tr>
//                     <td>Name:</td>
//                     <td>{doctor.name}</td>
//                   </tr>
//                   <tr>
//                     <td>Email:</td>
//                     <td>{doctor.email}</td>
//                   </tr>
//                   <tr>
//                     <td>Phone Number:</td>
//                     <td>{doctor.phoneNumber}</td>
//                   </tr>
//                 </tbody>
//               </table>
//               <h2 className="my-4">Appointments:</h2>
//               <table className="table table-bordered">
//                 <thead>
//                   <tr>
//                     <th>ID</th>
//                     <th>Date</th>
//                     <th>Patient</th>
//                     <th>Appointment Status</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {appointments.map(appointment => (
//                     <tr key={appointment.id}>
//                       <td>{appointment.id}</td>
//                       <td>{appointment.appointmentDateTime}</td>
//                       <td>{appointment.patient.name}</td>
//                       <td>{appointment.appointmentStatus}</td>
//                       <td><button className="btn btn-primary">Done</button></td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
        
//       ) : (
//         <p>Loading...</p>
//       )}
//     </>
//   );
// }

// export default DoctorPage;


import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function DoctorPage() {
  const [doctor, setDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get('email');

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/getDoctorDetails?email=${email}`);
        const data = await response.json();
        if (response.ok) {
          setDoctor(data);
        } else {
          console.error('Failed to fetch doctor details:', data.message || 'Unknown error');
        }
      } catch (error) {
        console.error('Failed to fetch doctor details:', error);
      }
    };

    const fetchAppointments = async () => {
      try {
        const response = await fetch(`http://localhost:8080/getAppointments?email=${email}`);
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

    if (email) {
      fetchDoctorDetails();
      fetchAppointments();
    }
  }, [email]);

  const handleAppointmentDone = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/updateStatus/${id}`, {
        method: 'POST',
      });
      if (response.ok) {
        // Update appointment status in the frontend state
        setAppointments(prevAppointments => prevAppointments.map(appointment => {
          if (appointment.id === id) {
            return { ...appointment, appointmentStatus: 'Done' };
          }
          return appointment;
        }));
      } else {
        console.error('Failed to update appointment status');
      }
    } catch (error) {
      console.error('Failed to update appointment status:', error);
    }
  };

  return (
    <>
      {doctor ? (
        
          <div className="row">
            <div className="col-md-12">
              <h1 className="my-4">Doctor Details</h1>
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>ID:</td>
                    <td>{doctor.id}</td>
                  </tr>
                  <tr>
                    <td>Name:</td>
                    <td>{doctor.name}</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>{doctor.email}</td>
                  </tr>
                  <tr>
                    <td>Phone Number:</td>
                    <td>{doctor.phoneNumber}</td>
                  </tr>
                </tbody>
              </table>
              <h2 className="my-4">Appointments:</h2>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Patient</th>
                    <th>Appointment Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map(appointment => (
                    <tr key={appointment.id}>
                      <td>{appointment.id}</td>
                      <td>{appointment.appointmentDateTime}</td>
                      <td>{appointment.patient.name}</td>
                      <td>{appointment.appointmentStatus}</td>
                      <td>
                        {appointment.appointmentStatus !== 'Done' && (
                          <button
                            className="btn btn-primary"
                            onClick={() => handleAppointmentDone(appointment.id)}
                          >
                            Done
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default DoctorPage;


