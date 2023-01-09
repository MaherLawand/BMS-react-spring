import Rive from '@rive-app/react-canvas';
import { useRive } from '@rive-app/react-canvas';
import bee from '../images/LoadingBee.riv'
import '../css/Apiaries.css';

const LoadingBee = () => {

    return (  
        <Rive src={bee}/>
    );
}
 
export default LoadingBee;