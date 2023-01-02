package com.BeeHiveManagementSystem.BeeHiveManagementSystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Users;

@Repository
public interface UserRepository extends JpaRepository<Users,Integer>{

    public Users getUserId(String email);
    
}
