package com.BeeHiveManagementSystem.BeeHiveManagementSystem.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Hive;

@Service
public interface HiveService {

    public Hive newHive(Hive hive);

    public List<Hive> getAllHives();
}
