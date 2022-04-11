package com.springboot.assignmentdemo.Controller;

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
@RequestMapping("/doctors")
public class DoctorController {

   // @Autowired
    //private HospitalManagementServiceImpl hospital;
    @Autowired
    private DoctorServiceImpl doctorService;
    @Autowired
    private ReportServiceImpl reportService;
    @Autowired
    private PatientServiceImpl patientService;


    @RequestMapping("/list")
    public String listDoctors(Model theModel) {
        List<Doctor> doctors = doctorService.findAllDoctors();
        theModel.addAttribute("doctors", doctors);
        return "doctors/listDoctors";
    }
    @RequestMapping("/listNa")
    public String listDoctorsNa(Model theModel) {
        List<Doctor> doctors = doctorService.findAllDoctors();
        theModel.addAttribute("doctors", doctors);
        return "doctors/listDoctorsNa";
    }

    @GetMapping("/showFormForAdd")
    public String showFormForAdd(Model theModel) {

        // create model attribute to bind form data
        Doctor theDoctor = new Doctor();

        theModel.addAttribute("doctor", theDoctor);

        return "doctors/doctorForm";
    }

    @GetMapping("/showFormForUpdate")
    public String showFormForUpdate(@RequestParam("doctorId") int theId,
                                    Model theModel) {

        Doctor doctor=doctorService.findDoctorById(theId);
        // set employee as a model attribute to pre-populate the form
        theModel.addAttribute("doctor", doctor);

        // send over to our form
        return "doctors/doctorForm";
    }
    @GetMapping("/showFormForUpdateNa")
    public String showFormForUpdateNa(@RequestParam("doctorId") int theId,
                                    Model theModel) {

        // get the employee from the service
        Doctor doctor=doctorService.findDoctorById(theId);
        // set employee as a model attribute to pre-populate the form
        theModel.addAttribute("doctor", doctor);

        // send over to our form
        return "doctors/doctorFormNa";
    }


    @PostMapping("/save")
    public String saveDoctor(@Valid @ModelAttribute("doctor") Doctor theDoctor, BindingResult bindingResult) {

        if(bindingResult.hasErrors())
        {
            return "doctors/doctorForm";
        }
        doctorService.saveDoctor(theDoctor);
        return "redirect:/doctors/list";
    }
    @PostMapping("/saveNa")
    public String saveDoctorNa(@Valid @ModelAttribute("doctor") Doctor theDoctor, BindingResult bindingResult) {
        System.out.println(bindingResult);
        if(bindingResult.hasErrors())
        {
            return "doctors/doctorFormNa";
        }
        doctorService.saveDoctor(theDoctor);

        // use a redirect to prevent duplicate submissions
        return "redirect:/doctors/listNa";
    }
    @PostMapping("/saveForm")
    public String saveForm(@ModelAttribute("report") Report theReport) {

        reportService.saveReport(theReport);

        // use a redirect to prevent duplicate submissions
        return "redirect:/doctors/viewReports";
    }
    @GetMapping("/delete")
    public String delete(@RequestParam("doctorId") int theId) {

         List<Patient> patients = patientService.findAllPatients();
        for (Patient patient : patients) {
            if(patient.getDoctor().getId()==theId){
                patient.setDoctor(null);

            }

        }
        doctorService.deleteDoctorById(theId);

        // redirect to /employees/list
        return "redirect:/doctors/list";

    }
    @GetMapping("/viewPatients")
    public String viewPatients(@RequestParam("doctorId") int theId,Model model) {

        // delete the employee
        List<Patient> patients =doctorService.findPatients(theId);
        model.addAttribute("patients", patients);
        return "doctors/listPatients";

    }
    @GetMapping("/viewReports")
    public String viewReports(@RequestParam("patientId") int theId,Model model) {

        List<Report> reports=doctorService.findReports(theId);
        model.addAttribute("reports",reports);
        return "doctors/viewReports";

    }
    @GetMapping("/showFormForReportUpdate")
    public String showFormForReportUpdate(@RequestParam("reportId") int theId,
                                    Model theModel) {

        // get the employee from the service
        Report report = reportService.findReportById(theId);
        // set employee as a model attribute to pre-populate the form
        theModel.addAttribute("report", report);

        // send over to our form
        return "doctors/reportForm";
    }
}