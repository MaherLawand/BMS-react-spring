package com.BeeHiveManagementSystem.BeeHiveManagementSystem.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.GeneralBees;

public interface GeneralBeesRepository  extends JpaRepository<GeneralBees,Integer>{
    
}
