import { Button, TextField } from '@mui/material';
import { Link, Route, Router, Switch } from 'react-router-dom';

const Login = () => {
    return (  
        <>
        <div className="RegistrationPageWrapper">
                <div className="RegistrationFormWrapper">
                    <div className="EmailPass">
                    <TextField id="standard-basic" label="Email" variant="standard" />
                    <TextField id="standard-basic" label="Password" variant="standard" />
                    </div>
                </div>
                <Button> Login </Button>
            </div>
        </>

    );
}
 
export default Login;