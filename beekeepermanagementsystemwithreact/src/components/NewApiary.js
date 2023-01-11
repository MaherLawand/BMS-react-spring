import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import '../css/Registration.css';
import '../css/Input.css';
import { useState,useEffect, useRef ,useContext } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import classNames from 'classnames';
import _ from 'lodash';
import { UserContext } from './UserContext';
import '../css/NewApiary.css'



const NewApiary = () => {
    
    const [apiarySN,setApiarySN] = useState(null);
    const [apiaryLocation,setApiaryLocation] = useState(null);
    const [apiaryName,setApiaryName] = useState(null);
    const {user,setUser} = useContext(UserContext);
    const [takenApiarySN,setTakenApiarySN] = useState(false);
    const [loading,setLoading] = useState(false);

    const FetchApiarySN =async () => {
        try{
            await fetch(decodeURIComponent(`http://localhost:8080/apiary/getApiarybySN?` + new URLSearchParams({
                id:user.userId,
                ApiarySN:apiarySN
            })),  
            {
            method:"GET",
            headers:{
                "Content-Type":"application/json/; charset=UTF-8",
           },
        })
            .then((res) => res.json())
            .then((data) => {if(data!==null){
                setTakenApiarySN(true)//taken
        }})
        }catch(error){
            console.log(error);
            setTakenApiarySN(false)
        }
    }

    const HandleSubmit =async (e) => {
        e.preventDefault();
        try{
            await fetch('http://localhost:8080/apiary/addApiary',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                user_id:user.userId,
                apiaryLocation,
                apiaryName,
                apiarySerialNb:apiarySN
            })
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            Router.push("/"); // fix
        }catch(error){
            console.log(error);
        }
    }
    
    const debounce = useRef(_.debounce((apiarySN) => setApiarySN(apiarySN), 800));

    // const HandleChange = (e) => {
    // const { name, value } = e.target;
    // setApiaryDetails((prev) => {
    //     return { ...prev, [name]: value };
    // });
    // debounce.current(value);
    // };

    useEffect(() => {
        if (apiarySN) {
            FetchApiarySN();
        }
    }, [apiarySN]);

    return ( 
        <>
        <form className="ApiaryPageWrapper" onSubmit={HandleSubmit}>
            <div className="ApiarydivWrapper">
                <div className="ApiaryGeneralInfo">
                    <TextField id="standard-basic" label="Apiary Location" variant="standard" name="apiaryLocation" onChange={(e)=>{setApiaryLocation(e.target.value)}} required/>
                    <TextField id="standard-basic" label="Apiary Name" variant="standard" name="apiaryName" onChange={(e)=>{setApiaryName(e.target.value)}}  required/>
                    <TextField id="standard-basic" label="Apiary Serial Number" variant="standard" name="apiarySerialNumber" className={takenApiarySN ? "taken" : ""} onChange={(e)=>{setApiarySN(e.target.value)}} />
                </div>
               
            </div>
            <Button type="submit" disabled={takenApiarySN}> Confirm </Button>
        </form>
    </>
    
    );
}
 
export default NewApiary;