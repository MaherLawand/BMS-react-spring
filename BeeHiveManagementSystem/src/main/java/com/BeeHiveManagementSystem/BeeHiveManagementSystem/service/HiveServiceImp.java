package com.BeeHiveManagementSystem.BeeHiveManagementSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Hive;
import com.BeeHiveManagementSystem.BeeHiveManagementSystem.repository.HiveRepository;

@Service
public class HiveServiceImp implements HiveService{

    @Autowired
    private HiveRepository hiveRepository;

    @Override
    public Hive newHive(Hive hive){
        List<Hive> AllHive= getAllHives();
        for(int i=0;i<AllHive.size();i++){
            if(AllHive.get(i).getHiveSerialNb()==hive.getHiveSerialNb()){
                return null;
            }
        }
        return hiveRepository.save(hive);
    }
    @Override
    public List<Hive> getAllHives(){
        return hiveRepository.findAll();
    }
    
}
