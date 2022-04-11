package com.springboot.assignmentdemo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Data
@Entity
@Table(name = "patient")
@NoArgsConstructor
@AllArgsConstructor
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;
    @Column(name="patient_name")
    @Size(min=3,message ="Error patient Name is Required of min 3")
    private String patientName;
    @Size(min=3,message ="It is invalid and min 3 char required")
    @Column(name="patient_address")
    private String patientAddress;
    @OneToOne(mappedBy = "patient",cascade =CascadeType.ALL)//Performs all cascade types except for removal i.e., deletion
    private  Report report;
    @ToString.Exclude
    @ManyToOne(cascade ={CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name = "doctor_id")
    private Doctor  doctor;

    public Patient(String patientName, String patientAddress) {
        this.patientName = patientName;
        this.patientAddress = patientAddress;
    }

    public Patient(int id, String patientName, String patientAddress, Doctor doctor) {
        this.id = id;
        this.patientName = patientName;
        this.patientAddress = patientAddress;
        this.doctor = doctor;
    }
}
