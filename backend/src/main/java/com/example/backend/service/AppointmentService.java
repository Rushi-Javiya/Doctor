package com.example.backend.service;

import com.example.backend.model.Appointment;

import java.util.List;

public interface AppointmentService {
    Appointment createAppointment(Appointment appointment);
    public List<Appointment> getAppointmentsByPatientEmailAndName(String patientEmail, String patientName) ;



}
