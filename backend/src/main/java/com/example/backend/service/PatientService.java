package com.example.backend.service;

import com.example.backend.model.Patient;

// PatientService.java
public interface PatientService {
    Patient createPatient(Patient patient);
    public boolean authenticatePatient(String email, String name);

    public Patient getPatientByEmailAndName(String email, String name);

        // Define other methods for patient management (e.g., updatePatient, getPatientById, getAllPatients, etc.)
}
