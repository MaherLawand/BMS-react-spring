package com.BeeHiveManagementSystem.BeeHiveManagementSystem.contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Apiary;
import com.BeeHiveManagementSystem.BeeHiveManagementSystem.service.ApiaryService;

@RestController
@RequestMapping("/apiary")
@CrossOrigin
public class ApiaryController {

    @Autowired
    private ApiaryService apiaryService;

    @PostMapping("/addApiary")
    public void add(@RequestBody Apiary apiary) {
        apiaryService.newApiary(apiary);
    }

    @GetMapping("/getAllApiaries")
    public List<Apiary> getAllApiarys() {
        return apiaryService.getAllApiaries();
    }

    @GetMapping("/getAllApiariesAsc/{id}")
    public List<Apiary> getAllApiariesAsc(@PathVariable int id) {
        return apiaryService.getAllApiariesAsc(id);
    }
    @GetMapping("/getApiarybySN")
    public Apiary getApiarybySN(@RequestParam("id")int id , @RequestParam("ApiarySN" )int ApiarySerialNb){
        return apiaryService.getApiarybySN(id, ApiarySerialNb);
    }
}
