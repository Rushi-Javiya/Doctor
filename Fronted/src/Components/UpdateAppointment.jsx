// // UpdateAppointment.jsx

// import React, { useState, useEffect } from 'react';
// import './UpdateAppointment.css';
// import { useParams } from 'react-router-dom';

// const UpdateAppointment = () => {
//     const { id } = useParams();

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

//     const [appointment, setAppointment] = useState({
//         appointmentDateTime: '',
//         doctor: '',
//         patient: '',
//         appointmentStatus: 'Pending'
//     });

//     useEffect(() => {
//         // Fetch appointment details when component mounts
//         fetch(`http://localhost:8080/appointments/${id}`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch appointment details');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setAppointment(data);
//                 console.log(appointment.doctor.name);
//                 console.log(appointment.patient.name)
//             })
//             .catch(error => console.log(error));
//     }, [id]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setAppointment(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Update appointment details
//         fetch(`http://localhost:8080/update-appointment/${id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(appointment),
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Failed to update appointment');
//             }
//             // Handle successful update
//             console.log('Appointment updated successfully');
//         })
//         .catch(error => console.log(error));
//     };

//     return (
//         <div className="container">
//             <h1>Doctor Relationship Enhancement</h1>
//             <hr />
//             <h2>Update Appointment</h2>

//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="appointmentDateTime">Appointment Date and Time:</label>
//                     <input
//                         type="datetime-local"
//                         id="appointmentDateTime"
//                         className="form-control"
//                         name="appointmentDateTime"
//                         value={appointment.appointmentDateTime}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="doctor">Doctor:</label>
//                     <select
//                         id="doctor"
//                         className="form-control"
//                         name="doctor"
//                         value={appointment.doctor.name}
//                         onChange={handleChange}
//                         required
//                     >
//                         {/* <option value="">Select a doctor</option> */}
//                         {/* Populate options with doctors data */}
//                         {doctors.map(doctor => (
//                                     <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
//                                 ))}
//                     </select>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="patient">Patient:</label>
//                     <select
//                         id="patient"
//                         className="form-control"
//                         name="patient"
//                         value={appointment.patient.name}
//                         onChange={handleChange}
//                         required
//                     >
//                         {/* <option value="">Select a patient</option> */}
//                         {/* Populate options with patients data */}
//                         {patients.map(patient => (
//                                     <option key={patient.id} value={patient.id}>{patient.name}</option>
//                                 ))}
//                     </select>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="appointmentStatus">Appointment Status:</label>
//                     <select
//                         id="appointmentStatus"
//                         className="form-control"
//                         name="appointmentStatus"
//                         value={appointment.appointmentStatus}
//                         onChange={handleChange}
//                         required
//                     >
//                         <option value="Pending">Pending</option>
//                         <option value="Done">Done</option>
//                     </select>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Update</button>
//             </form>
//             <hr />
//             <a href="/appointments">Back to Appointment List</a>
//         </div>
//     );
// };

// export default UpdateAppointment;


// import React, { useState, useEffect } from 'react';
// import './UpdateAppointment.css';
// import { useParams } from 'react-router-dom';

// const UpdateAppointment = () => {
//     const { id } = useParams();

//     const [doctors, setDoctors] = useState([]);
//     const [patients, setPatients] = useState([]);
//     const [appointment, setAppointment] = useState({
//         appointmentDateTime: '',
//         doctor: '',
//         patient: '',
//         appointmentStatus: 'Pending'
//     });

//     useEffect(() => {
//         // Fetch doctors
//         fetch('http://localhost:8080/doctors')
//             .then(response => response.json())
//             .then(data => setDoctors(data))
//             .catch(error => console.log(error));

//         // Fetch patients
//         fetch('http://localhost:8080/patients')
//             .then(response => response.json())
//             .then(data => setPatients(data))
//             .catch(error => console.log(error));

//         // Fetch appointment details when component mounts
//         fetch(`http://localhost:8080/appointments/${id}`)
//             .then(response => response.json())
//             .then(data => setAppointment(data))
//             .catch(error => console.log(error));
//     }, [id]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setAppointment(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Update appointment details
//         fetch(`http://localhost:8080/update-appointment/${id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(appointment),
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Failed to update appointment');
//             }
//             // Handle successful update
//             console.log('Appointment updated successfully');
//         })
//         .catch(error => console.log(error));
//     };

//     return (
//         <div className="container">
//             <h1>Doctor Relationship Enhancement</h1>
//             <hr />
//             <h2>Update Appointment</h2>

