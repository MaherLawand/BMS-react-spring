import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import '../css/Registration.css';
import '../css/Input.css';
import { useState,useEffect, useRef } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import classNames from 'classnames';
import _ from 'lodash';

const Registration = () => {
    const [email,setEmail] = useState(null);
    const [user,setUser]= useState(null);
    const [takenEmail,setTakenEmail] = useState(false);
    const [loading,setLoading] = useState(false);

    const date = new Date();
    const FetchId =async () => {
        try{
            await fetch(decodeURIComponent(`http://localhost:8080/users/getUser/?` + new URLSearchParams({
                email: email,
            })),  
            {
            method:"GET",
            headers:{
                "Content-Type":"application/json/; charset=UTF-8",
           },
        })
            .then((res) => res.json())
            .then((data) => {if(data!==null){
                setTakenEmail(true)//taken
        }})
        }catch(error){
            console.log(error);
            setTakenEmail(false)
        }
    }
    const HandleSubmit =async (e) => {
        e.preventDefault();
        try{
            await fetch('http://localhost:8080/users/addUser',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(userDetails)
        })
            .then((res) => res.json())
            .then((data) => setUser(data))
        }catch(error){
            console.log(error);
        }
        
    }
    useEffect(()=>{
        if(user!==null){
            fetch('http://localhost:8080/stock/addStock',{
                        method:"POST",
                        headers:{
                            "Content-Type":"application/json",
                        },
                        body:JSON.stringify({
                            user_id:user.userId,
                            day:date,
                            nbofHives:0,
                            nbOfApiaries:0,
                            totalNbOfJars:0,
                            jarsFilledWithHoney:0,
                            totalNbOfFood:0,
                            totalNbofDrugs:0,
                            priceOfAllHives:0,
                            priceOfAllApiaries:0,
                            priceOfAllJars:0,
                            priceOfAllFood:0,
                            priceOfAllDrugs:0
                        })
                    });
             fetch('http://localhost:8080/pricing/addPricing',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    user_id:user.userId,
                    day:date,
                    hivePrice:0,
                    honeyJarPrice:0,
                    foodPrice:0,
                    drugPrice:0                   
                })
            });     
            fetch(`http://localhost:8080/sales/addSale`,{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify({
                        user_id:user.userId,
                        day:date,
                        nbOfHivesSold:0,
                        nbOfHoneyJarsSold:0,
                        nbOfFoodSold:0,
                        nbOfDrugsSold:0,
                        hivePrice:0,
                        honeyJarPrice:0,
                        foodPrice:0,
                        drugPrice:0
                })
                });                
        }
    },[user])
    const [userDetails,setUserDetails] = useState({
        firstName:"",
        lastName:"",
        address:"",
        email:"",
        password:"",
    });

    

    const debounce = useRef(_.debounce((email) => setEmail(email), 800));

    const HandleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => {
        return { ...prev, [name]: value };
    });
    debounce.current(value);
    };
    useEffect(() => {
        if (email) {
            FetchId();
        }
    }, [email]);
    
    return ( 
        <>
            <form className="RegistrationPageWrapper" onSubmit={HandleSubmit}>
                <div className="RegistrationdivWrapper">
                    <div className="GeneralInfo">
                        <TextField id="standard-basic" label="First Name" variant="standard" name="firstName" onChange={HandleChange} required/>
                        <TextField id="standard-basic" label="Last Name" variant="standard" name="lastName" onChange={HandleChange}  required/>
                        <TextField id="standard-basic" label="Address" variant="standard" name="address" onChange={HandleChange} />
                    </div>
                    <div className="EmailPass">
                    <TextField id="standard-basic" label="Email" variant="standard" name="email"  onChange={HandleChange} type="email" className={takenEmail ? "taken" : ""} required />
                    <TextField id="standard-basic" label="Password" variant="standard" name="password"  onChange={HandleChange} required/>
                    {/* <TextField  ref='password'
                                    hintText="Password"
                                    floatingLabelText="Password"
                                    type="password">
                                    </TextField> */}
                    {/* this.refs.password.getValue() */}
                    </div>
                </div>
                <Button type="submit" disabled={takenEmail}> Register! </Button>
            </form>
        </>
    );
}
 
export default Registration;