package com.BeeHiveManagementSystem.BeeHiveManagementSystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Stock;

@Repository
public interface StockRepository extends JpaRepository<Stock,Integer>{

    public Stock findAllByLatestStock(int id);

}
