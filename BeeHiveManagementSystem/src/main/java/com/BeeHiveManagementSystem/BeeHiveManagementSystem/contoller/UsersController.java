package com.BeeHiveManagementSystem.BeeHiveManagementSystem.contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Users;
import com.BeeHiveManagementSystem.BeeHiveManagementSystem.service.UsersService;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UsersController {

    @Autowired
    private UsersService usersService;

    @PostMapping("/addUser")
    public void add(@RequestBody Users user) {
        usersService.newUser(user);
    }

    @GetMapping("/getAllUsers")
    public List<Users> getAllUsers() {
        return usersService.getAllUsers();
    }

    @GetMapping("/getUserId/{email}")
    public int getUserId(@PathVariable String email) {
        return usersService.findUserId(email).getUserId();
    }
}