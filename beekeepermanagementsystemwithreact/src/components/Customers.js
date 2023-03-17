import { useState , useContext, useEffect } from 'react';
import { UserContext } from './UserContext';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import '../css/Customers.css';
import "bootstrap/dist/css/bootstrap.min.css";

const Customers = () => {
    const [activeCustomers,setActiveCustomers] = useState(null);
    const {user,setUser} = useContext(UserContext);
    const[firstname,setFirstName] = useState("");
    const[lastname,setLastName] = useState("");
    const[email,setEmail] = useState("");
    const[phoneNumber,setPhoneNumber] = useState(0);
    const[address,setAddress] = useState("");
    const[newCustomer,setNewCustomer]=useState(false);
    const[banEmail,setBanEmail] = useState(null);
    const[banned,setBanned]=useState(true);

    const AddCustomer = async () => {
        try{
            await fetch(`http://localhost:8080/activecustomers/addActiveCustomer`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                user_id:user.userId,
                fname:firstname,
                lname:lastname,
                email:email,
                address:address,
                phoneNumber:phoneNumber,
                isBanned:0
        })
        });
    }catch(error){
        console.log(error)
    }
        setNewCustomer(!newCustomer)
    }

    const BanCustomer =async () => {
        try{
            await fetch('http://localhost:8080/activecustomers/deleteActiveCustomer/?' + new URLSearchParams({
                email:banEmail,
                id: user.userId
            }),           
            { 
                method: 'DELETE',
                headers:{
                    "Content-Type":"application/json",
                }               
            })
        }catch(error){
            console.log(error)
        }
        setBanned(!banned)
        
    }
    

    const GetActiveCustomers = async () => {
        try{
            await fetch(`http://localhost:8080/activecustomers/getAllActiveCustomers/?` + new URLSearchParams({
                id: user.userId,
            }),{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
            }})
            .then((res) => res.json())
            .then( (data)=> {
                setActiveCustomers(data)               
            })
        }catch(error){
            console.log(error);
            //setError(error);
        }
        //finally{
        //     setLoading(false)
        // }
    }

        useEffect(() => {
            GetActiveCustomers();
        }, [newCustomer,banned]);

        useEffect(() => {
            GetActiveCustomers();
        }, []);

        useEffect(() => {
            if(banEmail!=null){
                BanCustomer();
            }
        }, [banEmail]);

        console.log(banEmail)

    return (
        <div className='wrapper'>
            {(activeCustomers!==null) ? 
            
            // <div className="Customer-table">
            //     <div className='Customer-Column-names'>
            //         <div className='heading'> Name </div>
            //         <div className='heading'> Email </div>
            //         <div className='heading'> PhoneNumber </div>
            //         <div className='heading'> Address </div>
            //     </div>
            //     <div className="Customer-row"> 
            //         <Button> Add Customer </Button>
            //     </div>

            // </div>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <th scope="col" style={{width:"20%"}}> Name </th>
                        <th scope="col" style={{width:"30%"}}> Email </th>
                        <th scope="col"> PhoneNumber </th>
                        <th scope="col"> Address </th>
                        <th scope="col" style={{width:"15%"}}> </th>
                    </thead>
                        <tr> 
                            <td> <TextField sx={{width:"50%"}} id="outlined-basic" placeholder="First Name" variant="outlined" name="FullName" onChange={(e)=>{
                                    setFirstName(e.target.value)
                                 }}/>
                                 <TextField sx={{width:"50%"}} id="outlined-basic" variant="outlined" placeholder="Last Name" name="FullName" onChange={(e)=>{
                                    setLastName(e.target.value)
                                 }}/>
                
                            </td>
                            <td> <TextField id="outlined-basic" variant="outlined" name="Email" onChange={(e)=>{
                                setEmail(e.target.value)
                }}/></td>
                            <td> <TextField id="outlined-basic" variant="outlined" name="PhoneNumber" type="number" onChange={(e)=>{
                                setPhoneNumber(e.target.value)
                }}/></td>
                            <td> <TextField id="outlined-basic" variant="outlined" name="Address" onChange={(e)=>{
                                setAddress(e.target.value)
                }}/></td>
                            <td className='btn-row'> <Button disabled={firstname=="" || lastname=="" || email==""|| phoneNumber==0 || address==""} onClick={()=>{
                                if(firstname!="" && lastname!="" && email!=""&& phoneNumber!=0 && address!=""){
                                    AddCustomer()
                                }
                            }}> Add Customer </Button> </td>
                        </tr>
                        {activeCustomers.map((customer) => (
                            (customer.banned==false &&
                            <tr>
                                <td> {customer.fname} {customer.lname} </td>
                                <td> {customer.email} </td>
                                <td> {customer.phoneNumber} </td>
                                <td> {customer.address} </td>
                                <td> <Button variant="outlined" color="error" value={customer.email} onClick={(e)=>{
                                    setBanEmail(e.target.value);
                                }}> Ban </Button> </td>
                            </tr>
                            )      
                        ))}                      
                </table>
            </div>
            
            :
            
            <div> NO Active Customers </div>

            }
        </div>
    );
}
 
export default Customers;