import { TextField } from '@mui/material';
import { useState,useContext } from 'react';
import '../css/Stock.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import { UserContext } from './UserContext';

/* 

    ! When Getting Stock and adding multiple on same day, its getting the oldest stock on the current day!

*/

const Stock = () => {
    const [nbOfHives,setNbOfHives] = useState(0);
    const [nbOfApiaries,setNbOfApiaries] = useState(0);
    const [nbOfJarsFilledWithHoney,setNbOfJarsFilledWithHoney] = useState(0);
    const [nbOfEmptyJars,setNbOfEmptyJars] = useState(0);
    const [nbOfFood,setNbOfFood] = useState(0);
    const [nbOfDrugs,setNbOfDrugs] = useState(0);
    const [priceOfHives,setPriceOfHives] = useState(0);
    const [priceOfApiaries,setPriceOfApiaries] = useState(0);
    const [priceOfEmptyJars,setPriceOfEmptyJars] = useState(0);
    const [priceOfFood,setPriceOfFood] = useState(0);
    const [priceOfDrugs,setPriceOfDrugs] = useState(0);
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
                totalNbofDrugs:parseInt(oldStock.totalNbofDrugs)+parseInt(nbOfDrugs),
                priceOfAllHives:parseInt(oldStock.priceOfAllHives)+parseInt(priceOfHives),
                priceOfAllApiaries:parseInt(oldStock.priceOfAllApiaries)+parseInt(priceOfApiaries),
                priceOfAllJars:parseInt(oldStock.priceOfAllJars)+parseInt(priceOfEmptyJars),
                priceOfAllFood:parseInt(oldStock.priceOfAllFood)+parseInt(priceOfFood),
                priceOfAllDrugs:parseInt(oldStock.priceOfAllDrugs)+parseInt(priceOfDrugs)
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
                { (oneIsActive.div1) && <TextField id="standard-basic" label="Price Of Hives" variant="standard" name="PriceOfHives" type="number" onChange={(e)=>{
                    setPriceOfHives(e.target.value)
                }} value={priceOfHives} required={nbOfHives>0 && priceOfHives>=0}/>}

                { (active.div2===2) && <div className='icons' onClick={() => handleClick("div2")} > Nb Of Apiaries </div>}
                { (oneIsActive.div2) && <TextField id="standard-basic" label="Nb Of Apiaries" variant="standard" name="NbOfApiaries" type="number" onChange={(e)=>{
                    setNbOfApiaries(e.target.value)
                }} value={nbOfApiaries} />}
                { (oneIsActive.div2) && <TextField id="standard-basic" label="Price Of Apiaries" variant="standard" name="PriceOfApiaries" type="number" onChange={(e)=>{
                    setPriceOfApiaries(e.target.value)
                }} value={priceOfApiaries} required={nbOfApiaries>0 && priceOfApiaries>=0}/>}

                { (active.div3===3) && <div className='icons' onClick={() => handleClick("div3")} > Nb Of Jars Filled With Honey </div>}
                { (oneIsActive.div3) && <TextField id="standard-basic" label="Nb Of Jars Filled" variant="standard" name="NbOfJarsFilled" type="number" onChange={(e)=>{
                    setNbOfJarsFilledWithHoney(e.target.value)
                }} value={nbOfJarsFilledWithHoney}/>}

                { (active.div4===4) && <div className='icons' onClick={() => handleClick("div4")} > Nb Of Empty Jars </div>}
                { (oneIsActive.div4) && <TextField id="standard-basic" label="Nb Of Empty Jars" variant="standard" name="NbOfEmptyJars" type="number" onChange={(e)=>{
                    setNbOfEmptyJars(e.target.value)
                }} value={nbOfEmptyJars}/>}
                { (oneIsActive.div4) && <TextField id="standard-basic" label="Price Of Empty Jars" variant="standard" name="PriceOfEmptyJars" type="number" onChange={(e)=>{
                    setPriceOfEmptyJars(e.target.value)
                }} value={priceOfEmptyJars} required={nbOfEmptyJars>0 && priceOfEmptyJars>=0}/>}

                { (active.div5===5) && <div className='icons' onClick={() => handleClick("div5")} > Nb Of Food </div>}
                { (oneIsActive.div5) && <TextField id="standard-basic" label="Nb Of Food" variant="standard" name="NbOfFood" type="number" onChange={(e)=>{
                    setNbOfFood(e.target.value)
                }} value={nbOfFood}/>}
                { (oneIsActive.div5) && <TextField id="standard-basic" label="Price Of Food" variant="standard" name="PriceOfFood" type="number" onChange={(e)=>{
                    setPriceOfFood(e.target.value)
                }} value={priceOfFood} required={nbOfFood>0 && priceOfFood>=0}/>}

                { (active.div6===6) && <div className='icons' onClick={() => handleClick("div6")} > Nb Of Drugs </div>}
                { (oneIsActive.div6) && <TextField id="standard-basic" label="Nb Of Drugs" variant="standard" name="NbOfDrugs" type="number" onChange={(e)=>{
                    setNbOfDrugs(e.target.value)
                }} value={nbOfDrugs}/>}
                { (oneIsActive.div6) && <TextField id="standard-basic" label="Price Of Drugs" variant="standard" name="PriceOfDrugs" type="number" onChange={(e)=>{
                    setPriceOfDrugs(e.target.value)
                }} value={priceOfDrugs} required={nbOfDrugs>0 && priceOfDrugs>=0}/>}

                {(nbOfHives!==0 || nbOfApiaries!==0 || nbOfJarsFilledWithHoney!==0 || nbOfEmptyJars!==0 || nbOfFood!==0 || nbOfDrugs!==0) && <Button  sx={{
  backgroundColor: ((nbOfHives === '' || nbOfHives === 0) &&
                    (nbOfApiaries === '' || nbOfApiaries === 0) &&
                    (nbOfJarsFilledWithHoney === '' || nbOfJarsFilledWithHoney === 0) &&
                    (nbOfEmptyJars === '' || nbOfEmptyJars === 0) &&
                    (nbOfFood === '' || nbOfFood === 0) &&
                    (nbOfDrugs === '' || nbOfDrugs === 0))
                    ? 0 : "green",
  color: "white"
}}  type="submit" disabled={((nbOfHives==='' || nbOfHives===0) && (nbOfApiaries==='' || nbOfApiaries===0) && (nbOfJarsFilledWithHoney==='' || nbOfJarsFilledWithHoney===0) && (nbOfEmptyJars==='' || nbOfEmptyJars===0) && (nbOfFood==='' || nbOfFood===0) && (nbOfDrugs==='' || nbOfDrugs===0)) || (nbOfHives>0 && priceOfHives<=0) || (nbOfApiaries>0 && priceOfApiaries<=0) || (nbOfEmptyJars>0 && priceOfEmptyJars<=0) || (nbOfFood>0 && priceOfFood<=0) || (nbOfDrugs>0 && priceOfDrugs<=0)} > Save Changes! </Button>}

                
                { (oneIsActive.div1 || oneIsActive.div2 || oneIsActive.div3 || oneIsActive.div4 || oneIsActive.div5 || oneIsActive.div6) && <div> <CloseIcon sx={{color:"white",fontSize:"2.5rem"}} onClick={handleShowAll} /> </div>}
                
            </div>
            </form>
            
        </>
     );
}
 
export default Stock;