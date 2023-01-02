package com.BeeHiveManagementSystem.BeeHiveManagementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.ActiveCustomers;

@Repository
public interface ActiveCustomersRepository extends JpaRepository<ActiveCustomers,Integer>{
    
}
