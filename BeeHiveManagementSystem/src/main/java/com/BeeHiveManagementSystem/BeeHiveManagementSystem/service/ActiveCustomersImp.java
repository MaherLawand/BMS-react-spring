package com.BeeHiveManagementSystem.BeeHiveManagementSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.ActiveCustomers;
import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.BannedCustomers;
import com.BeeHiveManagementSystem.BeeHiveManagementSystem.repository.ActiveCustomersRepository;
import com.BeeHiveManagementSystem.BeeHiveManagementSystem.repository.BannedCustomersRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class ActiveCustomersImp implements ActiveCustomersService{
    
    @Autowired
    private ActiveCustomersRepository activeCustomersRepository;
    @Autowired
    private BannedCustomersRepository bannedCustomersRepository;

    @Override
    public ActiveCustomers newActiveCustomers(ActiveCustomers activeCustomers){
        List<ActiveCustomers> AllActiveCustomers= getAllActiveCustomers();
        for(int i=0;i<AllActiveCustomers.size();i++){
            if(AllActiveCustomers.get(i).getEmail().equals(activeCustomers.getEmail())){
                return null;
            }
        }
        activeCustomers.setBanned(false);
        return activeCustomersRepository.save(activeCustomers);
    }
    @Override
    public List<ActiveCustomers> getAllActiveCustomers(){
        return activeCustomersRepository.findAll();
    }
    @Override
    public ActiveCustomers delActiveCustomer(String email) throws JsonProcessingException{
        List<ActiveCustomers> activecustomers= activeCustomersRepository.findAll();;
        ActiveCustomers temp=null;
        for(int i=0;i<activecustomers.size();i++){
            if(activecustomers.get(i).getEmail().equals(email)){
                temp = activecustomers.get(i);
            }
        }
        activeCustomersRepository.delete(temp);
        ObjectMapper mapper = new ObjectMapper();
        String jsonString = mapper.writeValueAsString(temp);
        BannedCustomers banned = mapper.readValue(jsonString, BannedCustomers.class);
        banned.setBanned(true);
        bannedCustomersRepository.save(banned);
        return temp;
    }

}
