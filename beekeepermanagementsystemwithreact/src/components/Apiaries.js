import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import '../css/Apiaries.css';
import "swiper/css";
import "swiper/css/navigation";
import { useEffect ,useState,useContext } from 'react';
import { UserContext } from './UserContext';
import logo from '../logo.svg'
import Loading from '../images/loading.svg';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import LoadingBee from './LoadingBee';
const Apiaries = () => {
    
    const [myArray, setMyArray] = useState(null);
    const [chunks, setChunks] = useState(null);
    const {user,setUser} = useContext(UserContext);

    const [error, setError] = useState(null);
    const [loading, setLoading]= useState(true);

    
    const fetchApiaries = async () => {
        try{
            await fetch(`http://localhost:8080/apiary/getAllApiariesAsc/${user.userId}`,{
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
            setError(error);
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        if(user!==null){
            fetchApiaries();
        }else{
            setLoading(false);
        }
    },[])
    const chunkSize = 14;
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
    console.log(chunks);
    return (
        <div className='pageWrap'>
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

        {loading &&<div className="LoadingWrap"> <LoadingBee /> </div>}
        {error && <h1> {error} </h1>}
        {!user && <h1> Make Sure You're Logged In to Check Data </h1>}
        {!loading &&
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {chunks && chunks.map((chunk,endIndex)=> (           
            <SwiperSlide className="Content"><div className="apiaries">
                {chunk.map((item) => (
                <div className="apiaryBoxes" key={item.row}> 
                    <div className='apiarySerialNb' key={item.row}>
                        {item.apiarySerialNb} 
                    </div> 
                 </div>
                ))}
                {endIndex===chunks.length-1 && <div className="apiaryBoxes"> 
                    <div className='apiarySerialNb'>
                        <ControlPointIcon/>
                    </div> 
                 </div>}
                </div>
                
            </SwiperSlide>
        ))}
        
        </Swiper>}
        </div>       
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