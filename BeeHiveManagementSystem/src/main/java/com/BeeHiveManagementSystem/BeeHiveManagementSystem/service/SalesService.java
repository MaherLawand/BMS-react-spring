package com.BeeHiveManagementSystem.BeeHiveManagementSystem.service;

import java.sql.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Sales;

@Service
public interface SalesService {
    
    public Sales newSale(Sales sale);

    public List<Sales> getAllSales();

    public List<Sales> getAllSalesByMonth(int id);
}
