package com.BeeHiveManagementSystem.BeeHiveManagementSystem.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class GeneralBees {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int row;
    private int user_id;
    private int HiveSerialNb;
    private boolean TypeOfQueenBee;//QueenBee
	private int EggLayingRate;//QueenBee
	private String MedicalHealth;//QueenBee
    public int getUser_id() {
        return user_id;
    }
    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }
    private String TypeOfBee;//Bee
	private int EfficiencyOfBee;//Bee
	private int LifeSpan;//QueenBee Bee
	private int EstimatesNbOfBees;//Bee

    public GeneralBees(){

    }
    public int getHiveSerialNb() {
        return HiveSerialNb;
    }
    public void setHiveSerialNb(int hiveSerialNb) {
        HiveSerialNb = hiveSerialNb;
    }
    public boolean isTypeOfQueenBee() {
        return TypeOfQueenBee;
    }
    public void setTypeOfQueenBee(boolean typeOfQueenBee) {
        TypeOfQueenBee = typeOfQueenBee;
    }
    public int getEggLayingRate() {
        return EggLayingRate;
    }
    public void setEggLayingRate(int eggLayingRate) {
        EggLayingRate = eggLayingRate;
    }
    public String getMedicalHealth() {
        return MedicalHealth;
    }
    public void setMedicalHealth(String medicalHealth) {
        MedicalHealth = medicalHealth;
    }
    public String getTypeOfBee() {
        return TypeOfBee;
    }
    public void setTypeOfBee(String typeOfBee) {
        TypeOfBee = typeOfBee;
    }
    public int getEfficiencyOfBee() {
        return EfficiencyOfBee;
    }
    public void setEfficiencyOfBee(int efficiencyOfBee) {
        EfficiencyOfBee = efficiencyOfBee;
    }
    public int getLifeSpan() {
        return LifeSpan;
    }
    public void setLifeSpan(int lifeSpan) {
        LifeSpan = lifeSpan;
    }
    public int getEstimatesNbOfBees() {
        return EstimatesNbOfBees;
    }
    public void setEstimatesNbOfBees(int estimatesNbOfBees) {
        EstimatesNbOfBees = estimatesNbOfBees;
    }

}
