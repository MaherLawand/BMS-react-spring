package com.BeeHiveManagementSystem.BeeHiveManagementSystem.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Sales {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int row;
    private int user_id;
    private Date day;
    private int HivesSold;
    private int JarsSold;
    private int FoodSold;
    private int DrugsSold;
    private double Expenses;
    
    public Sales(){

    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public Date getDay() {
        return day;
    }

    public void setDay(Date day) {
        this.day = day;
    }

    public int getHivesSold() {
        return HivesSold;
    }

    public void setHivesSold(int hivesSold) {
        HivesSold = hivesSold;
    }

    public int getJarsSold() {
        return JarsSold;
    }

    public void setJarsSold(int jarsSold) {
        JarsSold = jarsSold;
    }

    public int getFoodSold() {
        return FoodSold;
    }

    public void setFoodSold(int foodSold) {
        FoodSold = foodSold;
    }

    public int getDrugsSold() {
        return DrugsSold;
    }

    public void setDrugsSold(int drugsSold) {
        DrugsSold = drugsSold;
    }

    public double getExpenses() {
        return Expenses;
    }

    public void setExpenses(double expenses) {
        Expenses = expenses;
    }
    

    
}
