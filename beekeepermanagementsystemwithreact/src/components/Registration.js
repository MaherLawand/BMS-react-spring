import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import '../css/Registration.css';

const Registration = () => {
    return ( 
        <>
            <div className="RegistrationPageWrapper">
                <div className="RegistrationFormWrapper">
                    <div className="GeneralInfo">
                        <TextField id="standard-basic" label="First Name" variant="standard" />
                        <TextField id="standard-basic" label="Last Name" variant="standard" />
                        <TextField id="standard-basic" label="Address" variant="standard" />
                    </div>
                    <div className="EmailPass">
                    <TextField id="standard-basic" label="Email" variant="standard" />
                    <TextField id="standard-basic" label="Password" variant="standard" />
                    {/* <TextField  ref='password'
                                    hintText="Password"
                                    floatingLabelText="Password"
                                    type="password">
                                    </TextField> */}
                    {/* this.refs.password.getValue() */}
                    </div>
                </div>
                <Button> Register! </Button>
            </div>
        </>
    );
}
 
export default Registration;