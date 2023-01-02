package com.BeeHiveManagementSystem.BeeHiveManagementSystem.contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Stock;
import com.BeeHiveManagementSystem.BeeHiveManagementSystem.service.StockService;

@RestController
@RequestMapping("/stock")
@CrossOrigin
public class StockController {
    
    @Autowired
    private StockService stockService;
    
    @PostMapping("/addStock")
    public void add(@RequestBody Stock stock){
        stockService.newStock(stock);
    }

    @GetMapping("/getAllStock")
    public List<Stock> getAllStock(){
        return stockService.getAllStock();
    }
    @GetMapping("/getLatestStock/{id}")
    public List<Stock> getLatestStock(@PathVariable int id){
        return stockService.getLatestStock(id);
    }

}
