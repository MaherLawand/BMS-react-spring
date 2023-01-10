import { TextField } from '@mui/material';
import { useState } from 'react';
import '../css/Stock.css';
import CloseIcon from '@mui/icons-material/Close';
const Stock = () => {
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

  const handleClick = (divName) => {
    const newActive = { ...active };
    const newOneIsActive = { ...oneIsActive };
    Object.keys(newActive).forEach((key) => {
      newActive[key] = key === divName ? active[divName] : 0;
      newOneIsActive[key] = key !== divName ? oneIsActive[divName] : true;
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
            <div className='icon-wrappers'>
                { (active.div1===1) && <div className='icons' onClick={() => handleClick("div1")} > Nb Of Hives </div>}
                { (oneIsActive.div1) && <TextField id="standard-basic" label="Nb Of Hives" variant="standard" name="NbOfHives" type="number"/>}

                { (active.div2===2) && <div className='icons' onClick={() => handleClick("div2")} > Nb Of Apiaries </div>}
                { (oneIsActive.div2) && <TextField id="standard-basic" label="Nb Of Apiaries" variant="standard" name="NbOfApiaries" type="number"/>}

                { (active.div3===3) && <div className='icons' onClick={() => handleClick("div3")} > Nb Of Jars Filled With Honey </div>}
                { (oneIsActive.div3) && <TextField id="standard-basic" label="Nb Of Jars Filled" variant="standard" name="NbOfJarsFilled" type="number"/>}

                { (active.div4===4) && <div className='icons' onClick={() => handleClick("div4")} > Nb Of Empty Jars </div>}
                { (oneIsActive.div4) && <TextField id="standard-basic" label="Nb Of Empty Jars" variant="standard" name="NbOfEmptyJars" type="number"/>}

                { (active.div5===5) && <div className='icons' onClick={() => handleClick("div5")} > Nb Of Food </div>}
                { (oneIsActive.div5) && <TextField id="standard-basic" label="Nb Of Food" variant="standard" name="NbOfFood" type="number"/>}

                { (active.div6===6) && <div className='icons' onClick={() => handleClick("div6")} > Nb Of Drugs </div>}
                { (oneIsActive.div6) && <TextField id="standard-basic" label="Nb Of Drugs" variant="standard" name="NbOfDrugs" type="number"/>}


                { (oneIsActive.div1 || oneIsActive.div2 || oneIsActive.div3 || oneIsActive.div4 || oneIsActive.div5 || oneIsActive.div6) && <div> <CloseIcon sx={{color:"white",fontSize:"2.5rem"}} onClick={handleShowAll} /> </div>}

            </div>
            
        </>
     );
}
 
export default Stock;