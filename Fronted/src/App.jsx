import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./Components/Home"
import LoginForm from './Components/LoginForm';
import Admin from './Components/Admin';
import NewPatientForm from './Components/NewPatientForm';
import DoctorForm from './Components/DoctorForm';
import PatientList from './Components/PatientList';
import DoctorList from './Components/DoctorList';
import NewAppointment from './Components/Newappointment';
import AppointmentList from './Components/AppointmentList';
import PatientLoginPage from './Components/PatientLoginPage';
import PatientPage from './Components/PatientPage';
import DoctorLoginPage from './Components/DoctorLoginpage';
import DoctorPage from './Components/DoctorPage';
import UpdatePatient from './Components/UpdatePatient';
import UpdateDoctor from './Components/UpdateDoctor';
import UpdateAppointment from './Components/UpdateAppointment';



function App() {
  

  return (
    <>
     <Router>
      <div className="app">
      

        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route path="/adlogin" element={<LoginForm />} />
          <Route path="/newpatient" element={<NewPatientForm />} />

          <Route path="/admin" element={<Admin />} /> {/* Add this route for the admin page */}
          <Route path="/newdoctor" element={<DoctorForm />} />
          <Route path='/patients' element={<PatientList />} />
          <Route path='/doctors' element={<DoctorList />} />
          <Route path='/newappointment' element={<NewAppointment />} />
          <Route path='/appointments' element={<AppointmentList />} />
          <Route path='/patientlogin' element={<PatientLoginPage />} />
          <Route path='/patientpage' element={<PatientPage />} />
          <Route path='/doctorlogin' element={<DoctorLoginPage />} />
          <Route path='/doctorpage' element={<DoctorPage />} />
          <Route path="/update-patient/:id" element={<UpdatePatient/>} />
          <Route path="/update-doctor/:id" element={<UpdateDoctor />} />
          <Route path="/update-appointment/:id" element={<UpdateAppointment />} />





          



        </Routes>
      </div>
    </Router>
      
    </>
  )
}

export default App
