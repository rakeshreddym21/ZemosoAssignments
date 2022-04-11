package com.springboot.assignmentdemo.service;

import com.springboot.assignmentdemo.dao.PatientRepository;
import com.springboot.assignmentdemo.dao.DoctorRepository;
import com.springboot.assignmentdemo.dao.ReportRepository;
import com.springboot.assignmentdemo.entity.Patient;
import com.springboot.assignmentdemo.entity.Doctor;
import com.springboot.assignmentdemo.entity.Report;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class DoctorServiceImpl implements DoctorService{
    @Autowired
    private PatientRepository patientRepository;
    @Autowired
    private ReportRepository reportRepository;
    @Autowired
    private DoctorRepository doctorRepository;
    @Override
    public List<Report> findReports(int theId) {
        return reportRepository.findReports(theId);
    }

    @Override
    public List<Doctor> findAllDoctors() {
        return doctorRepository.findAll();
    }

    @Override
    public Doctor findDoctorById(int theId) {
        Optional<Doctor> theDoctor = doctorRepository.findById(theId);
        if(theDoctor.isPresent())
        {
            return theDoctor.get();
        }
        else {
            throw new RuntimeException("Doctor Not Found with Id: " + theId);
        }
    }

    @Override
    public void saveDoctor(Doctor theDoctor) {
        doctorRepository.save(theDoctor);
    }

    @Override
    public void deleteDoctorById(int theId) {
        doctorRepository.deleteById(theId);
    }

    @Override
    public List<Patient> findPatients(int theId) {
        return patientRepository.findPatients(theId);
    }


}
