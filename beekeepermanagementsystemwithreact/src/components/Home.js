import image from '../images/Hivenew.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <>  
            <div className="backgroundImageWrapper">
                <img src={image} className="Hive-bg" alt="bg" />
            </div>
            <div className="introandreg">
                <div className="intro">
                    <h1 style={{color:'white'}}> Welcome to our website about a beekeeper management system!</h1>
                    <p style={{color:'white'}}>Our system is designed to help beekeepers of all levels manage and track their bees, hives,apiaries and much more! Whether you're a beginner just starting out with a few hives, or a seasoned pro with a large apiary, our system has the tools and features you need to stay organized and on top of your beekeeping tasks.
                    With our system, you can easily record and track important information about your hives and bees, such as the location, size, and health of each hive. You can also track your harvest data, including the amount and type of honey produced.
                    Thank you for visiting our website. We hope our beekeeper management system will be a valuable tool for you in your beekeeping journey.</p>
                </div>
                <div className="register">
                    <h2 style={{color:'white'}}> Registration </h2>
                    <Link to="/Registration">Register</Link>
                    {/* <Button disabled>Disabled</Button>
                    <Button href="#text-buttons">Link</Button> */}
                </div>      
            </div>
        </>
    );
}
 
export default Home;