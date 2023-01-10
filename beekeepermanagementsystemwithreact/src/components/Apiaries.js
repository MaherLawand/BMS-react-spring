import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from 'react-router-dom';
import { Navigation } from "swiper";
import '../css/Apiaries.css';
import "swiper/css";
import "swiper/css/navigation";
import { useEffect ,useState } from 'react';
const Apiaries = () => {
    
    const [myArray, setMyArray] = useState(null);
    const [chunks, setChunks] = useState(null);
  
    const chunkSize = 14;
    const fetchApiaries = async () => {
        try{
            await fetch('http://localhost:8080/apiary/getAllApiariesAsc/1',{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
            }})
            .then((res) => res.json())
            .then((data)=> {
                setMyArray(data)
            })
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchApiaries();
    },[])
    useEffect(() => {
      if (myArray) {
        const numChunks = Math.ceil(myArray.length / chunkSize);
        const chunks = [];
        for (let i = 0; i < numChunks; i++) {
          const startIndex = i * chunkSize;
          const endIndex = startIndex + chunkSize;
          const chunk = myArray.slice(startIndex, endIndex);
          chunks.push(chunk);
        }
        setChunks(chunks);
        console.log(chunks)
      }
    }, [myArray]);
   
    return (
        <>
        <div style={{margin:"auto"}}>
        {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide className="Content"><div className="apiaries"> 
            {error && <div> {error} </div>}
            {isPending && <div> Loading... </div>}
            {data && <> {data.map((d) =>
            <div className="apiaryBoxes" key={d.row}> 
                <div className='apiarySerialNb' key={d.row}>
                     {d.apiarySerialNb} 
                </div> 
            </div>
            )} 
            </>}              
            </div></SwiperSlide>
            <SwiperSlide className="Content">Slide 2</SwiperSlide>
        </Swiper> */}
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {chunks && chunks.map((chunk)=> (           
            <SwiperSlide className="Content"><div className="apiaries">
                {chunk.map((item) => (
                <div className="apiaryBoxes" key={item.row}> 
                    <div className='apiarySerialNb' key={item.row}>
                        {item.apiarySerialNb} 
                    </div> 
                 </div>
                ))}
<<<<<<< Updated upstream
=======
                {endIndex===chunks.length-1 && <div className="apiaryBoxes"> 
                    <div className='apiarySerialNb'>
                       <Link to="/NewApiary"><ControlPointIcon/></Link>
                    </div> 
                 </div>}
>>>>>>> Stashed changes
                </div>
            </SwiperSlide>
        ))}
        </Swiper>
        </div>       
        </>
    )
}

 
export default Apiaries;

    // const chunkSize = 2;
    // const chunkedData = [];
    // let i = 0;

    //     while (i < data.length) {
    //         chunkedData.push(data.slice(i, i + chunkSize));
    //         i += chunkSize;
    //     }