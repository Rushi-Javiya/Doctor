// import React, { useState, useEffect } from 'react';
// import './UpdatePatient.css';

// const UpdatePatient = ({ patientId }) => {
//     console.log(patientId)
//     const [patient, setPatient] = useState({
//         name: '',
//         email: '',
//         phoneNumber: '',
//         address: '',
//         dateOfBirth: ''
//     });

//     useEffect(() => {
//         // Fetch patient details when component mounts
//         fetch(`http://localhost:8080/patients/${patientId}`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch patient details');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setPatient(data);
//             })
//             .catch(error => console.log(error));
//     }, [patientId]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setPatient(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Update patient details
//         fetch(`http://localhost:8080/update/${patientId}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(patient),
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Failed to update patient');
//             }
//             // Handle successful update
//             console.log('Patient updated successfully');
//         })
//         .catch(error => console.log(error));
//     };

//     return (
//         <div className="container">
//             <h1>Patient Relationship Enhancement</h1>
//             <hr />
//             <h2>Update Patient</h2>

//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="name"
//                     value={patient.name}
//                     onChange={handleChange}
//                     placeholder="Patient Name"
//                     className="form-control mb-4 col-4"
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="email"
//                     value={patient.email}
//                     onChange={handleChange}
//                     placeholder="Patient Email"
//                     className="form-control mb-4 col-4"
//                 />
//                 <input
//                     type="text"
//                     name="phoneNumber"
//                     value={patient.phoneNumber}
//                     onChange={handleChange}
//                     placeholder="Patient Phone number"
//                     className="form-control mb-4 col-4"
//                 />
//                 <input
//                     type="text"
//                     name="address"
//                     value={patient.address}
//                     onChange={handleChange}
//                     placeholder="Patient Address"
//                     className="form-control mb-4 col-4"
//                 />
//                 <input
//                     type="date"
//                     name="dateOfBirth"
//                     value={patient.dateOfBirth}
//                     onChange={handleChange}
//                     className="form-control datepicker mb-4 col-2"
//                     placeholder="yyyy/mm/dd"
//                     pattern="\d{4}/\d{2}/\d{2}"
//                     title="Please enter a valid date in the format yyyy/mm/dd"
//                 />
//                 <button type="submit" className="btn btn-info col-2">Update Patient</button>
//             </form>
//             <hr />
//             <a href="/">Back to Patient List</a>
//         </div>
//     );
// };

// export default UpdatePatient;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams hook
import './UpdatePatient.css';

const UpdatePatient = () => {
    const { id } = useParams(); // Extract patientId from URL path

    const [patient, setPatient] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
        dateOfBirth: ''
    });

    useEffect(() => {
        // Fetch patient details when component mounts
        fetch(`http://localhost:8080/patients/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch patient details');
                }
                return response.json();
            })
            .then(data => {
                setPatient(data);
            })
            .catch(error => console.log(error));
    }, [id]); // Include id in dependency array

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatient(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update patient details
        fetch(`http://localhost:8080/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(patient),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update patient');
            }
            // Handle successful update
            console.log('Patient updated successfully');
        })
        .catch(error => console.log(error));
    };

    return (
        <div className="container">
            <h1>Patient Relationship Enhancement</h1>
            <hr />
            <h2>Update Patient</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={patient.name}
                    onChange={handleChange}
                    placeholder="Patient Name"
                    className="form-control mb-4 col-4"
                    required
                />
                <input
                    type="text"
                    name="email"
                    value={patient.email}
                    onChange={handleChange}
                    placeholder="Patient Email"
                    className="form-control mb-4 col-4"
                />
                <input
                    type="text"
                    name="phoneNumber"
                    value={patient.phoneNumber}
                    onChange={handleChange}
                    placeholder="Patient Phone number"
                    className="form-control mb-4 col-4"
                />
                <input
                    type="text"
                    name="address"
                    value={patient.address}
                    onChange={handleChange}
                    placeholder="Patient Address"
                    className="form-control mb-4 col-4"
                />
                <input
                    type="date"
                    name="dateOfBirth"
                    value={patient.dateOfBirth}
                    onChange={handleChange}
                    className="form-control datepicker mb-4 col-2"
                    placeholder="yyyy/mm/dd"
                    pattern="\d{4}/\d{2}/\d{2}"
                    title="Please enter a valid date in the format yyyy/mm/dd"
                />
                <button type="submit" className="btn btn-info col-2">Update Patient</button>
            </form>
            <hr />
            <a href="/patients">Back to Patient List</a>
        </div>
    );
};

export default UpdatePatient;
