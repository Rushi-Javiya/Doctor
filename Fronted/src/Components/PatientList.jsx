// import React, { Component } from 'react';
// import './PatientList.css'; // Import CSS file for styling

// class PatientList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             listPatients: []
//         };
//     }

//     componentDidMount() {
//         // Fetch data from backend API when component mounts
//         fetch('http://localhost:8080/patients')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch data');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 if (Array.isArray(data)) {
//                     this.setState({ listPatients: data });
//                 } else {
//                     throw new Error('Data received is not an array');
//                 }
//             })
//             .catch(error => console.log(error));
//     }

//     render() {
//         return (
//             <div className="patient-list-container">
//                 <h1>Patient List</h1>
//                 <table className="table table-striped table-bordered custom-table">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Phone Number</th>
//                             <th>Address</th>
//                             <th>Date of Birth</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.state.listPatients.map(patient => (
//                             <tr key={patient.id}>
//                                 <td>{patient.id}</td>
//                                 <td>{patient.name}</td>
//                                 <td>{patient.email}</td>
//                                 <td>{patient.phoneNumber}</td>
//                                 <td>{patient.address}</td>
//                                 <td>{patient.dateOfBirth}</td>
//                                 <td>
//                                     <div className="btn-group">
//                                         <button className="btn btn-primary">Update</button>
//                                         <button className="btn btn-danger">Delete</button>
//                                         <button className="btn btn-primary">Show Details</button>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }
// }

// export default PatientList;


import React, { Component } from 'react';
import './PatientList.css'; 
import { Link } from 'react-router-dom';// Import CSS file for styling

class PatientList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listPatients: []
        };
    }

    componentDidMount() {
        // Fetch data from backend API when component mounts
        fetch('http://localhost:8080/patients')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                if (Array.isArray(data)) {
                    this.setState({ listPatients: data });
                } else {
                    throw new Error('Data received is not an array');
                }
            })
            .catch(error => console.log(error));
    }

    handleDelete(id) {
        fetch(`http://localhost:8080/delete1/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete patient');
            }
            // Update state after successful deletion
            this.setState(prevState => ({
                listPatients: prevState.listPatients.filter(patient => patient.id !== id)
            }));
        })
        .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="patient-list-container">
                <h1>Patient List</h1>
                <table className="table table-striped table-bordered custom-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th>Date of Birth</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.listPatients.map(patient => (
                            <tr key={patient.id}>
                                <td>{patient.id}</td>
                                <td>{patient.name}</td>
                                <td>{patient.email}</td>
                                <td>{patient.phoneNumber}</td>
                                <td>{patient.address}</td>
                                <td>{patient.dateOfBirth}</td>
                                <td>
                                    <div className="btn-group">
                                        {/* <button className="btn btn-primary">Update</button> */}
                                        <Link to={`/update-patient/${patient.id}`} className="btn btn-primary">Update</Link>

                                        <button className="btn btn-danger" onClick={() => this.handleDelete(patient.id)}>Delete</button>
                                        <button className="btn btn-primary" >Show Details</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PatientList;

