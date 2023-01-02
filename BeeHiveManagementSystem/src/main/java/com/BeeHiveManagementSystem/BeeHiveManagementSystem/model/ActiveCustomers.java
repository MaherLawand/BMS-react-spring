package com.BeeHiveManagementSystem.BeeHiveManagementSystem.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ActiveCustomers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int row;
    private int user_id;
    private String FName;
	private String LName;
	private String email;
	private String address;
    private int PhoneNumber;
    private boolean isBanned;
	public boolean isBanned() {
        return isBanned;
    }
    public void setBanned(boolean isBanned) {
        this.isBanned = isBanned;
    }
    public String getFName() {
        return FName;
    }
    public int getUser_id() {
        return user_id;
    }
    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }
    public void setFName(String fName) {
        FName = fName;
    }
    public String getLName() {
        return LName;
    }
    public void setLName(String lName) {
        LName = lName;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public int getPhoneNumber() {
        return PhoneNumber;
    }
    public void setPhoneNumber(int phoneNumber) {
        PhoneNumber = phoneNumber;
    }
    
}
