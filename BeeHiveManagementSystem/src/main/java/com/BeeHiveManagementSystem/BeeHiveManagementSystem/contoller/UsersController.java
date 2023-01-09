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
    public Users add(@RequestBody Users user) {
        return usersService.newUser(user);
    }

    @GetMapping("/getAllUsers")
    public List<Users> getAllUsers() {
        return usersService.getAllUsers();
    }

    @GetMapping("/getUserId/")
    public Users getUserId(@RequestParam("email") String email, @RequestParam("pass") String pass) {
        return usersService.findUserId(email,pass);
    }

    @GetMapping("/getUser/")
    public Users getUser(@RequestParam("email") String email) {
        return usersService.findUser(email);
    }

}