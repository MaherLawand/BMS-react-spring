package com.BeeHiveManagementSystem.BeeHiveManagementSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Apiary;
import com.BeeHiveManagementSystem.BeeHiveManagementSystem.repository.ApiaryRepository;

@Service
public class ApiaryServiceImp implements ApiaryService{
    
    @Autowired
    private ApiaryRepository apiaryRepository;

    @Override
    public Apiary newApiary(Apiary apiary){
        List<Apiary> AllApiary= getAllApiaries();
        for(int i=0;i<AllApiary.size();i++){
            if(AllApiary.get(i).getApiarySerialNb()==apiary.getApiarySerialNb()){
                return null;
            }
        }
        return apiaryRepository.save(apiary);
    }
    @Override
    public List<Apiary> getAllApiaries(){
        return apiaryRepository.findAll();
    }
    @Override
    public List<Apiary> getAllApiariesAsc(int id) {
        return apiaryRepository.getAllApiariesbyAsc(id);
    }
    @Override
    public Apiary getApiarybySN(int id ,int ApiarySerialNb){
        return apiaryRepository.getApiarybySN(id, ApiarySerialNb);
    }
}
