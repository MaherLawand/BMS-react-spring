package com.BeeHiveManagementSystem.BeeHiveManagementSystem.service;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Pricing;
import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Stock;
import com.BeeHiveManagementSystem.BeeHiveManagementSystem.repository.PricingRepository;
import com.BeeHiveManagementSystem.BeeHiveManagementSystem.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PricingServiceImp implements PricingService{


    @Autowired
    private PricingRepository pricingRepository;

    @Override
    public Pricing newPricing(Pricing stock){
        List<Pricing> AllPricing= getAllPricing();
        for(int i=0;i<AllPricing.size();i++){
            if(AllPricing.get(i).getDay().compareTo(stock.getDay())==0){
                return null;
            }
        }
        return pricingRepository.save(stock);
    }
    @Override
    public List<Pricing> getAllPricing(){
        return pricingRepository.findAll();
    }
    @Override
    public Pricing getLatestPricing(int id){
        return pricingRepository.GetLatestPrice(id);
    }


}
