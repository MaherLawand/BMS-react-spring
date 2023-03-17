package com.BeeHiveManagementSystem.BeeHiveManagementSystem.contoller;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/getAllSalesByMonth/")
    public List<Sales> getAllSalesByMonth(@RequestParam("id") int id){
        System.out.println(salesService.getAllSalesByMonth(id).get(0).getDay());
        return salesService.getAllSalesByMonth(id);
    }
    
}


