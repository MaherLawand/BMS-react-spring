package com.BeeHiveManagementSystem.BeeHiveManagementSystem.service;

import org.springframework.stereotype.Service;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.GeneralBees;

@Service
public interface GeneralBeeService {
    
    public GeneralBees newGeneralBees(GeneralBees generalBee);


}
