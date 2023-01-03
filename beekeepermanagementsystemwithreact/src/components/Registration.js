import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import '../css/Registration.css';
import '../css/Input.css';
import { useState } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

const Registration = (e) => {
    const [firstName,setFirstName]=useState(null);
    const [lastName,setLastName]=useState(null);
    const [address,setAddress]=useState(null);
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
    const HandleSubmit =async () => {
        try{
            await fetch('http://localhost:8080/users/addUser',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                firstName,
                lastName,
                address,
                email,
                password
            })
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            Router.push("/Login");
        }catch(error){
            console.log(error);
        }
    }

    return ( 
        <>
            <div className="RegistrationPageWrapper">
                <div className="RegistrationFormWrapper">
                    <div className="GeneralInfo">
                        <TextField id="standard-basic" label="First Name" variant="standard" onChange={e => setFirstName(e.target.value)} />
                        <TextField id="standard-basic" label="Last Name" variant="standard"  onChange={e => setLastName(e.target.value)} />
                        <TextField id="standard-basic" label="Address" variant="standard"  onChange={e => setAddress(e.target.value)} />
                    </div>
                    <div className="EmailPass">
                    <TextField id="standard-basic" label="Email" variant="standard"  onChange={e => setEmail(e.target.value)}/>
                    <TextField id="standard-basic" label="Password" variant="standard"  onChange={e => setPassword(e.target.value)}/>
                    {/* <TextField  ref='password'
                                    hintText="Password"
                                    floatingLabelText="Password"
                                    type="password">
                                    </TextField> */}
                    {/* this.refs.password.getValue() */}
                    </div>
                </div>
                <Button onClick={HandleSubmit}> Register! </Button>
            </div>
        </>
    );
}
 
export default Registration;