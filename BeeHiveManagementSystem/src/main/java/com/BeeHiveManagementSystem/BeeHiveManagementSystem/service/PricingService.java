package com.BeeHiveManagementSystem.BeeHiveManagementSystem.service;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Pricing;
import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Stock;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PricingService {

    public Pricing newPricing(Pricing pricing);

    public List<Pricing> getAllPricing();

    public Pricing getLatestPricing(int id);

}
