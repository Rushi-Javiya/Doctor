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

    @Override
    public Appointment createAppointment(Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    @Override
    public List<Appointment> getAppointmentsByPatientEmailAndName(String patientEmail, String patientName) {
        // Note: If Appointment entity doesn't have separate fields for email and name,
        // you might need to adjust this method or ensure repository supports this kind of query
        return appointmentRepository.findByPatientEmailAndPatientName(patientEmail, patientName);
    }
}
