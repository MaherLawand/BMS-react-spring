package com.BeeHiveManagementSystem.BeeHiveManagementSystem.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Apiary;

@Service
public interface ApiaryService {

    public Apiary newApiary(Apiary apiary);

    public List<Apiary> getAllApiaries();

    public List<Apiary> getAllApiariesAsc(int id);
}
