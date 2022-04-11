package com.springboot.assignmentdemo.service;

import com.springboot.assignmentdemo.entity.Customer;

import java.util.List;

public interface CustomerService {
    List<Customer> findAllCustomers();

    Customer findCustomerById(int theId);

    void saveCustomer(Customer theCustomer);

    void deleteCustomerById(int theId);

}
