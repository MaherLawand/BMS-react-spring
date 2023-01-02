package com.BeeHiveManagementSystem.BeeHiveManagementSystem.contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Hive;
import com.BeeHiveManagementSystem.BeeHiveManagementSystem.service.HiveService;

@RestController
@RequestMapping("/hive")
@CrossOrigin
public class HiveController{

    @Autowired
    private HiveService hiveService;

    @PostMapping("/addHive")
    public void add(@RequestBody Hive hive){
        hiveService.newHive(hive);
    }

    @GetMapping("/getAllHives")
    public List<Hive> getAllHives(){
        return hiveService.getAllHives();
    }
}