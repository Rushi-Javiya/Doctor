package com.example.backend.service;

// PatientServiceImpl.java
import com.example.backend.model.Patient;
import com.example.backend.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
class PatientServiceImpl implements PatientService {

    private final PatientRepository patientRepository;

    @Autowired
    public PatientServiceImpl(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    @Override
    public Patient createPatient(Patient patient) {
        return patientRepository.save(patient);
    }



    public boolean authenticatePatient(String email, String name) {
        // Check if the patient exists with the provided email and name
        Patient patient = patientRepository.findByEmailAndName(email, name);
        return patient != null;
    }

    public Patient getPatientByEmailAndName(String email, String name) {
        return patientRepository.findByEmailAndName(email, name);
    }

    // Implement other methods as needed
}

