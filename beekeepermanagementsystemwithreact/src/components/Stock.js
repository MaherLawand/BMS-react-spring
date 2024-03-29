import { TextField } from '@mui/material';
import { useState,useContext } from 'react';
import '../css/Stock.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import { UserContext } from './UserContext';
const Stock = () => {
    const [nbOfHives,setNbOfHives] = useState("");
    const [nbOfApiaries,setNbOfApiaries] = useState("");
    const [nbOfJarsFilledWithHoney,setNbOfJarsFilledWithHoney] = useState("");
    const [nbOfEmptyJars,setNbOfEmptyJars] = useState("");
    const [nbOfFood,setNbOfFood] = useState("");
    const [nbOfDrugs,setNbOfDrugs] = useState("");
    const [oldStock,setOldStock] = useState(null);
    const {user,setUser} = useContext(UserContext);
    const date = new Date();
    const [resetDivsActive, setResetDivsActive] = useState(
        {   div1:1,
            div2:2,
            div3:3,
            div4:4,
            div5:5,
            div6:6  
        }); // this is to reset all the divs to their original state so we can see all of them

    const [resetInputActive, setInputActive] = useState(
        {   div1:false,
            div2:false,
            div3:false,
            div4:false,
            div5:false,
            div6:false  
        }); // this is to reset all the inputs for each div to their original state so we can see all of them

    const [active, setActive] = useState(
        {   div1:1,
            div2:2,
            div3:3,
            div4:4,
            div5:5,
            div6:6  
        }); // this is the original state but we change it based on which div we want to see using the handleClick method(divs)

    const [oneIsActive, setOneisActive] = useState(
        {   div1:false,
            div2:false,
            div3:false,
            div4:false,
            div5:false,
            div6:false  
        }); // this is the original state but we change it based on which div we want to see using the handleClick method(input)
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
        useEffect(()=>{
            FetchLatestStock()
        },[])

        const AddStock = async (e) => {
            e.preventDefault();
            try{
                await fetch(`http://localhost:8080/stock/addStock`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                user_id:user.userId,
                day:date,
                nbofHives:parseInt(oldStock.nbofHives)+parseInt(nbOfHives),
                nbOfApiaries:parseInt(oldStock.nbOfApiaries)+parseInt(nbOfApiaries),
                totalNbOfJars:parseInt(oldStock.totalNbOfJars)+parseInt(nbOfEmptyJars),
                jarsFilledWithHoney:parseInt(oldStock.jarsFilledWithHoney)+parseInt(nbOfJarsFilledWithHoney),
                totalNbOfFood:parseInt(oldStock.totalNbOfFood)+parseInt(nbOfFood),
                totalNbofDrugs:parseInt(oldStock.totalNbofDrugs)+parseInt(nbOfDrugs)
            })
            });
        }catch(error){
            console.log(error)
        }
    }
  const handleClick = (divName) => {
    const newActive = { ...active };
    const newOneIsActive = { ...oneIsActive };
    Object.keys(newActive).forEach((key) => {
      newActive[key] = key === divName ? active[divName] : 0;
      newOneIsActive[key] = key === divName ? true : false;
    });
    setActive(newActive);
    setOneisActive(newOneIsActive);
  }
  const handleShowAll = () => {
    setActive(resetDivsActive);
    setOneisActive(resetInputActive);
  }
    return ( 
        <>  
            <form onSubmit={AddStock}>
            <div className='icon-wrappers'>
                { (active.div1===1) && <div className='icons' onClick={() => handleClick("div1")} > Nb Of Hives </div>}
                { (oneIsActive.div1) && <TextField id="standard-basic" label="Nb Of Hives" variant="standard" name="NbOfHives" type="number" onChange={(e)=>{
                    setNbOfHives(e.target.value)
                }} value={nbOfHives}/>}

                { (active.div2===2) && <div className='icons' onClick={() => handleClick("div2")} > Nb Of Apiaries </div>}
                { (oneIsActive.div2) && <TextField id="standard-basic" label="Nb Of Apiaries" variant="standard" name="NbOfApiaries" type="number" onChange={(e)=>{
                    setNbOfApiaries(e.target.value)
                }} value={nbOfApiaries}/>}

                { (active.div3===3) && <div className='icons' onClick={() => handleClick("div3")} > Nb Of Jars Filled With Honey </div>}
                { (oneIsActive.div3) && <TextField id="standard-basic" label="Nb Of Jars Filled" variant="standard" name="NbOfJarsFilled" type="number" onChange={(e)=>{
                    setNbOfJarsFilledWithHoney(e.target.value)
                }} value={nbOfJarsFilledWithHoney}/>}

                { (active.div4===4) && <div className='icons' onClick={() => handleClick("div4")} > Nb Of Empty Jars </div>}
                { (oneIsActive.div4) && <TextField id="standard-basic" label="Nb Of Empty Jars" variant="standard" name="NbOfEmptyJars" type="number" onChange={(e)=>{
                    setNbOfEmptyJars(e.target.value)
                }} value={nbOfEmptyJars}/>}

                { (active.div5===5) && <div className='icons' onClick={() => handleClick("div5")} > Nb Of Food </div>}
                { (oneIsActive.div5) && <TextField id="standard-basic" label="Nb Of Food" variant="standard" name="NbOfFood" type="number" onChange={(e)=>{
                    setNbOfFood(e.target.value)
                }} value={nbOfFood}/>}

                { (active.div6===6) && <div className='icons' onClick={() => handleClick("div6")} > Nb Of Drugs </div>}
                { (oneIsActive.div6) && <TextField id="standard-basic" label="Nb Of Drugs" variant="standard" name="NbOfDrugs" type="number" onChange={(e)=>{
                    setNbOfDrugs(e.target.value)
                }} value={nbOfDrugs}/>}

                {(nbOfHives!=="" || nbOfApiaries!=="" || nbOfJarsFilledWithHoney!=="" || nbOfEmptyJars!=="" || nbOfFood!=="" || nbOfDrugs!=="") && <Button  sx={{
  backgroundColor: ((nbOfHives === '' || nbOfHives === "") &&
                    (nbOfApiaries === '' || nbOfApiaries === "") &&
                    (nbOfJarsFilledWithHoney === '' || nbOfJarsFilledWithHoney === "") &&
                    (nbOfEmptyJars === '' || nbOfEmptyJars === "") &&
                    (nbOfFood === '' || nbOfFood === "") &&
                    (nbOfDrugs === '' || nbOfDrugs === ""))
                    ? "" : "green",
  color: "white"
}}  type="submit" disabled={((nbOfHives==='' || nbOfHives==="") && (nbOfApiaries==='' || nbOfApiaries==="") && (nbOfJarsFilledWithHoney==='' || nbOfJarsFilledWithHoney==="") && (nbOfEmptyJars==='' || nbOfEmptyJars==="") && (nbOfFood==='' || nbOfFood==="") && (nbOfDrugs==='' || nbOfDrugs===""))} > Save Changes! </Button>}

                
                { (oneIsActive.div1 || oneIsActive.div2 || oneIsActive.div3 || oneIsActive.div4 || oneIsActive.div5 || oneIsActive.div6) && <div> <CloseIcon sx={{color:"white",fontSize:"2.5rem"}} onClick={handleShowAll} /> </div>}
                
            </div>
            </form>
            
        </>
     );
}
 
export default Stock;