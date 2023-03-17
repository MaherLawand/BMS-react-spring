import { useState , useContext, useEffect } from 'react';
import '../css/Sales.css';
import { UserContext } from './UserContext';
import { TextField } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import { Button } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

const Sales = () => {
    const [price,setPrice] = useState(0);
    const {user,setUser} = useContext(UserContext);
    const [nbOfHivesSold,setNbOfHivesSold] = useState(0);
    const [nbOfHoneyJarsSold,setNbOfHoneyJarsSold] = useState(0);
    const [nbOfFoodSold,setNbOfFoodSold] = useState(0);
    const [nbOfDrugsSold,setNbOfDrugsSold] = useState(0);
    const [oldStock,setOldStock] = useState(null);
    const [save,setSave] = useState(true);
    const [editprice,setEditPrice] = useState(true);
    const [hivePrice,setHivePrice] = useState(0);
    const [honeyJarsPrice,setHoneyJarsPrice] = useState(0);
    const [foodPrice,setFoodPrice] = useState(0);
    const [drugsPrice,setDrugsPrice] = useState(0);
    const [updated,setUpdated] = useState(false);
    const [sold,setSold] = useState(false);
    const date = new Date();
    const AddSales = async (e) => {
        e.preventDefault();
        try{
            await fetch(`http://localhost:8080/sales/addSale`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                user_id:user.userId,
                day:date,
                nbOfHivesSold:nbOfHivesSold,
                nbOfHoneyJarsSold:nbOfHoneyJarsSold,
                nbOfFoodSold:nbOfFoodSold,
                nbOfDrugsSold:nbOfDrugsSold,
                hivePrice:hivePrice,
                honeyJarPrice:honeyJarsPrice,
                foodPrice:foodPrice,
                drugPrice:drugsPrice
        })
        });
    }catch(error){
        console.log(error)
    }
    setSold(!sold);
    }

    const FetchLatestStock =async () => {
        try{
            await fetch(decodeURIComponent(`http://localhost:8080/stock/getLatestStock/?` + new URLSearchParams({
                id: user.userId,
            })),  
            {
            method:"GET",
            headers:{
                "Content-Type":"application/json/; charset=UTF-8",
           },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if(data!==null){
                setOldStock(data);
            }})
        }catch(error){
            console.log(error)
        }
    }  

    const RemoveStock = async () => {
        try{
            await fetch(`http://localhost:8080/stock/addStock`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                user_id:user.userId,
                day:date,
                nbofHives:parseInt(oldStock.nbofHives)-parseInt(nbOfHivesSold),
                nbOfApiaries:parseInt(oldStock.nbOfApiaries),
                totalNbOfJars:parseInt(oldStock.totalNbOfJars),
                jarsFilledWithHoney:parseInt(oldStock.jarsFilledWithHoney)-parseInt(nbOfHoneyJarsSold),
                totalNbOfFood:parseInt(oldStock.totalNbOfFood)-parseInt(nbOfFoodSold),
                totalNbofDrugs:parseInt(oldStock.totalNbofDrugs)-parseInt(nbOfDrugsSold),
                priceOfAllHives:0,
                priceOfAllApiaries:0,
                priceOfAllJars:0,
                priceOfAllFood:0,
                priceOfAllDrugs:0
        })
        });
    }catch(error){
        console.log(error)
    }
    }
    const FetchPricing =async () => {
        try{
            await fetch(decodeURIComponent(`http://localhost:8080/pricing/getLatestPricing/?` + new URLSearchParams({
                id: user.userId,
            })),  
            {
            method:"GET",
            headers:{
                "Content-Type":"application/json/; charset=UTF-8",
           },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if(data!==null){
                    setHivePrice(data.hivePrice)
                    setHoneyJarsPrice(data.honeyJarPrice)
                    setFoodPrice(data.foodPrice)
                    setDrugsPrice(data.drugPrice)
                }
                })
        }catch(error){
            console.log(error)
        }
    }
    const AddPricing = async () => {
        try{
            await fetch(`http://localhost:8080/pricing/addPricing`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                user_id:user.userId,
                day:date,
                hivePrice:hivePrice,
                honeyJarPrice:honeyJarsPrice,
                foodPrice:foodPrice,
                drugPrice:drugsPrice
        })
        
        });
    }catch(error){
        console.log(error)
    }
    setUpdated(!updated);
    }
    useEffect(()=>{
        FetchPricing()
        FetchLatestStock()
    },[])

    useEffect(()=>{
        FetchPricing()
    },[updated]) 
    
    useEffect(()=>{
        RemoveStock()
    },[sold])
    return ( 
        <>
            {editprice ? <div className="Pricing-wrapper">
                <div className="price-div"> {hivePrice} </div>
                <div className="price-div"> {honeyJarsPrice} </div>
                <div className="price-div"> {foodPrice} </div>
                <div className="price-div"> {drugsPrice} </div>
                { (save) ? <CreateIcon onClick={() => {setSave(!save);setEditPrice(!editprice)}}/>  : 0}
            </div>
            :
            <div className="Pricing-wrapper">
                <div className="price-div" style={{ borderColor:(hivePrice==0) ? "red" : "gold" }}> <TextField id="standard-basic" label="Hive Price" variant="standard" name="Hive Price" type="number" value={hivePrice} onChange={(e)=>{
                    setHivePrice(e.target.value)
                }}/> </div>
                <div className="price-div" style={{ borderColor:(honeyJarsPrice==0) ? "red" : "gold" }}> <TextField id="standard-basic" label="Honey Jars Price" variant="standard" name="Honey Jars Price" type="number" value={honeyJarsPrice} onChange={(e)=>{
                    setHoneyJarsPrice(e.target.value)
                }}/> </div>
                <div className="price-div" style={{ borderColor:(foodPrice==0) ? "red" : "gold" }}> <TextField id="standard-basic" label="Food Price" variant="standard" name="Food Price" type="number" value={foodPrice} onChange={(e)=>{
                    setFoodPrice(e.target.value)
                }}/> </div>
                <div className="price-div" style={{ borderColor:(drugsPrice==0) ? "red" : "gold" }}> <TextField id="standard-basic" label="Drugs Price" variant="standard" name="Drugs Price" type="number" value={drugsPrice} onChange={(e)=>{
                    setDrugsPrice(e.target.value)
                }}/> </div>
                { (save) ? <CreateIcon onClick={() => {setSave(!save);setEditPrice(!editprice)}}/>  : <Button type="submit" onClick={() => {
                    if((hivePrice===0) && (honeyJarsPrice===0) && (foodPrice===0) && (drugsPrice===0)){
                        
                        
                        console.log("hello")
                    }
                    if(hivePrice!=0 && honeyJarsPrice!=0 && foodPrice!=0 && drugsPrice!=0){
                        AddPricing();
                        setSave(!save);
                        setEditPrice(!editprice);
                    }
                    }
                    }
                    disabled={(hivePrice==0) || (honeyJarsPrice==0) || (foodPrice==0) || (drugsPrice==0)}
                    > Save Prices </Button>}
            </div>    
        }
            {((price.hivePrice===0) || (price.honeyJarPrice===0) || (price.foodPrice===0) || (price.drugPrice===0)) 
            
            ? 
            
            <div className='Price-Error'>
                 Please Specify A Valid Price For Your Product! 
            </div> 
            
            : 
            <form onSubmit={AddSales}>
                    <div className="Sales-div"> <TextField id="standard-basic" label="Nb Of Hives Sold" variant="standard" name="NbOfHivesSold" type="number" onChange={(e)=>{
                        setNbOfHivesSold(e.target.value)
                    }}/>  </div>
                    <div className="Sales-div"> <TextField id="standard-basic" label="Nb Of Honey Jars Sold" variant="standard" name="NbOfHoneyJarsSold" type="number" onChange={(e)=>{
                        setNbOfHoneyJarsSold(e.target.value)
                    }}/>  </div>
                    <div className="Sales-div"> <TextField id="standard-basic" label="Nb Of Food Sold" variant="standard" name="NbOfFoodSold" type="number" onChange={(e)=>{
                        setNbOfFoodSold(e.target.value)
                    }}/>  </div>
                    <div className="Sales-div"> <TextField id="standard-basic" label="Nb Of Drugs Sold" variant="standard" name="NbOfDrugsSold" type="number" onChange={(e)=>{
                        setNbOfDrugsSold(e.target.value)
                    }}/>  </div>
                <Button sx={{
                    backgroundColor: ((nbOfHivesSold === '' || nbOfHivesSold == 0) &&
                                    (nbOfHoneyJarsSold === '' || nbOfHoneyJarsSold == 0) &&
                                    (nbOfFoodSold === '' || nbOfFoodSold == 0) &&
                                    (nbOfDrugsSold === '' || nbOfDrugsSold == 0))
                                    ? "transparent !improtant" : "green !important",
                    color: "white"
                }}  type="submit" disabled={((nbOfHivesSold==='' || nbOfHivesSold<=0) && (nbOfHoneyJarsSold==='' || nbOfHoneyJarsSold<=0) && (nbOfFoodSold==='' || nbOfFoodSold<=0) && (nbOfDrugsSold==='' || nbOfDrugsSold<=0))}> Save Changes! </Button>
            </form>
            }
            
        </>
    );
}
 
export default Sales;