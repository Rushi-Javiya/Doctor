package com.example.backend.Controller;


import com.example.backend.model.Appointment;
import com.example.backend.model.Doctor;
import com.example.backend.model.Patient;
import com.example.backend.repository.AppointmentRepository;
import com.example.backend.repository.DoctorRepository;
import com.example.backend.repository.PatientRepository;
import com.example.backend.service.AppointmentService;
import com.example.backend.service.DoctorService;
import com.example.backend.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController

@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.OPTIONS,RequestMethod.DELETE,RequestMethod.PUT})
public class AppController {

    private final PatientService patientService;
    private final DoctorService doctorService;
    private final PatientRepository patientRepository;
    private  final DoctorRepository doctorRepository;
    private final AppointmentRepository appointmentRepository;

    @Autowired
    public AppController(PatientService patientService, DoctorService doctorService, PatientRepository patientRepository, DoctorRepository doctorRepository, AppointmentService appointmentService,AppointmentRepository appointmentRepository) {
        this.patientService = patientService;
        this.doctorService = doctorService;
        this.patientRepository = patientRepository;
        this.doctorRepository=doctorRepository;
        this.appointmentService=appointmentService;
        this.appointmentRepository=appointmentRepository;
    }

    @GetMapping("/")
    public String viewHome() {
        return "Home"; // Return the name of the HTML file for the home page
    }

    @GetMapping("/adlogin")
    public String adlogin() {
        return "LoginForm"; // Return the name of the HTML file for the login page
    }

    @GetMapping("/validate")
    public String validate(@RequestParam("email") String email, @RequestParam("password") String password) {
        if (email.equals("rushi@gmail.com") && password.equals("123")) {
            return "success"; // Or you can return a JSON response with a success message
        } else {
            return "failure"; // Or you can return a JSON response with a failure message
        }
    }

    @PostMapping("/savePatient")
    public Patient createPatient(@RequestBody Patient patient) {
        return patientService.createPatient(patient);
    }

