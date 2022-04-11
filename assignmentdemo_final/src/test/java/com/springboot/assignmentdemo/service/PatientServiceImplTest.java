package com.springboot.assignmentdemo.service;

import com.springboot.assignmentdemo.dao.PatientRepository;
import com.springboot.assignmentdemo.entity.Patient;
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
class PatientServiceImplTest {
    @Autowired
    private PatientServiceImpl patientService;

    @MockBean
    private PatientRepository patientRepository;


    @Test
    void findPatientById() {
        Patient patient = new Patient(0, "Rakesh", "Reddy", null);

        when(patientRepository.findById(0)).thenReturn(Optional.of(patient));

        assertEquals(patient, patientService.findPatientById(0));
    }
    @Test
    void findPatientByIdException() {
        Patient patient = new Patient(0, "Rakesh", "Reddy", null);

        when(patientRepository.findById(2)).thenReturn(Optional.of(patient));

        assertThrows(RuntimeException.class, ()-> patientService.findPatientById(0));
    }

    @Test
    void savePatient() {
        Patient patient = new Patient(30, "Rakesh", "Reddy", null);
        patientService.savePatient(patient);
        verify(patientRepository).save(patient);
    }

    @Test
    void deletePatientById() {
        patientService.deletePatientById(30);
        verify(patientRepository).deleteById(30);
    }
    @Test
    void findAllPatients() {
        when(patientRepository.findAll())
                .thenReturn(Stream.of(new Patient(0,"Rakesh", "Hyd",null), new Patient(1,"Jeevan", "VKB",null)).collect(Collectors.toList()));

        assertEquals(2, patientService.findAllPatients().size());
    }

}