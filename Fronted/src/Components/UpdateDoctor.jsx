// UpdateDoctor.jsx

import React, { useState, useEffect } from 'react';
import './UpdateDoctor.css';
import { useParams } from 'react-router-dom';


const UpdateDoctor = () => {
    const { id } = useParams();
    const [doctor, setDoctor] = useState({
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
        specialization: ''
    });

    useEffect(() => {
        // Fetch doctor details when component mounts
        fetch(`http://localhost:8080/doctors/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch doctor details');
                }
                return response.json();
            })
            .then(data => {
                setDoctor(data);
            })
            .catch(error => console.log(error));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDoctor(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update doctor details
        fetch(`http://localhost:8080/update-doctor/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(doctor),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update doctor');
            }
            // Handle successful update
            console.log('Doctor updated successfully');
        })
        .catch(error => console.log(error));
    };

    return (
        <div className="container">
            <h1>Doctor Relationship Enhancement</h1>
            <hr />
            <h2>Update Doctor</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={doctor.name}
                    onChange={handleChange}
                    placeholder="Doctor Name"
                    className="form-control mb-4 col-4"
                    required
                />
                <input
                    type="text"
                    name="email"
                    value={doctor.email}
                    onChange={handleChange}
                    placeholder="Doctor Email"
                    className="form-control mb-4 col-4"
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={doctor.password}
                    onChange={handleChange}
                    placeholder="Doctor Password"
                    className="form-control mb-4 col-4"
                    required
                />
                <input
                    type="text"
                    name="phoneNumber"
                    value={doctor.phoneNumber}
                    onChange={handleChange}
                    placeholder="Doctor Phone number"
                    className="form-control mb-4 col-4"
                />
                <input
                    type="text"
                    name="specialization"
                    value={doctor.specialization}
                    onChange={handleChange}
                    placeholder="Doctor Specialization"
                    className="form-control mb-4 col-4"
                />
                <button type="submit" className="btn btn-info col-2">Update Doctor</button>
            </form>
            <hr />
            <a href="/doctors">Back to Doctor List</a>
        </div>
    );
};

export default UpdateDoctor;
