package com.BeeHiveManagementSystem.BeeHiveManagementSystem.model;



import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.NamedQueries;
import jakarta.persistence.NamedQuery;
@Entity
@NamedQueries(value={
        @NamedQuery(name="Pricing.GetLatestPrice" , query="SELECT p FROM Pricing p WHERE user_id=?1 ORDER BY p.day DESC LIMIT 1 ")
})
public class Pricing {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int row;
    private int user_id;
    private int hivePrice;
    private int honeyJarPrice;
    private int foodPrice;
    private int drugPrice;
    private Date day;

    public Pricing(){

    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public int getHivePrice() {
        return hivePrice;
    }

    public void setHivePrice(int hivePrice) {
        this.hivePrice = hivePrice;
    }

    public int getHoneyJarPrice() {
        return honeyJarPrice;
    }

    public void setHoneyJarPrice(int honeyJarPrice) {
        this.honeyJarPrice = honeyJarPrice;
    }

    public int getFoodPrice() {
        return foodPrice;
    }

    public void setFoodPrice(int foodPrice) {
        this.foodPrice = foodPrice;
    }

    public int getDrugPrice() {
        return drugPrice;
    }

    public void setDrugPrice(int drugPrice) {
        this.drugPrice = drugPrice;
    }

    public Date getDay() {
        return day;
    }

    public void setDay(Date day) {
        this.day = day;
    }
}
