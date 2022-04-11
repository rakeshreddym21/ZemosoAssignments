package com.springboot.assignmentdemo.service;

import com.springboot.assignmentdemo.dao.PatientRepository;
import com.springboot.assignmentdemo.dao.DoctorRepository;
import com.springboot.assignmentdemo.dao.ReportRepository;
import com.springboot.assignmentdemo.entity.Doctor;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringRunner;


import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
@RunWith(SpringRunner.class)
@SpringBootTest
class DoctorServiceImplTest {
    @Autowired
    private DoctorServiceImpl doctorService;

    @MockBean
    private ReportRepository reportRepository;
    @MockBean
    private PatientRepository patientRepository;
    @MockBean
    private DoctorRepository doctorRepository;
    @Test
    void findAllDoctors() {
        when(doctorRepository.findAll())
                .thenReturn(Stream.of(new Doctor(0,"Rakesh", "Surgeon",null), new Doctor(1,"Jeevan", "Physician",null)).collect(Collectors.toList()));

        assertEquals(2, doctorService.findAllDoctors().size());
    }

    @Test
    void findDoctorById() {
        Doctor doctor = new Doctor(0, "Rakesh", "Reddy", null);

        when(doctorRepository.findById(0)).thenReturn(Optional.of(doctor));

        assertEquals(doctor, doctorService.findDoctorById(0));
    }
    @Test
    void findDoctorByIdException() {
        Doctor doctor = new Doctor(0, "Rakesh", "Reddy", null);

        when(doctorRepository.findById(55)).thenReturn(Optional.of(doctor));

        assertThrows(RuntimeException.class,()-> doctorService.findDoctorById(0));
    }

    @Test
    void saveDoctor() {
        Doctor doctor = new Doctor(0, "Rakesh", "Reddy", null);
        doctorService.saveDoctor(doctor);
        verify(doctorRepository).save(doctor);
    }

    @Test
    void deleteDoctorById() {
        doctorService.deleteDoctorById(30);
        verify(doctorRepository).deleteById(30);
    }

    @Test
    void findPatients() {
        doctorService.findPatients(0);
        verify(patientRepository).findPatients(0);
    }
    @Test
    void findReports() {
        doctorService.findReports(0);
        verify(reportRepository).findReports(0);
    }

}