import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (  
        <>
            <div style={{margin:"auto"}}>
                <h1 style={{color:"red"}}> Error 404 Page Not Found!</h1>
                <h1> hi </h1>
                <Link to="/"> Return Back to HomePage </Link>
            </div>
        </>
    );
}
 
export default ErrorPage;