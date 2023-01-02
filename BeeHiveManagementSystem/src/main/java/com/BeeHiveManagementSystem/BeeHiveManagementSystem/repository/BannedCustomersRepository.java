package com.BeeHiveManagementSystem.BeeHiveManagementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.BannedCustomers;

@Repository
public interface BannedCustomersRepository extends JpaRepository<BannedCustomers,Integer>{
    
}
