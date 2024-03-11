// // import React, { useState, useEffect } from 'react';
// // import './NewAppointment.css'; // Import CSS file for styling

// // const NewAppointment = () => {
// //     const [appointment, setAppointment] = useState({
// //         appointmentDateTime: '',
// //         doctor: '',
// //         patient: '',
// //         appointmentStatus: 'pending'
// //     });

// //     const [doctors, setDoctors] = useState([]);
// //     const [patients, setPatients] = useState([]);

// //     useEffect(() => {
// //         // Fetch doctors
// //         fetch('http://localhost:8080/doctors')
// //             .then(response => {
// //                 if (!response.ok) {
// //                     throw new Error('Failed to fetch doctors');
// //                 }
// //                 return response.json();
// //             })
// //             .then(data => setDoctors(data))
// //             .catch(error => console.log(error));

// //         // Fetch patients
// //         fetch('http://localhost:8080/patients')
// //             .then(response => {
// //                 if (!response.ok) {
// //                     throw new Error('Failed to fetch patients');
// //                 }
// //                 return response.json();
// //             })
// //             .then(data => setPatients(data))
// //             .catch(error => console.log(error));
// //     }, []);

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setAppointment(prevState => ({
// //             ...prevState,
// //             [name]: value
// //         }));
// //     };

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         // Implement logic to save appointment
// //         console.log(appointment);
// //     };

// //     return (
// //         <div className="container">
// //             <div className="row">
// //                 <div className="col-md-12">
// //                     <h1>New Appointment</h1>
// //                     <form onSubmit={handleSubmit}>
// //                         <div className="form-group">
// //                             <label htmlFor="appointmentDateTime">Appointment Date and Time:</label>
// //                             <input type="datetime-local" id="appointmentDateTime" className="form-control"
// //                                 name="appointmentDateTime" value={appointment.appointmentDateTime} onChange={handleChange} required />
// //                         </div>
// //                         <div className="form-group">
// //                             <label htmlFor="doctor">Doctor:</label>
// //                             <select id="doctor" className="form-control" name="doctor" value={appointment.doctor} onChange={handleChange} required>
// //                                 <option value="">Select a doctor</option>
// //                                 {doctors.map(doctor => (
// //                                     <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
// //                                 ))}
// //                             </select>
// //                         </div>
// //                         <div className="form-group">
// //                             <label htmlFor="patient">Patient:</label>
// //                             <select id="patient" className="form-control" name="patient" value={appointment.patient} onChange={handleChange} required>
// //                                 <option value="">Select a patient</option>
// //                                 {patients.map(patient => (
// //                                     <option key={patient.id} value={patient.id}>{patient.name}</option>
// //                                 ))}
// //                             </select>
// //                         </div>
// //                         <div className="form-group">
// //                             <label htmlFor="appointmentStatus">Appointment Status:</label>
// //                             <select id="appointmentStatus" className="form-control" name="appointmentStatus" value={appointment.appointmentStatus} onChange={handleChange} required>
// //                                 <option value="pending">Pending</option>
// //                             </select>
// //                         </div>
// //                         <button type="submit" className="btn btn-primary">Save</button>
// //                     </form>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default NewAppointment;




// import React, { useState, useEffect } from 'react';
// import './NewAppointment.css'; // Import CSS file for styling

// const NewAppointment = () => {
//     const [appointment, setAppointment] = useState({
//         appointmentDateTime: '',
//         doctor: '',
//         patient: '',
//         appointmentStatus: 'pending'
//     });

//     const [doctors, setDoctors] = useState([]);
//     const [patients, setPatients] = useState([]);

//     useEffect(() => {
//         // Fetch doctors
//         fetch('http://localhost:8080/doctors')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch doctors');
//                 }
//                 return response.json();
//             })
//             .then(data => setDoctors(data))
//             .catch(error => console.log(error));

//         // Fetch patients
//         fetch('http://localhost:8080/patients')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch patients');
//                 }
//                 return response.json();
//             })
//             .then(data => setPatients(data))
//             .catch(error => console.log(error));
//     }, []);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setAppointment(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Implement logic to save appointment
//         console.log(appointment);
//     };

//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-12">
//                     <h1>New Appointment</h1>
//                     <form onSubmit={handleSubmit}>
//                         <div className="form-group">
//                             <label htmlFor="appointmentDateTime">Appointment Date and Time:</label>
//                             <input type="datetime-local" id="appointmentDateTime" className="form-control"
//                                 name="appointmentDateTime" value={appointment.appointmentDateTime} onChange={handleChange} required />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="doctor">Doctor:</label>
//                             <select id="doctor" className="form-control" name="doctor" value={appointment.doctor} onChange={handleChange} required>
//                                 <option value="">Select a doctor</option>
//                                 {doctors.map(doctor => (
//                                     <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
//                                 ))}
//                             </select>
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="patient">Patient:</label>
//                             <select id="patient" className="form-control" name="patient" value={appointment.patient} onChange={handleChange} required>
//                                 <option value="">Select a patient</option>
//                                 {patients.map(patient => (
//                                     <option key={patient.id} value={patient.id}>{patient.name}</option>
//                                 ))}
//                             </select>
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="appointmentStatus">Appointment Status:</label>
//                             <select id="appointmentStatus" className="form-control" name="appointmentStatus" value={appointment.appointmentStatus} onChange={handleChange} required>
//                                 <option value="pending">Pending</option>
//                             </select>
//                         </div>
//                         <div className="form-group">
//                             <button type="submit" className="btn btn-primary">Save</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default NewAppointment;


// NewAppointment.js
// import React, { useState, useEffect } from 'react';
// import './NewAppointment.css'; // Import CSS file for styling

// const NewAppointment = () => {
//     const [appointment, setAppointment] = useState({
//         appointmentDateTime: '',
//         doctor: '',
//         patient: '',
//         appointmentStatus: 'pending'
//     });

//     const [doctors, setDoctors] = useState([]);
//     const [patients, setPatients] = useState([]);

//     useEffect(() => {
//         // Fetch doctors
//         fetch('http://localhost:8080/doctors')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch doctors');
//                 }
//                 return response.json();
//             })
//             .then(data => setDoctors(data))
//             .catch(error => console.log(error));

//         // Fetch patients
//         fetch('http://localhost:8080/patients')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch patients');
//                 }
//                 return response.json();
//             })
//             .then(data => setPatients(data))
//             .catch(error => console.log(error));
//     }, []);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setAppointment(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };
  
    

//     // const handleSubmit = (e) => {
//     //     e.preventDefault();
//     //     fetch('http://localhost:8080/saveAppointment', {
//     //         method: 'POST',
//     //         headers: {
//     //             'Content-Type': 'application/json'
//     //         },
//     //         body: JSON.stringify(appointment)
//     //     })
//     //     .then(response => response.json())
//     //     .then(data => {
//     //         console.log('Appointment saved:', data);
//     //         // Reset the form after successful submission
//     //         setAppointment({
//     //             appointmentDateTime: '',
//     //             doctor: '',
//     //             patient: '',
//     //             appointmentStatus: 'pending'
//     //         });
//     //     })
//     //     .catch(error => console.error('Error saving appointment:', error));
//     // };
//     const handleSubmit = (e) => {
//         e.preventDefault();
    
//         // Fetch doctors
//         fetch('http://localhost:8080/doctors')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch doctors');
//                 }
//                 return response.json();
//             })
//             .then(doctorData => {
//                 // Fetch patients
//                 fetch('http://localhost:8080/patients')
//                     .then(response => {
//                         if (!response.ok) {
//                             throw new Error('Failed to fetch patients');
//                         }
//                         return response.json();
//                     })
//                     .then(patientData => {
//                         // Find the selected doctor and patient objects
//                         const selectedDoctor = doctorData.find(doc => doc.id === appointment.doctor);
//                         const selectedPatient = patientData.find(pat => pat.id === appointment.patient);
//                         console.log(selectedDoctor,selectedPatient);
    
//                         // Create a new appointment object with the selected doctor and patient objects
//                         const formattedAppointment = {
//                             ...appointment,
//                             doctor: selectedDoctor,
//                             patient: selectedPatient
//                         };
    
//                         // Submit the appointment data to the backend
//                         fetch('http://localhost:8080/saveAppointment', {
//                             method: 'POST',
//                             headers: {
//                                 'Content-Type': 'application/json'
//                             },
//                             body: JSON.stringify(formattedAppointment)
//                         })
//                         .then(response => response.json())
//                         .then(data => {
//                             console.log('Appointment saved:', data);
//                             // Reset the form after successful submission
//                             setAppointment({
//                                 appointmentDateTime: '',
//                                 doctor: '',
//                                 patient: '',
//                                 appointmentStatus: 'pending'
//                             });
//                         })
//                         .catch(error => console.error('Error saving appointment:', error));
//                     })
//                     .catch(error => console.error('Failed to fetch patients:', error));
//             })
//             .catch(error => console.error('Failed to fetch doctors:', error));
//     };
    

//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-12">
//                     <h1>New Appointment</h1>
//                     <form onSubmit={handleSubmit}>
//                         <div className="form-group">
//                             <label htmlFor="appointmentDateTime">Appointment Date and Time:</label>
//                             <input type="datetime-local" id="appointmentDateTime" className="form-control"
//                                 name="appointmentDateTime" value={appointment.appointmentDateTime} onChange={handleChange} required />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="doctor">Doctor:</label>
//                             <select id="doctor" className="form-control" name="doctor" value={appointment.doctor} onChange={handleChange} required>
//                                 <option value="">Select a doctor</option>
//                                 {doctors.map(doctor => (
//                                     <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
//                                 ))}
//                             </select>
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="patient">Patient:</label>
//                             <select id="patient" className="form-control" name="patient" value={appointment.patient} onChange={handleChange} required>
//                                 <option value="">Select a patient</option>
//                                 {patients.map(patient => (
//                                     <option key={patient.id} value={patient.id}>{patient.name}</option>
//                                 ))}
//                             </select>
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="appointmentStatus">Appointment Status:</label>
//                             <select id="appointmentStatus" className="form-control" name="appointmentStatus" value={appointment.appointmentStatus} onChange={handleChange} required>
//                                 <option value="pending">Pending</option>
//                             </select>
//                         </div>
//                         <div className="form-group">
//                             <button type="submit" className="btn btn-primary">Save</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default NewAppointment;
// import React, { useState, useEffect } from 'react';
// import './NewAppointment.css'; // Import CSS file for styling

// const NewAppointment = () => {
//     const [appointment, setAppointment] = useState({
//         appointmentDateTime: '',
//         doctor: '',
//         patient: '',
//         appointmentStatus: 'pending'
//     });

//     const [doctors, setDoctors] = useState([]);
//     const [patients, setPatients] = useState([]);

//     useEffect(() => {
//         // Fetch doctors
//         fetch('http://localhost:8080/doctors')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch doctors');
//                 }
//                 return response.json();
//             })
//             .then(data => setDoctors(data))
//             .catch(error => console.log(error));

//         // Fetch patients
//         fetch('http://localhost:8080/patients')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch patients');
//                 }
//                 return response.json();
//             })
//             .then(data => setPatients(data))
//             .catch(error => console.log(error));
//     }, []);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setAppointment(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };
  
//     const handleSubmit = (e) => {
//         e.preventDefault();
    
//         // Find the selected doctor and patient objects
//         const selectedDoctor = doctors.find(doc => doc.id.toString() === appointment.doctor);
//         const selectedPatient = patients.find(pat => pat.id.toString() === appointment.patient);
    
//         // Create a new appointment object with the selected doctor and patient objects
//         const formattedAppointment = {
//             appointmentDateTime: appointment.appointmentDateTime,
//             appointmentStatus: appointment.appointmentStatus,
//             doctor: selectedDoctor ? { id: selectedDoctor.id } : null, // Send the doctor ID only
//             patient: selectedPatient ? { id: selectedPatient.id } : null // Send the patient ID only
//         };
    
//         fetch('http://localhost:8080/saveAppointment', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(formattedAppointment)
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log('Appointment saved:', data);
//             // Reset the form after successful submission
//             setAppointment({
//                 appointmentDateTime: '',
//                 doctor: '',
//                 patient: '',
//                 appointmentStatus: 'pending'
//             });
//         })
//         .catch(error => console.error('Error saving appointment:', error));
//     };
    
//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-12">
//                     <h1>New Appointment</h1>
//                     <form onSubmit={handleSubmit}>
//                         <div className="form-group">
//                             <label htmlFor="appointmentDateTime">Appointment Date and Time:</label>
//                             <input type="datetime-local" id="appointmentDateTime" className="form-control"
//                                 name="appointmentDateTime" value={appointment.appointmentDateTime} onChange={handleChange} required />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="doctor">Doctor:</label>
//                             <select id="doctor" className="form-control" name="doctor" value={appointment.doctor} onChange={handleChange} required>
//                                 <option value="">Select a doctor</option>
//                                 {doctors.map(doctor => (
//                                     <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
//                                 ))}
//                             </select>
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="patient">Patient:</label>
//                             <select id="patient" className="form-control" name="patient" value={appointment.patient} onChange={handleChange} required>
//                                 <option value="">Select a patient</option>
//                                 {patients.map(patient => (
//                                     <option key={patient.id} value={patient.id}>{patient.name}</option>
//                                 ))}
//                             </select>
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="appointmentStatus">Appointment Status:</label>
//                             <select id="appointmentStatus" className="form-control" name="appointmentStatus" value={appointment.appointmentStatus} onChange={handleChange} required>
//                                 <option value="pending">Pending</option>
//                             </select>
//                         </div>
//                         <div className="form-group">
//                             <button type="submit" className="btn btn-primary">Save</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default NewAppointment;


// NewAppointment.js
import React, { useState, useEffect } from 'react';
import './NewAppointment.css'; // Import CSS file for styling

const NewAppointment = () => {
    const [appointment, setAppointment] = useState({
        appointmentDateTime: '',
        doctor: '',
        patient: '',
        appointmentStatus: 'pending'
    });

    const [doctors, setDoctors] = useState([]);
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        // Fetch doctors
        fetch('http://localhost:8080/doctors')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch doctors');
                }
                return response.json();
            })
            .then(data => setDoctors(data))
            .catch(error => console.log(error));

        // Fetch patients
        fetch('http://localhost:8080/patients')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch patients');
                }
                return response.json();
            })
            .then(data => setPatients(data))
            .catch(error => console.log(error));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAppointment(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Find the selected doctor and patient objects
        const selectedDoctor = doctors.find(doc => doc.id.toString() === appointment.doctor);
        const selectedPatient = patients.find(pat => pat.id.toString() === appointment.patient);
    
        // Create a new appointment object with the selected doctor and patient objects
        const formattedAppointment = {
            appointmentDateTime: appointment.appointmentDateTime,
            appointmentStatus: appointment.appointmentStatus,
            doctor: selectedDoctor ? { id: selectedDoctor.id } : null, // Send the doctor ID only
            patient: selectedPatient ? { id: selectedPatient.id } : null // Send the patient ID only
        };
    
        fetch('http://localhost:8080/saveAppointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formattedAppointment)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Appointment saved:', data);
            // Reset the form after successful submission
            setAppointment({
                appointmentDateTime: '',
                doctor: '',
                patient: '',
                appointmentStatus: 'pending'
            });
        })
        .catch(error => console.error('Error saving appointment:', error));
    };
    
    return (
        <div className="appointment_container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="appointment_heading">New Appointment</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="appointment_form-group">
                            <label htmlFor="appointmentDateTime">Appointment Date and Time:</label>
                            <input type="datetime-local" id="appointmentDateTime" className="appointment_input"
                                name="appointmentDateTime" value={appointment.appointmentDateTime} onChange={handleChange} required />
                        </div>
                        <div className="appointment_form-group">
                            <label htmlFor="doctor">Doctor:</label>
                            <select id="doctor" className="appointment_input" name="doctor" value={appointment.doctor} onChange={handleChange} required>
                                <option value="">Select a doctor</option>
                                {doctors.map(doctor => (
                                    <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="appointment_form-group">
                            <label htmlFor="patient">Patient:</label>
                            <select id="patient" className="appointment_input" name="patient" value={appointment.patient} onChange={handleChange} required>
                                <option value="">Select a patient</option>
                                {patients.map(patient => (
                                    <option key={patient.id} value={patient.id}>{patient.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="appointment_form-group">
                            <label htmlFor="appointmentStatus">Appointment Status:</label>
                            <select id="appointmentStatus" className="appointment_input" name="appointmentStatus" value={appointment.appointmentStatus} onChange={handleChange} required>
                                <option value="pending">Pending</option>
                            </select>
                        </div>
                        <div className="appointment_form-group">
                            <button type="submit" className="appointment_btn btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewAppointment;