    @GetMapping("/patients")
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    @GetMapping("/showpatient")
    public ResponseEntity<Patient> getPatientDetails(@RequestParam String email, @RequestParam String name) {
        System.out.println(email+name);
        Patient patient = patientService.getPatientByEmailAndName(email, name);
        if (patient != null) {
            return ResponseEntity.ok(patient);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @GetMapping("/patients/{id}")
    public ResponseEntity<Patient> getPatientById(@PathVariable Long id) {
        Optional<Patient> patientOptional = patientRepository.findById(id);
        return patientOptional.map(patient -> new ResponseEntity<>(patient, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("update/{id}")
    public ResponseEntity<?> updatePatient(@PathVariable Long id, @RequestBody Patient updatedPatient) {
        Optional<Patient> patientOptional = patientRepository.findById(id);
        if (!patientOptional.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        updatedPatient.setId(id); // Ensure the ID is set in the updated patient object
        patientRepository.save(updatedPatient);
        return ResponseEntity.ok().build();
    }



    @PostMapping("/savedoctor")
    public Doctor createDoctor(@RequestBody Doctor doctor) {
        return doctorService.createPatient(doctor);

    }
    @PostMapping("/login")
    public ResponseEntity<String> loginPatient(@RequestBody Patient patient) {
        // Check if the patient exists with the provided email and name
        if (patientService.authenticatePatient(patient.getEmail(), patient.getName())) {
            System.out.println(patient.getEmail()+patient.getName());
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Wrong email or name");
        }
    }
    @PostMapping("/login1")
    public ResponseEntity<String> logindoctor(@RequestBody Doctor doctor) {
        // Check if the patient exists with the provided email and name
        System.out.println(doctor.getEmail()+doctor.getPassword());

        if (doctorService.authenticateDoctor(doctor.getEmail(), doctor.getPassword())) {
           //System.out.println(doctor.getEmail()+doctor.getPassword());
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Wrong email or name");
        }
    }
    @GetMapping("/doctors")
    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteDoctor(@PathVariable Long id) {
        doctorRepository.deleteById(id);
    }

    @DeleteMapping("/delete1/{id}")
    public void deletePatient(@PathVariable Long id) {
        patientRepository.deleteById(id);
    }

    @GetMapping("/getDoctorDetails")
    public ResponseEntity<Doctor> getDoctorDetails(@RequestParam String email) {
        Doctor doctor = doctorService.getDoctorByEmail(email);
        if (doctor != null) {
            return ResponseEntity.ok(doctor);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @GetMapping("doctors/{id}")
    public ResponseEntity<Doctor> getDoctorById(@PathVariable Long id) {
        Optional<Doctor> doctor = doctorRepository.findById(id);
        return doctor.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/update-doctor/{id}")
    public ResponseEntity<Void> updateDoctor(@PathVariable Long id, @RequestBody Doctor doctor) {
        Optional<Doctor> existingDoctorOptional = doctorRepository.findById(id);
        if (existingDoctorOptional.isPresent()) {
            Doctor existingDoctor = existingDoctorOptional.get();
            existingDoctor.setName(doctor.getName());
            existingDoctor.setEmail(doctor.getEmail());
            existingDoctor.setPassword(doctor.getPassword());
            existingDoctor.setPhoneNumber(doctor.getPhoneNumber());
            existingDoctor.setSpecialization(doctor.getSpecialization());
            doctorRepository.save(existingDoctor);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }



    private final AppointmentService appointmentService;

    @PostMapping("/saveAppointment")
    public Appointment createAppointment(@RequestBody Appointment appointment) {
        return appointmentService.createAppointment(appointment);
    }

    @GetMapping("appointments")
    public List<Appointment> getAppointments() {
        return appointmentRepository.findAll();
    }
    @DeleteMapping("/delete2/{id}")
    public void deleteAppointment(@PathVariable String id) {
        appointmentRepository.deleteById(id);
    }

    @GetMapping("/showappointments")
    public ResponseEntity<List<Appointment>> getAppointmentsByPatientEmailAndName(@RequestParam String patientEmail, @RequestParam String patientName) {
        List<Appointment> appointments = appointmentService.getAppointmentsByPatientEmailAndName(patientEmail, patientName);
        if (appointments != null && !appointments.isEmpty()) {
            return ResponseEntity.ok(appointments);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @GetMapping("/getAppointments")
    public ResponseEntity<List<Appointment>> getAppointmentsForDoctor(@RequestParam String email) {
        List<Appointment> appointments = doctorService.getAppointmentsForDoctor(email);
        if (appointments != null) {
            return ResponseEntity.ok(appointments);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @PostMapping("/updateStatus/{id}")
    public ResponseEntity<?> updateAppointmentStatus(@PathVariable String id) {
        try {
            Optional<Appointment> optionalAppointment = appointmentRepository.findById(id);
            if (optionalAppointment.isEmpty()) {
                return ResponseEntity.notFound().build();
            }

            Appointment appointment = optionalAppointment.get();
            appointment.setAppointmentStatus("Done");
            appointmentRepository.save(appointment);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update appointment status");
        }
    }
    @GetMapping("appointments/{id}")
    public ResponseEntity<Appointment> getAppointmentById(@PathVariable String id) {
        System.out.println(id);
        Appointment appointment = appointmentRepository.getAppointmentById(id);
        if (appointment != null) {
            return ResponseEntity.ok(appointment);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/update-appointment/{id}")
    public ResponseEntity<Void> updateAppointment(@PathVariable String id, @RequestBody Appointment updatedAppointment) {
        Optional<Appointment> appointmentOptional = appointmentRepository.findById(id);
        System.out.println(id);

        if (appointmentOptional.isPresent()) {
            Appointment appointment = appointmentOptional.get();
            System.out.println(appointment.getAppointmentDateTime());

            appointment.setAppointmentDateTime(updatedAppointment.getAppointmentDateTime());
            appointment.setDoctor(updatedAppointment.getDoctor());
            appointment.setPatient(updatedAppointment.getPatient());
            appointment.setAppointmentStatus(updatedAppointment.getAppointmentStatus());
            appointmentRepository.save(appointment);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}



