package com.springboot.assignmentdemo.Controller;

import com.springboot.assignmentdemo.converter.ReportConverter;
import com.springboot.assignmentdemo.dto.ReportDto;
import com.springboot.assignmentdemo.entity.Patient;
import com.springboot.assignmentdemo.entity.Doctor;
import com.springboot.assignmentdemo.entity.Report;
import com.springboot.assignmentdemo.service.PatientServiceImpl;
import com.springboot.assignmentdemo.service.DoctorServiceImpl;
import com.springboot.assignmentdemo.service.ReportServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Controller
@RequestMapping("/patients")
public class PatientController {
    @Autowired
    private ReportConverter reportConverter;
    @Autowired
    private PatientServiceImpl patientService;
    @Autowired
    private DoctorServiceImpl doctorService;
    @Autowired
    private ReportServiceImpl reportService;


    @RequestMapping(value = "/list")
    public String listPatients(Model theModel) {
        List<Patient> patients = patientService.findAllPatients();
        theModel.addAttribute("patients", patients);
        return "patients/listPatients";
    }
    @RequestMapping("/listNa")
    public String listPatientsNa(Model theModel) {
        List<Patient> patients = patientService.findAllPatients();
        theModel.addAttribute("patients", patients);
        return "patients/listPatientsNa";
    }
    @GetMapping("/showFormForAdd")
    public String showFormForAdd(Model theModel) {

        // create model attribute to bind form data
        Patient thePatient = new Patient();
        List<Doctor> doctors = doctorService.findAllDoctors();
        theModel.addAttribute("doctors", doctors);
        theModel.addAttribute("patient", thePatient);

        return "patients/patientForm";
    }

    @GetMapping("/showFormForUpdate")
    public String showFormForUpdate(@RequestParam("patientId") int theId,
                                    Model theModel) {


        Patient patient = patientService.findPatientById(theId);        // set employee as a model attribute to pre-populate the form
        theModel.addAttribute("patient", patient);
        List<Doctor> doctors = doctorService.findAllDoctors();
        theModel.addAttribute("doctors", doctors);

        // send over to our form
        return "patients/patientForm";
    }
    @GetMapping("/showFormForUpdateNa")
    public String showFormForUpdateNa(@RequestParam("patientId") int theId,
                                    Model theModel) {


        Patient patient = patientService.findPatientById(theId);        // set employee as a model attribute to pre-populate the form
        theModel.addAttribute("patient", patient);

        // send over to our form
        return "patients/patientFormNa";
    }


    @PostMapping("/save")
    public String savePatient(@Valid @ModelAttribute("patient") Patient thePatient, BindingResult bindingResult, Model theModel) {
        System.out.println(bindingResult);
       if(bindingResult.hasErrors())
       {
           List<Doctor> doctors = doctorService.findAllDoctors();
           theModel.addAttribute("doctors", doctors);
           return "patients/patientForm";
       }
      Patient patient =  patientService.savePatient(thePatient);
        System.out.println(patient);
       List<Report> reports=reportService.findAllReports();
       boolean flag=false;
        for (Report report:reports) {
            if(report.getPatient().getId()== patient.getId()) {
                System.out.println(report.getPatient());
                flag = true;
                break;
            }
        }
        if(flag==false){
       Report report=new Report("Not yet diagnosed","Not yet prescribed", patient);
       reportService.saveReport(report);}
        return "redirect:/patients/list";
    }

    @PostMapping("/saveNa")
    public String savePatientNa(@Valid @ModelAttribute("patient") Patient thePatient, BindingResult bindingResult) {
        if(bindingResult.hasErrors())
        {
            return "patients/patientFormNa";
        }
        patientService.savePatient(thePatient);
        return "redirect:/patients/listNa";
    }

    @GetMapping ("/delete")
    public String delete(@RequestParam("patientId") int theId) {


        patientService.deletePatientById(theId);

   return "redirect:/patients/list";



    }
    @GetMapping("/viewReports")
    public String viewPatients(@RequestParam("patientId") int theId,Model model) {
        List<Report> theReports=doctorService.findReports(theId);
        List<ReportDto> reports=reportConverter.entityToDto(theReports);
        model.addAttribute("reports",reports);
        return "patients/viewReports";

    }
}