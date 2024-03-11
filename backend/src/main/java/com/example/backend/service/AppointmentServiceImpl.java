package com.example.backend.service;

import com.example.backend.model.Appointment;

import com.example.backend.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentServiceImpl implements AppointmentService {
    private final AppointmentRepository appointmentRepository;

    @Autowired
    public AppointmentServiceImpl(AppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    public Appointment createAppointment(Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    public List<Appointment> getAppointmentsByPatientEmailAndName(String patientEmail, String patientName) {
        // Implement logic to fetch appointments by patient's email and name
        // This could involve querying the database using a JPA repository
        return appointmentRepository.findByPatientEmailAndPatientName(patientEmail, patientName);
    }
}
