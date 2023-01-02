package com.BeeHiveManagementSystem.BeeHiveManagementSystem.contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.ActiveCustomers;
import com.BeeHiveManagementSystem.BeeHiveManagementSystem.service.ActiveCustomersService;
import com.fasterxml.jackson.core.JsonProcessingException;

@RestController
@RequestMapping("/activecustomers")
@CrossOrigin
public class ActiveCustomersController{

    @Autowired
    private ActiveCustomersService activeCustomersService;

    @PostMapping("/addActiveCustomer")
    public void add(@RequestBody ActiveCustomers activeCustomers){
        activeCustomersService.newActiveCustomers(activeCustomers);
    }

    @GetMapping("/getAllActiveCustomers")
    public List<ActiveCustomers> getAllActiveCustomerss(){
        return activeCustomersService.getAllActiveCustomers();
    }
    @DeleteMapping("/deleteActiveCustomer/{email}")
    public ActiveCustomers delActiveCustomers(@PathVariable String email) throws JsonProcessingException{
        return activeCustomersService.delActiveCustomer(email);
}

}