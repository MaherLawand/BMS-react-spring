package com.BeeHiveManagementSystem.BeeHiveManagementSystem.contoller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.GeneralBees;
import com.BeeHiveManagementSystem.BeeHiveManagementSystem.service.GeneralBeeService;

@RestController
@RequestMapping("/generalbee")
@CrossOrigin
public class GeneralBeesController{

    @Autowired
    private GeneralBeeService generalBeeService;

    @PostMapping("/addGeneralBee")
    public void add(@RequestBody GeneralBees GeneralBee){
        generalBeeService.newGeneralBees(GeneralBee);
    }
}
