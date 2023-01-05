package com.BeeHiveManagementSystem.BeeHiveManagementSystem.contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/getUserId/")
    public int getUserId(@RequestParam("email") String email) {
        return usersService.findUserId(email).getUserId();
    }

    @GetMapping("/getUserIdd/")
    public int getUserIdd(@RequestParam("id") int id) {
        return usersService.findUserIdd(id).getUserId();
    }
}