package com.BeeHiveManagementSystem.BeeHiveManagementSystem.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.NamedQueries;
import jakarta.persistence.NamedQuery;

@Entity
@NamedQueries(value = {
        @NamedQuery(name = "Apiary.getAllApiariesbyAsc", query = "SELECT a FROM Apiary a WHERE a.user_id=?1 ORDER BY a.ApiarySerialNb ASC"),
        @NamedQuery(name= "Apiary.getApiarybySN" , query ="SELECT a FROM Apiary a WHERE a.user_id=?1 AND a.ApiarySerialNb=?2")
})
public class Apiary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int row;
    private int user_id;
    private String ApiaryName;
    private int ApiarySerialNb;
    private String ApiaryLocation;

    public Apiary() {

    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getApiaryName() {
        return ApiaryName;
    }

    public void setApiaryName(String apiaryName) {
        ApiaryName = apiaryName;
    }

    public int getApiarySerialNb() {
        return ApiarySerialNb;
    }

    public void setApiarySerialNb(int apiarySerialNb) {
        ApiarySerialNb = apiarySerialNb;
    }

    public String getApiaryLocation() {
        return ApiaryLocation;
    }

    public void setApiaryLocation(String apiaryLocation) {
        ApiaryLocation = apiaryLocation;
    }
}


