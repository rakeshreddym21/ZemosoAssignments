package com.springboot.assignmentdemo.dao;

import com.springboot.assignmentdemo.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PatientRepository extends JpaRepository<Patient,Integer> {
    @Query(value = "select * from patient where doctor_id= :doctorId",nativeQuery = true)
    List<Patient> findPatients(@Param("doctorId")int doctorId);
}
