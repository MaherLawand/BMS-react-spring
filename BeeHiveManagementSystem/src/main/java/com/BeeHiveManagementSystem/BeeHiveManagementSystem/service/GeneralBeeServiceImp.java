package com.BeeHiveManagementSystem.BeeHiveManagementSystem.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.GeneralBees;
import com.BeeHiveManagementSystem.BeeHiveManagementSystem.repository.GeneralBeesRepository;

@Service
public class GeneralBeeServiceImp implements GeneralBeeService {
    
    @Autowired
    private GeneralBeesRepository generalBeesRepository;

    @Override
    public GeneralBees newGeneralBees(GeneralBees generalBees){
        return generalBeesRepository.save(generalBees);
    }
}
