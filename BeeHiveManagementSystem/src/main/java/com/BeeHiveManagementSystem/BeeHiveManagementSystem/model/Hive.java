package com.BeeHiveManagementSystem.BeeHiveManagementSystem.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Hive {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int row;
    private int user_id;
    private int Size;
    private int HiveSerialNb;
    private int MedicalCondition;
    private int NbOfFrames;
    private boolean Food;
    private boolean Drugs;

    public int getUser_id() {
        return user_id;
    }
    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public int getSize() {
        return Size;
    }
    public void setSize(int size) {
        Size = size;
    }
    public int getHiveSerialNb() {
        return HiveSerialNb;
    }
    public void setHiveSerialNb(int hiveSerialNb) {
        HiveSerialNb = hiveSerialNb;
    }
    public int getMedicalCondition() {
        return MedicalCondition;
    }
    public void setMedicalCondition(int medicalCondition) {
        MedicalCondition = medicalCondition;
    }
    public int getNbOfFrames() {
        return NbOfFrames;
    }
    public void setNbOfFrames(int nbOfFrames) {
        NbOfFrames = nbOfFrames;
    }
    public boolean isFood() {
        return Food;
    }
    public void setFood(boolean food) {
        Food = food;
    }
    public boolean isDrugs() {
        return Drugs;
    }
    public void setDrugs(boolean drugs) {
        Drugs = drugs;
    }
}
