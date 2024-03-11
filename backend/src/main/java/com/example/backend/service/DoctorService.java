package com.example.backend.service;

import com.example.backend.model.Appointment;
import com.example.backend.model.Doctor;
import com.example.backend.model.Patient;

import java.util.List;

public interface DoctorService {
    Doctor createPatient(Doctor doctor);
    public boolean authenticateDoctor(String email, String password);


    Doctor getDoctorByEmail(String email);

    public List<Appointment> getAppointmentsForDoctor(String email) ;

    }
