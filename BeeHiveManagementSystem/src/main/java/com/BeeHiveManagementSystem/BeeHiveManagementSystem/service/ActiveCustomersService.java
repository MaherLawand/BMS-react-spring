package com.BeeHiveManagementSystem.BeeHiveManagementSystem.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.ActiveCustomers;
import com.fasterxml.jackson.core.JsonProcessingException;

@Service
public interface ActiveCustomersService {
    
    public ActiveCustomers newActiveCustomers(ActiveCustomers activeCustomers);

    public List<ActiveCustomers> getAllActiveCustomers();
    
    public ActiveCustomers delActiveCustomer(String email) throws JsonProcessingException;
}
