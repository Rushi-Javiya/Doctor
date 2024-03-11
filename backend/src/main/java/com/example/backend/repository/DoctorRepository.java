package com.example.backend.repository;



import com.example.backend.model.Doctor;
import com.example.backend.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {
    Doctor findByEmailAndPassword(String email, String password);

    Doctor findByEmail(String email);
}