//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="appointmentDateTime">Appointment Date and Time:</label>
//                     <input
//                         type="datetime-local"
//                         id="appointmentDateTime"
//                         className="form-control"
//                         name="appointmentDateTime"
//                         value={appointment.appointmentDateTime}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="doctor">Doctor:</label>
//                     <select
//                         id="doctor"
//                         className="form-control"
//                         name="doctor"
//                         value={appointment.doctor}
//                         onChange={handleChange}
//                         required
//                     >
//                         <option value="">Select a doctor</option>
//                         {doctors.map(doctor => (
//                             <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
//                         ))}
//                     </select>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="patient">Patient:</label>
//                     <select
//                         id="patient"
//                         className="form-control"
//                         name="patient"
//                         value={appointment.patient}
//                         onChange={handleChange}
//                         required
//                     >
//                         <option value="">Select a patient</option>
//                         {patients.map(patient => (
//                             <option key={patient.id} value={patient.id}>{patient.name}</option>
//                         ))}
//                     </select>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="appointmentStatus">Appointment Status:</label>
//                     <select
//                         id="appointmentStatus"
//                         className="form-control"
//                         name="appointmentStatus"
//                         value={appointment.appointmentStatus}
//                         onChange={handleChange}
//                         required
//                     >
//                         <option value="Pending">Pending</option>
//                         <option value="Done">Done</option>
//                     </select>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Update</button>
//             </form>
//             <hr />
//             <a href="/appointments">Back to Appointment List</a>
//         </div>
//     );
// };

// export default UpdateAppointment;

import React, { useState, useEffect } from 'react';
import './UpdateAppointment.css'; // Import CSS file for styling
import { useParams } from 'react-router-dom';

const UpdateAppointment = () => {
    const { id } = useParams();

    const [appointment, setAppointment] = useState({
        appointmentDateTime: '',
        doctor: null,
        patient: null,
        appointmentStatus: 'pending'
    });

    const [doctors, setDoctors] = useState([]);
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        // Fetch appointment details
        fetch('http://localhost:8080/appointments/${id}')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch appointment details');
                }
                return response.json();
            })
            .then(data => {
                // Set the appointment state with the fetched data
                setAppointment({
                    appointmentDateTime: data.appointmentDateTime,
                    doctor: data.doctor ? data.doctor : null,
                    patient: data.patient ? data.patient : null,
                    appointmentStatus: data.appointmentStatus
                });
            })
            .catch(error => console.log(error));

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
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAppointment(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleDoctorChange = (e) => {
        const doctorId = e.target.value;
        const selectedDoctor = doctors.find(doctor => doctor.id.toString() === doctorId);
        setAppointment(prevState => ({
            ...prevState,
            doctor: selectedDoctor
        }));
    };

    const handlePatientChange = (e) => {
        const patientId = e.target.value;
        const selectedPatient = patients.find(patient => patient.id.toString() === patientId);
        setAppointment(prevState => ({
            ...prevState,
            patient: selectedPatient
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Ensure doctor and patient are selected
        if (!appointment.doctor || !appointment.patient) {
            console.error('Please select a doctor and a patient.');
            return;
        }

        // Create a new appointment object with the selected doctor and patient objects
        const formattedAppointment = {
            appointmentDateTime: appointment.appointmentDateTime,
            appointmentStatus: appointment.appointmentStatus,
            doctor: { id: appointment.doctor.id },
            patient: { id: appointment.patient.id }
        };

        fetch('http://localhost:8080/update-appointment/${id}', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formattedAppointment)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update appointment');
            }
            console.log('Appointment updated successfully');
        })
        .catch(error => console.error('Error updating appointment:', error));
    };

    return (
        <div className="appointment_container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="appointment_heading">Update Appointment</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="appointment_form-group">
                            <label htmlFor="appointmentDateTime">Appointment Date and Time:</label>
                            <input type="datetime-local" id="appointmentDateTime" className="appointment_input"
                                name="appointmentDateTime" value={appointment.appointmentDateTime} onChange={handleChange} required />
                        </div>
                        <div className="appointment_form-group">
                            <label htmlFor="doctor">Doctor:</label>
                            <select id="doctor" className="appointment_input" name="doctor" value={appointment.doctor ? appointment.doctor.id : ''} onChange={handleDoctorChange} required>
                                {doctors.map(doctor => (
                                    <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="appointment_form-group">
                            <label htmlFor="patient">Patient:</label>
                            <select id="patient" className="appointment_input" name="patient" value={appointment.patient ? appointment.patient.id : ''} onChange={handlePatientChange} required>
                                {patients.map(patient => (
                                    <option key={patient.id} value={patient.id}>{patient.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="appointment_form-group">
                            <label htmlFor="appointmentStatus">Appointment Status:</label>
                            <select id="appointmentStatus" className="appointment_input" name="appointmentStatus" value={appointment.appointmentStatus} onChange={handleChange} required>
                                <option value="pending">Pending</option>
                                <option value="done">Done</option>
                            </select>
                        </div>
                        <div className="appointment_form-group">
                            <button type="submit" className="appointment_btn btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateAppointment;