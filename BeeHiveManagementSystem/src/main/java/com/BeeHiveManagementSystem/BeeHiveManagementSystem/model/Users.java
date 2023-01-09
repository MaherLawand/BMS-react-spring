package com.BeeHiveManagementSystem.BeeHiveManagementSystem.model;




import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.NamedQueries;
import jakarta.persistence.NamedQuery;


@Entity
@NamedQueries(value={
    @NamedQuery(name="Users.getUserId" , query="SELECT u FROM Users u WHERE u.email=?1 AND u.password=?2"), //1 to represent the first parameter and 2 to represent the second parameter
        @NamedQuery(name="Users.getUser" , query="SELECT u FROM Users u WHERE u.email=?1")
})
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "User_Id")
    private int UserId;

    @Column(name = "User_Email")
    private String email;

    @Column(name = "User_Password")
    private String password;
    
    @Column(name = "First_Name")
    private String FirstName;

    @Column(name = "Last_Name")
    private String LastName;

    @Column(name = "Address")
    private String Address;

    public Users(){

    }

    public String getEmail() {
        return email;
    }

    public int getUserId() {
        return UserId;
    }

    public void setUserId(int userId) {
        UserId = userId;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return FirstName;
    }

    public void setFirstName(String firstName) {
        FirstName = firstName;
    }

    public String getLastName() {
        return LastName;
    }

    public void setLastName(String lastName) {
        LastName = lastName;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }

    

    
}
