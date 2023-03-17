package com.BeeHiveManagementSystem.BeeHiveManagementSystem.contoller;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Pricing;
import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Stock;
import com.BeeHiveManagementSystem.BeeHiveManagementSystem.service.PricingService;
import com.BeeHiveManagementSystem.BeeHiveManagementSystem.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pricing")
@CrossOrigin
public class PricingController {

    @Autowired
    private PricingService pricingService;

    @PostMapping("/addPricing")
    public void add(@RequestBody Pricing pricing) {
        pricingService.newPricing(pricing);
    }

    @GetMapping("/getAllPricing")
    public List<Pricing> getAllPricing() {
        return pricingService.getAllPricing();
    }

    @GetMapping("/getLatestPricing/")
    public Pricing getLatestPricing(@RequestParam("id") int id) {
        return pricingService.getLatestPricing(id);
    }

}
