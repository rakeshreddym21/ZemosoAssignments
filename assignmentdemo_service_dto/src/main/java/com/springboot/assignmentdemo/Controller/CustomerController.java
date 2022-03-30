package com.springboot.assignmentdemo.Controller;

import com.springboot.assignmentdemo.converter.ReportConverter;
import com.springboot.assignmentdemo.dto.ReportDto;
import com.springboot.assignmentdemo.entity.Customer;
import com.springboot.assignmentdemo.entity.Report;
import com.springboot.assignmentdemo.service.CustomerServiceImpl;
import com.springboot.assignmentdemo.service.DoctorServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Controller
@RequestMapping("/customers")
public class CustomerController {
    @Autowired
    private ReportConverter reportConverter;
    @Autowired
    private CustomerServiceImpl customerService;
    @Autowired
    private DoctorServiceImpl doctorService;


    @RequestMapping("/list")
    public String listCustomers(Model theModel) {
        List<Customer> customers = customerService.findAllCustomers();
        theModel.addAttribute("customers", customers);
        return "customers/listCustomers";
    }
    @RequestMapping("/listNa")
    public String listCustomersNa(Model theModel) {
        List<Customer> customers = customerService.findAllCustomers();
        theModel.addAttribute("customers", customers);
        return "customers/listCustomersNa";
    }

    @GetMapping("/showFormForAdd")
    public String showFormForAdd(Model theModel) {

        // create model attribute to bind form data
        Customer theCustomer = new Customer();

        theModel.addAttribute("customer",theCustomer );

        return "customers/customerForm";
    }

    @GetMapping("/showFormForUpdate")
    public String showFormForUpdate(@RequestParam("customerId") int theId,
                                    Model theModel) {


        Customer customer = customerService.findCustomerById(theId);        // set employee as a model attribute to pre-populate the form
        theModel.addAttribute("customer", customer);

        // send over to our form
        return "customers/customerForm";
    }
    @GetMapping("/showFormForUpdateNa")
    public String showFormForUpdateNa(@RequestParam("customerId") int theId,
                                    Model theModel) {


        Customer customer = customerService.findCustomerById(theId);        // set employee as a model attribute to pre-populate the form
        theModel.addAttribute("customer", customer);

        // send over to our form
        return "customers/customerFormNa";
    }


    @PostMapping("/save")
    public String saveCustomer(@Valid @ModelAttribute("customer") Customer theCustomer, BindingResult bindingResult) {
        System.out.println(bindingResult);
       if(bindingResult.hasErrors())
       {
           return "customers/customerForm";
       }
        customerService.saveCustomer(theCustomer);
        return "redirect:/customers/list";
    }

    @PostMapping("/saveNa")
    public String saveCustomerNa(@Valid @ModelAttribute("customer") Customer theCustomer, BindingResult bindingResult) {
        System.out.println(bindingResult);
        if(bindingResult.hasErrors())
        {
            return "customers/customerFormNa";
        }
        customerService.saveCustomer(theCustomer);
        return "redirect:/customers/listNa";
    }

    @GetMapping("/delete")
    public String delete(@RequestParam("customerId") int theId) {


        customerService.deleteCustomerById(theId);

        // redirect to /employees/list
        return "redirect:/customers/list";


    }
    @GetMapping("/viewReports")
    public String viewPatients(@RequestParam("customerId") int theId,Model model) {
        List<Report> theReports=doctorService.findReports(theId);
        List<ReportDto> reports=reportConverter.entityToDto(theReports);
        model.addAttribute("reports",reports);
        return "customers/viewReports";

    }
}