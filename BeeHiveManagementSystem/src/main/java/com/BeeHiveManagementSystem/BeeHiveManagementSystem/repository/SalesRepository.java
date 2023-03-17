package com.BeeHiveManagementSystem.BeeHiveManagementSystem.repository;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Stock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.sql.Date;
import java.util.List;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Sales;

@Repository
public interface SalesRepository extends JpaRepository<Sales,Integer>{

    public List<Sales> findAllByMonth(int id);

}
