package com.BeeHiveManagementSystem.BeeHiveManagementSystem.contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Sales;
import com.BeeHiveManagementSystem.BeeHiveManagementSystem.service.SalesService;

@RestController
@RequestMapping("/sales")
@CrossOrigin
public class SalesController {
    
    @Autowired
    private SalesService salesService;

    @PostMapping("/addSale")
    public void add(@RequestBody Sales sales){
        salesService.newSale(sales);
    }

    @GetMapping("/getAllSales")
    public List<Sales> getAllSales(){
        return salesService.getAllSales();
    }
    
}


