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
        @NamedQuery(name="Stock.findAllByLatestStock" , query="SELECT s FROM Stock s WHERE user_id=?1 ORDER BY s.day DESC LIMIT 1 "),
        @NamedQuery(name="Stock.findAllByUser" , query="SELECT s FROM Stock s WHERE s.user_id=?1 ORDER BY s.day ASC ")
})
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int row;
    private int user_id;
    private Date day;
    private int NbofHives;
    private int priceOfAllHives;
    private int NbOfApiaries;
    private int priceOfAllApiaries;
    private int TotalNbOfJars;//These are gonna be subtracted with the jars sold in sales;
    private int priceOfAllJars;
    private int JarsFilledWithHoney;//The subtracted value above will be added here;
    private int TotalNbOfFood;
    private int priceOfAllFood;

    public int getPriceOfAllHives() {
        return priceOfAllHives;
    }

    public void setPriceOfAllHives(int priceOfAllHives) {
        this.priceOfAllHives = priceOfAllHives;
    }

    public int getPriceOfAllApiaries() {
        return priceOfAllApiaries;
    }

    public void setPriceOfAllApiaries(int priceOfAllApiaries) {
        this.priceOfAllApiaries = priceOfAllApiaries;
    }

    public int getPriceOfAllJars() {
        return priceOfAllJars;
    }

    public void setPriceOfAllJars(int priceOfAllJars) {
        this.priceOfAllJars = priceOfAllJars;
    }

    public int getPriceOfAllFood() {
        return priceOfAllFood;
    }

    public void setPriceOfAllFood(int priceOfAllFood) {
        this.priceOfAllFood = priceOfAllFood;
    }

    public int getPriceOfAllDrugs() {
        return priceOfAllDrugs;
    }

    public void setPriceOfAllDrugs(int priceOfAllDrugs) {
        this.priceOfAllDrugs = priceOfAllDrugs;
    }

    private int TotalNbofDrugs;
    private int priceOfAllDrugs;

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
