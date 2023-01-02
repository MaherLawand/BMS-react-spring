package com.BeeHiveManagementSystem.BeeHiveManagementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Hive;

@Repository
public interface HiveRepository extends JpaRepository<Hive,Integer>{
    
}
