import { Link } from 'react-router-dom';
import '../css/Home.css';
import { useContext, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { UserContext } from './UserContext';


const Home = () => {
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
    const {user,setUser} = useContext(UserContext);
    const FetchId =async (e) => {
        e.preventDefault();
        try{
            await fetch(decodeURIComponent(`http://localhost:8080/users/getUserId/?` + new URLSearchParams({
                email: email,
                pass: password
            })),  
            {
            method:"GET",
            headers:{
                "Content-Type":"application/json/; charset=UTF-8",
           },
        })
            .then((res) => res.json())
            .then((data) => setUser(data))
        }catch(error){
            console.log(error);
        }
    }
    // const FetchId = async () => {
    //     await axios.get('http://localhost:8080/users/getUserId/',{
    //         mode: 'no-cors',
    //         params:
    //             decodeURIComponent(paramms)           
    //     })
    // }
    console.log(user);
    return ( 
        <>  
            {/* <div className="backgroundImageWrapper">
                <img src={image} className="Hive-bg" alt="bg" />
            </div> */}
            
            <div className="introandreg">
                    {user ?
                    <div className='login'>
                        <h1> Welcome {user.firstName} {user.lastName}! </h1>
                    </div>
                    :
                    <div className="login">                    
                    <form onSubmit={FetchId}>
                        <h1> LOGIN </h1>
                        <TextField id="standard-basic" label="Email" variant="standard" onChange={e => setEmail(e.target.value)} />
                        <TextField id="standard-basic" label="Password" variant="standard" onChange={e => setPassword(e.target.value)} />
                        <Button type="submit"> Login </Button>
                    </form>
                    <div className='register'>
                    <p> Need an Account? </p>
                    <Link to="/Registration" className='Reg-Btn'>Register</Link>
                    </div>
                    </div>
                    }   
                    
                    
                    {/* <Button disabled>Disabled</Button>
                    <Button href="#text-buttons">Link</Button> */}
                
                <div className="intro">
                    <h1 style={{color:'white'}}> Welcome to our website about a beekeeper management system!</h1>
                    <p style={{color:'white'}}>Our system is designed to help beekeepers of all levels manage and track their bees, hives,apiaries and much more! Whether you're a beginner just starting out with a few hives, or a seasoned pro with a large apiary, our system has the tools and features you need to stay organized and on top of your beekeeping tasks.
                    With our system, you can easily record and track important information about your hives and bees, such as the location, size, and health of each hive. You can also track your harvest data, including the amount and type of honey produced.
                    Thank you for visiting our website. We hope our beekeeper management system will be a valuable tool for you in your beekeeping journey.</p>
                </div>
            </div>
        </>
    );
}
 
export default Home;