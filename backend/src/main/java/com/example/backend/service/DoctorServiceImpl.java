package com.example.backend.service;



// PatientServiceImpl.java
import com.example.backend.model.Appointment;
import com.example.backend.model.Doctor;

import com.example.backend.model.Patient;
import com.example.backend.repository.AppointmentRepository;
import com.example.backend.repository.DoctorRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
class DoctorServiceImpl implements DoctorService {

    private final DoctorRepository doctorrepositary;
    private final AppointmentRepository appointmentRepository;

    @Autowired
    public DoctorServiceImpl(DoctorRepository doctorrepositary,AppointmentRepository appointmentRepository) {
        this.doctorrepositary = doctorrepositary;
        this.appointmentRepository=appointmentRepository;
    }

    @Override
    public Doctor createPatient(Doctor doctor) {
        return doctorrepositary.save(doctor);
    }
    public boolean authenticateDoctor(String email, String password) {
        // Check if the patient exists with the provided email and name
        Doctor doctor = doctorrepositary.findByEmailAndPassword(email,password);
        return doctor != null;
    }
    public Doctor getDoctorByEmail(String email) {
        return doctorrepositary.findByEmail(email);
    }

    public List<Appointment> getAppointmentsForDoctor(String email) {
        Doctor doctor = doctorrepositary.findByEmail(email);
        if (doctor != null) {
            return appointmentRepository.findByDoctor(doctor);
        }
        return null;
    }

    // Implement other methods as needed
}

