package com.springboot.assignmentdemo.service;

import com.springboot.assignmentdemo.dao.PatientRepository;
import com.springboot.assignmentdemo.entity.Patient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class PatientServiceImpl implements PatientService {
    @Autowired
    private PatientRepository patientRepository;

    @Override
    public List<Patient> findAllPatients() {
        return patientRepository.findAll();
    }

    @Override
    public Patient findPatientById(int theId) {
        Optional<Patient> thePatient = patientRepository.findById(theId);
        if(thePatient.isPresent())
        {
            return thePatient.get();
        }
        else {
            throw new RuntimeException("Patient Not Found");
        }

    }

    @Override
    public Patient savePatient(Patient thePatient) {
        patientRepository.save(thePatient);
        return thePatient;
    }

    @Override
    public void deletePatientById(int theId) {
        patientRepository.deleteById(theId);
    }

}
