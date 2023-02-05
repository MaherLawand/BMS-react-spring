package com.BeeHiveManagementSystem.BeeHiveManagementSystem.service;

import java.util.List;

import javax.management.Query;


import org.springframework.stereotype.Service;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Stock;


@Service
public interface StockService {


    public Stock newStock(Stock stock);

    public List<Stock> getAllStock();

    public Stock getLatestStock(int id);

}
