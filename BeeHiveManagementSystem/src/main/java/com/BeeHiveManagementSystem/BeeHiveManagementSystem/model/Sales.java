package com.BeeHiveManagementSystem.BeeHiveManagementSystem.model;



import java.util.Date;

import jakarta.persistence.*;

@Entity
@NamedQueries(value={
        @NamedQuery(name="Sales.findAllByMonth" , query="SELECT s FROM Sales s WHERE s.user_id=?1 ORDER BY s.day ASC")
})
public class Sales {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int row;
    private int user_id;
    private Date day;
    private int nbOfHivesSold;
    private int nbOfHoneyJarsSold;
    private int nbOfFoodSold;
    private int nbOfDrugsSold;
    private int hivePrice;
    private int honeyJarPrice;
    private int foodPrice;
    private int drugPrice;
    
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

    public int getNbOfHivesSold() {
        return nbOfHivesSold;
    }

    public void setNbOfHivesSold(int nbOfHivesSold) {
        this.nbOfHivesSold = nbOfHivesSold;
    }

    public int getNbOfHoneyJarsSold() {
        return nbOfHoneyJarsSold;
    }

    public void setNbOfHoneyJarsSold(int nbOfHoneyJarsSold) {
        this.nbOfHoneyJarsSold = nbOfHoneyJarsSold;
    }

    public int getNbOfFoodSold() {
        return nbOfFoodSold;
    }

    public void setNbOfFoodSold(int nbOfFoodSold) {
        this.nbOfFoodSold = nbOfFoodSold;
    }

    public int getNbOfDrugsSold() {
        return nbOfDrugsSold;
    }

    public void setNbOfDrugsSold(int nbOfDrugsSold) {
        this.nbOfDrugsSold = nbOfDrugsSold;
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
}
