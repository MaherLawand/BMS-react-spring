package com.BeeHiveManagementSystem.BeeHiveManagementSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Stock;
import com.BeeHiveManagementSystem.BeeHiveManagementSystem.repository.StockRepository;

@Service
public class StockServiceImp implements StockService{

    @Autowired
    private StockRepository stockRepository;

    @Override
    public Stock newStock(Stock stock){
        List<Stock> AllStock= getAllStock();
        for(int i=0;i<AllStock.size();i++){
            if(AllStock.get(i).getDay().compareTo(stock.getDay())==0){
                return null;
            }
        }
        return stockRepository.save(stock);
    }
    @Override
    public List<Stock> getAllStock(){
        return stockRepository.findAll();
    }
    @Override
    public Stock getLatestStock(int id){
        return stockRepository.findAllByLatestStock(id);
    }

    @Override
    public List<Stock> getAllStockByUser(int id){
        return stockRepository.findAllByUser(id);
    }

}
