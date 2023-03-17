package com.BeeHiveManagementSystem.BeeHiveManagementSystem.repository;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Pricing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface PricingRepository extends JpaRepository<Pricing,Integer> {

    public Pricing GetLatestPrice(int id);

}
