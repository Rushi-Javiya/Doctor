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


import React, { useState, useEffect } from 'react';
import './UpdateAppointment.css';
import { useParams } from 'react-router-dom';

const UpdateAppointment = () => {
    const { id } = useParams();

    const [doctors, setDoctors] = useState([]);
    const [patients, setPatients] = useState([]);
    const [appointment, setAppointment] = useState({
        appointmentDateTime: '',
        doctor: '',
        patient: '',
        appointmentStatus: 'Pending'
    });

    useEffect(() => {
        // Fetch doctors
        fetch('http://localhost:8080/doctors')
            .then(response => response.json())
            .then(data => setDoctors(data))
            .catch(error => console.log(error));

        // Fetch patients
        fetch('http://localhost:8080/patients')
            .then(response => response.json())
            .then(data => setPatients(data))
            .catch(error => console.log(error));

        // Fetch appointment details when component mounts
        fetch(`http://localhost:8080/appointments/${id}`)
            .then(response => response.json())
            .then(data => setAppointment(data))
            .catch(error => console.log(error));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAppointment(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update appointment details
        fetch(`http://localhost:8080/update-appointment/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(appointment),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update appointment');
            }
            // Handle successful update
            console.log('Appointment updated successfully');
        })
        .catch(error => console.log(error));
    };

    return (
        <div className="container">
            <h1>Doctor Relationship Enhancement</h1>
            <hr />
            <h2>Update Appointment</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="appointmentDateTime">Appointment Date and Time:</label>
                    <input
                        type="datetime-local"
                        id="appointmentDateTime"
                        className="form-control"
                        name="appointmentDateTime"
                        value={appointment.appointmentDateTime}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="doctor">Doctor:</label>
                    <select
                        id="doctor"
                        className="form-control"
                        name="doctor"
                        value={appointment.doctor}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a doctor</option>
                        {doctors.map(doctor => (
                            <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="patient">Patient:</label>
                    <select
                        id="patient"
                        className="form-control"
                        name="patient"
                        value={appointment.patient}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a patient</option>
                        {patients.map(patient => (
                            <option key={patient.id} value={patient.id}>{patient.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="appointmentStatus">Appointment Status:</label>
                    <select
                        id="appointmentStatus"
                        className="form-control"
                        name="appointmentStatus"
                        value={appointment.appointmentStatus}
                        onChange={handleChange}
                        required
                    >
                        <option value="Pending">Pending</option>
                        <option value="Done">Done</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
            <hr />
            <a href="/appointments">Back to Appointment List</a>
        </div>
    );
};

export default UpdateAppointment;
