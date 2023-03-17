package com.BeeHiveManagementSystem.BeeHiveManagementSystem.contoller;

import java.util.List;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Stock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    @DeleteMapping("/deleteActiveCustomer/")
    public ActiveCustomers delActiveCustomers(@RequestParam("email") String email,@RequestParam("id") int id) throws JsonProcessingException{
        return activeCustomersService.delActiveCustomer(email,id);
}

    @GetMapping("/getAllActiveCustomers/")
    public List<ActiveCustomers> findAllActiveCustomers(@RequestParam("id") int id) {
        return activeCustomersService.findAllActiveCustomers(id);
    }

}