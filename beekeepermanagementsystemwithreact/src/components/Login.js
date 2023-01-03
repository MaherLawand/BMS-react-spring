import { BorderColor, Scale, Transform } from '@mui/icons-material';
import { Button, createStyles, TextField } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';
import { height, width } from '@mui/system';
import { Link, Route, Router, Switch } from 'react-router-dom';
import '../css/Input.css';
import { useState } from 'react';



const Login = () => {
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
    const [userid,setUserId] = useState(null);

    

    const FetchId =async () => {
        try{
            await fetch('http://localhost:8080/getUserId/{email}',{ // !!should be email and pass in both front and backend
            method:"GET",
            headers:{
                "Content-Type":"application/json",
           }})
            .then((res) => res.json())
            .then((data) => setUserId(data))
        }catch(error){
            console.log(error);
        }
    }

    return (  
        <>
        <div className="RegistrationPageWrapper">
                <div className="RegistrationFormWrapper">
                    <div className="EmailPass">
                    <TextField id="standard-basic" label="Email" variant="standard" onChange={e => setEmail(e.target.value)} />
                    <TextField id="standard-basic" label="Password" variant="standard" onChange={e => setPassword(e.target.value)} />
                    </div>
                </div>
                <Button onClick={FetchId}> Login </Button>
            </div>
        </>

    );
}
 
export default Login;