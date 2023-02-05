package com.BeeHiveManagementSystem.BeeHiveManagementSystem.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.NamedQueries;
import jakarta.persistence.NamedQuery;

@Entity
@NamedQueries(value={
        @NamedQuery(name="Stock.findAllByLatestStock" , query="SELECT s FROM Stock s WHERE user_id=?1 ORDER BY s.day DESC LIMIT 1 ")
})
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int row;
    private int user_id;
    private Date day;
    private int NbofHives;

    private int NbOfApiaries;
    private int TotalNbOfJars;//These are gonna be subtracted with the jars sold in sales;
    private int JarsFilledWithHoney;//The subtracted value above will be added here;
    private int TotalNbOfFood;
    private int TotalNbofDrugs;

    public Stock(){

    }

    public int getNbofHives() {
        return NbofHives;
    }

    public void setNbofHives(int nbofHives) {
        NbofHives = nbofHives;
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

    public int getTotalNbOfJars() {
        return TotalNbOfJars;
    }

    public void setTotalNbOfJars(int totalNbOfJars) {
        TotalNbOfJars = totalNbOfJars;
    }

    public int getJarsFilledWithHoney() {
        return JarsFilledWithHoney;
    }

    public void setJarsFilledWithHoney(int jarsFilledWithHoney) {
        JarsFilledWithHoney = jarsFilledWithHoney;
    }

    public int getTotalNbOfFood() {
        return TotalNbOfFood;
    }

    public void setTotalNbOfFood(int totalNbOfFood) {
        TotalNbOfFood = totalNbOfFood;
    }

    public int getTotalNbofDrugs() {
        return TotalNbofDrugs;
    }

    public int getNbOfApiaries() {
        return NbOfApiaries;
    }

    public void setNbOfApiaries(int nbOfApiaries) {
        NbOfApiaries = nbOfApiaries;
    }

    public void setTotalNbofDrugs(int totalNbofDrugs) {
        TotalNbofDrugs = totalNbofDrugs;
    }

}
