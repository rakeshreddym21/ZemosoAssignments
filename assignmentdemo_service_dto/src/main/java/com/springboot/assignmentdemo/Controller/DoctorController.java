package com.springboot.assignmentdemo.Controller;

import com.springboot.assignmentdemo.entity.Customer;
import com.springboot.assignmentdemo.entity.Doctor;
import com.springboot.assignmentdemo.entity.Report;
import com.springboot.assignmentdemo.service.CustomerServiceImpl;
import com.springboot.assignmentdemo.service.DoctorServiceImpl;
import com.springboot.assignmentdemo.service.ReportServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

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
    public String saveDoctor(@ModelAttribute("doctor") Doctor theDoctor) {

        // save the employee
        doctorService.saveDoctor(theDoctor);

        // use a redirect to prevent duplicate submissions
        return "redirect:/doctors/list";
    }
    @PostMapping("/saveNa")
    public String saveDoctorNa(@ModelAttribute("doctor") Doctor theDoctor) {

        // save the employee
        doctorService.saveDoctor(theDoctor);

        // use a redirect to prevent duplicate submissions
        return "redirect:/doctors/listNa";
    }
    @PostMapping("/saveForm")
    public String saveForm(@ModelAttribute("report") Report theReport) {

        // save the employee
        reportService.saveReport(theReport);

        // use a redirect to prevent duplicate submissions
        return "redirect:/doctors/viewReports";
    }
    @GetMapping("/delete")
    public String delete(@RequestParam("doctorId") int theId) {

        // delete the employee
        doctorService.deleteDoctorById(theId);

        // redirect to /employees/list
        return "redirect:/doctors/list";

    }
    @GetMapping("/viewPatients")
    public String viewPatients(@RequestParam("doctorId") int theId,Model model) {

        // delete the employee
        List<Customer> customers=doctorService.findPatients(theId);
        model.addAttribute("customers",customers);
        return "doctors/listPatients";

    }
    @GetMapping("/viewReports")
    public String viewReports(@RequestParam("customerId") int theId,Model model) {

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