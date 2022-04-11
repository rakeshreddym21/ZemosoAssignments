package com.springboot.assignmentdemo.service;

import com.springboot.assignmentdemo.entity.Patient;

import java.util.List;

public interface PatientService {
    List<Patient> findAllPatients();

    Patient findPatientById(int theId);

    Patient savePatient(Patient thePatient);

    void deletePatientById(int theId);

}
