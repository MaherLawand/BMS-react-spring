package com.BeeHiveManagementSystem.BeeHiveManagementSystem.repository;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Stock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.ActiveCustomers;

import java.util.List;

@Repository
public interface ActiveCustomersRepository extends JpaRepository<ActiveCustomers,Integer>{

    public List<ActiveCustomers> findAllActiveCustomers(int id);

}
