package com.springboot.assignmentdemo.dto;

import com.springboot.assignmentdemo.entity.Patient;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.validation.constraints.Size;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReportDto {
    private int id;
    @Size(min=3,message ="Error Diagnosis Report is Required of min 3")
    private String diagnosisReport;
    @Size(min=3,message ="Error Prescription  is Required of min 3")
    private String prescription;
    @ToString.Exclude
    private Patient patient;

    public ReportDto(String diagnosisReport, String prescription) {
        this.diagnosisReport = diagnosisReport;
        this.prescription = prescription;
        this.patient = patient;
    }
}
