package com.example.backend.repository;

// PatientRepository.java

import com.example.backend.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient, Long> {
    Patient findByEmailAndName(String email, String name);

}

