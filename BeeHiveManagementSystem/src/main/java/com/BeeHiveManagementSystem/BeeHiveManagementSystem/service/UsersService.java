package com.BeeHiveManagementSystem.BeeHiveManagementSystem.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Users;

@Service
public interface UsersService {
    
    public Users newUser(Users users);

    public List<Users> getAllUsers();

    public Users findUserId(String email, String pass);

    public Users findUser(String email);


}
