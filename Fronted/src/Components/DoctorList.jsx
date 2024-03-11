// import React, { Component } from 'react';
// import './DoctorList.css'; // Import CSS file for styling

// class DoctorList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             listDoctors: []
//         };
//     }

//     componentDidMount() {
//         // Fetch data from backend API when component mounts
//         fetch('http://localhost:8080/doctors')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch data');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 if (Array.isArray(data)) {
//                     this.setState({ listDoctors: data });
//                 } else {
//                     throw new Error('Data received is not an array');
//                 }
//             })
//             .catch(error => console.log(error));
//     }

//     render() {
//         return (
//             <div className="patient-list-container">
//                 <h1>DoctorList</h1>
//                 <table className="table table-striped table-bordered custom-table">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Phone Number</th>
                            
//                             <th>Specialization</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.state.listDoctors.map(doctor => (          
    

//                             <tr key={doctor.id}>
//                                 <td>{doctor.id}</td>
//                                 <td>{doctor.name}</td>
//                                 <td>{doctor.email}</td>
//                                 <td>{doctor.phoneNumber}</td>
//                                 <td>{doctor.specialization}</td>
                                
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

// export default DoctorList;




import React, { Component } from 'react';
import './DoctorList.css'; 
import { Link } from 'react-router-dom';

class DoctorList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listDoctors: []
        };
    }

    componentDidMount() {
        // Fetch data from backend API when component mounts
        this.fetchDoctors();
    }

    fetchDoctors = () => {
        fetch('http://localhost:8080/doctors')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                if (Array.isArray(data)) {
                    this.setState({ listDoctors: data });
                } else {
                    throw new Error('Data received is not an array');
                }
            })
            .catch(error => console.log(error));
    }

    handleDelete = (id) => {
        fetch(`http://localhost:8080/delete/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete doctor');
            }
            // Refresh doctor list after deletion
            this.fetchDoctors();
        })
        .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="patient-list-container">
                <h1>DoctorList</h1>
                <table className="table table-striped table-bordered custom-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Specialization</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.listDoctors.map(doctor => (          
                            <tr key={doctor.id}>
                                <td>{doctor.id}</td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.phoneNumber}</td>
                                <td>{doctor.specialization}</td>
                                <td>
                                    <div className="btn-group">
                                        {/* <button className="btn btn-primary">Update</button> */}
                                        <Link to={`/update-doctor/${doctor.id}`} className="btn btn-primary">Update</Link>

                                        <button className="btn btn-danger" onClick={() => this.handleDelete(doctor.id)}>Delete</button>
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
}

export default DoctorList;

