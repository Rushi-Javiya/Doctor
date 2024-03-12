// // import React, { useState, useEffect } from 'react';
// // import './AppointmentList.css'; // Import the CSS file

// // function AppointmentList() {
// //   const [appointments, setAppointments] = useState([]);

// //   useEffect(() => {
// //     // Fetch appointments from the backend when the component mounts
// //     fetch('http://localhost:8080/appointments')
// //       .then(response => {
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch appointments');
// //         }
// //         return response.json();
// //       })
// //       .then(data => {
// //         setAppointments(data); // Set the fetched appointments in state
// //       })
// //       .catch(error => {
// //         console.error('Error fetching appointments:', error);
// //       });
// //   }, []);

// //   // Check if appointments array is empty
// //   if (appointments.length === 0) {
// //     return <div>No appointments available.</div>;
// //   }

// //   return (
// //     <div className="container my-2">
// //       <h1>Appointment List</h1>
// //       <a href="/newAppointmentForm" className="btn btn-primary btn-sm mb-3"> Add Appointment </a>
// //       <table className="table table-striped table-responsive-md">
// //         <thead>
// //           <tr>
// //             <th>id</th>
// //             <th>Patient Name</th>
// //             <th>Doctor Name</th>
// //             <th>AppointmentDateTime</th>
// //             <th>AppointmentStatus</th>
// //             <th>Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {appointments.map(appointment => (
// //             <tr key={appointment.id}>
// //               <td>{appointment.id}</td>
// //               <td>{appointment.patient.name}</td>
// //               <td>{appointment.doctor.name}</td>
// //               <td>{appointment.appointmentDateTime}</td>
// //               <td>{appointment.appointmentStatus}</td>
// //               <td>
// //                 <a href={`/showFormForAppointmentUpdate/${appointment.id}`} className="btn btn-primary">Update</a>
// //                 <a href={`/deleteAppointment/${appointment.id}`} className="btn btn-danger">Delete</a>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }

// // export default AppointmentList;


// import React, { useState, useEffect } from 'react';
// import './AppointmentList.css'; // Import the CSS file

// function AppointmentList() {
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     // Fetch appointments from the backend when the component mounts
//     fetch('http://localhost:8080/appointments')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch appointments');
//         }
//         return response.json();
//       })
//       .then(data => {
//         setAppointments(data); // Set the fetched appointments in state
//       })
//       .catch(error => {
//         console.error('Error fetching appointments:', error);
//       });
//   }, []);

//   // Check if appointments array is empty
//   if (appointments.length === 0) {
//     return <div>No appointments available.</div>;
//   }

//   return (
//     <div className="appointment-list-container">
//       <h1>Appointment List</h1>
//       {/* <a href="/newAppointmentForm" className="btn btn-primary btn-sm mb-3"> Add Appointment </a> */}
//       <table className="table table-striped table-bordered custom-table">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Patient Name</th>
//             <th>Doctor Name</th>
//             <th>Appointment Date & Time</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {appointments.map(appointment => (
//             <tr key={appointment.id}>
//               <td>{appointment.id}</td>
//               <td>{appointment.patient.name}</td>
//               <td>{appointment.doctor.name}</td>
//               <td>{appointment.appointmentDateTime}</td>
//               <td>{appointment.appointmentStatus}</td>
//               <td>
//                 <div className="btn-group">
//                   <button className="btn btn-primary">Update</button>
//                   <button className="btn btn-danger">Delete</button>
//                   <button className="btn btn-primary">Show Details</button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default AppointmentList;

import React, { useState, useEffect } from 'react';
import './AppointmentList.css';
import { Link } from 'react-router-dom';

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/appointments')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch appointments');
        }
        return response.json();
      })
      .then(data => {
        console.log('Appointments data:', data); // Log the received data
        setAppointments(data);
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
      });
  }, []);

  if (appointments.length === 0) {
    return <div>No appointments available.</div>;
  }
  

  const handleDelete = id => {
    fetch(`http://localhost:8080/delete2/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete appointment');
        }
        // If deletion is successful, update the appointments state
        setAppointments(appointments.filter(appointment => appointment.id !== id));
      })
      .catch(error => console.error('Error deleting appointment:', error));
  };

  

  return (
    <div className="appointment-list-container">
      <h1>Appointment List</h1>
      {/* <a href="/newAppointmentForm" className="btn btn-primary btn-sm mb-3"> Add Appointment </a> */}
      <table className="table table-striped table-bordered custom-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Patient Name</th>
            <th>Doctor Name</th>
            <th>Appointment Date & Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{appointment.patient.name}</td>
              <td>{appointment.doctor.name}</td>
              <td>{appointment.appointmentDateTime}</td>
              <td>{appointment.appointmentStatus}</td>
              <td>
                <div className="btn-group">
                  {/* <button className="btn btn-primary">Update</button> */}
                  <Link to={`/update-appointment/${appointment.id}`} className="btn btn-primary">Update</Link>

                  <button className="btn btn-danger" onClick={() => handleDelete(appointment.id)}>Delete</button>
                  <button className="btn btn-primary">Show Details</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentList;
