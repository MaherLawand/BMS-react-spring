package com.BeeHiveManagementSystem.BeeHiveManagementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Sales;

@Repository
public interface SalesRepository extends JpaRepository<Sales,Integer>{
    
}
