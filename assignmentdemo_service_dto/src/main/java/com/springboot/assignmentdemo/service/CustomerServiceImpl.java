package com.springboot.assignmentdemo.service;

import com.springboot.assignmentdemo.dao.CustomerRepository;
import com.springboot.assignmentdemo.entity.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class CustomerServiceImpl implements CustomerService{
    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<Customer> findAllCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Customer findCustomerById(int theId) {
        Optional<Customer> theCustomer = customerRepository.findById(theId);
        if(theCustomer.isPresent())
        {
            return theCustomer.get();
        }
        else {
            throw new RuntimeException("Customer Not Found");
        }

    }

    @Override
    public void saveCustomer(Customer theCustomer) {
        customerRepository.save(theCustomer);
    }

    @Override
    public void deleteCustomerById(int theId) {
        customerRepository.deleteById(theId);
    }

}
