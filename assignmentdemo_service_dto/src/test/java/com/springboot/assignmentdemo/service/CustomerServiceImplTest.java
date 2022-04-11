package com.springboot.assignmentdemo.service;

import com.springboot.assignmentdemo.dao.CustomerRepository;
import com.springboot.assignmentdemo.entity.Customer;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringRunner;


import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
@RunWith(SpringRunner.class)
@SpringBootTest
class CustomerServiceImplTest {
    @Autowired
    private CustomerServiceImpl customerService;

    @MockBean
    private CustomerRepository customerRepository;


    @Test
    void findCustomerById() {
        Customer customer = new Customer(0, "Rakesh", "Reddy", null);

        when(customerRepository.findById(0)).thenReturn(Optional.of(customer));

        assertEquals(customer, customerService.findCustomerById(0));
    }
    @Test
    void findCustomerByIdException() {
        Customer customer = new Customer(0, "Rakesh", "Reddy", null);

        when(customerRepository.findById(2)).thenReturn(Optional.of(customer));

        assertThrows(RuntimeException.class, ()->customerService.findCustomerById(0));
    }

    @Test
    void saveCustomer() {
        Customer customer = new Customer(30, "Rakesh", "Reddy", null);
        customerService.saveCustomer(customer);
        verify(customerRepository).save(customer);
    }

    @Test
    void deleteCustomerById() {
        customerService.deleteCustomerById(30);
        verify(customerRepository).deleteById(30);
    }
    @Test
    void findAllCustomers() {
        when(customerRepository.findAll())
                .thenReturn(Stream.of(new Customer(0,"Rakesh", "Hyd",null), new Customer(1,"Jeevan", "VKB",null)).collect(Collectors.toList()));

        assertEquals(2, customerService.findAllCustomers().size());
    }

}