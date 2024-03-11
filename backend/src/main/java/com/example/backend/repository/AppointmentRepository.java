package com.example.backend.repository;

import com.example.backend.model.Appointment;
import com.example.backend.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, String> {
    List<Appointment> findByPatientEmailAndPatientName(String patientEmail, String patientName);

    List<Appointment> findByDoctor(Doctor doctor);


    Appointment getAppointmentById(String id);
}
