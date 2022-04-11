package com.springboot.assignmentdemo.dao;

import com.springboot.assignmentdemo.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorRepository extends JpaRepository<Doctor,Integer> {

}
