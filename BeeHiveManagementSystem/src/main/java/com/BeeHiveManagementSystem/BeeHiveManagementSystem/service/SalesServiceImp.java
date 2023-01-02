package com.BeeHiveManagementSystem.BeeHiveManagementSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Sales;
import com.BeeHiveManagementSystem.BeeHiveManagementSystem.repository.SalesRepository;

@Service
public class SalesServiceImp implements SalesService {
    
    @Autowired
    private SalesRepository salesRepository;

    
    @Override
    public Sales newSale(Sales User){
        List<Sales> AllSales= getAllSales();
        for(int i=0;i<AllSales.size();i++){
            System.out.println(AllSales.get(i).getDay());
            if(AllSales.get(i).getDay()==User.getDay()){
                return null;             
            }
        }
        return salesRepository.save(User);
    }
    @Override
    public List<Sales> getAllSales(){
        return salesRepository.findAll();
    }

}
