package com.BeeHiveManagementSystem.BeeHiveManagementSystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Apiary;

@Repository
public interface ApiaryRepository extends JpaRepository<Apiary,Integer>{
    
    public List<Apiary> getAllApiariesbyAsc(int id);


}
