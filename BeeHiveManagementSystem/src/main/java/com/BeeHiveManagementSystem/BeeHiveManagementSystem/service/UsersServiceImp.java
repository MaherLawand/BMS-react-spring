package com.BeeHiveManagementSystem.BeeHiveManagementSystem.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BeeHiveManagementSystem.BeeHiveManagementSystem.model.Users;
import com.BeeHiveManagementSystem.BeeHiveManagementSystem.repository.UserRepository;

@Service
public class UsersServiceImp implements UsersService {
    
    @Autowired
    private UserRepository UsersRepository;

    @Override
    public Users newUser(Users User){
        List<Users> AllUsers= getAllUsers();
        for(int i=0;i<AllUsers.size();i++){
            System.out.println(AllUsers.get(i).getEmail());
            if(AllUsers.get(i).getEmail().equals(User.getEmail())){
                return null;             
            }
        }
        return UsersRepository.save(User);
    }
    @Override
    public List<Users> getAllUsers(){
        return UsersRepository.findAll();
    }
    @Override
    public Users findUserId(String email, String pass){
        return UsersRepository.getUserId(email,pass);
    }

    @Override
    public Users findUser(String email){
        return UsersRepository.getUser(email);
    }


}
