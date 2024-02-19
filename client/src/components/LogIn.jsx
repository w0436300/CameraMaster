import {useState} from 'react';
import '../css/login.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LogIn = () => {
    
    const [message, setMessage] = useState('')
    const navigate = useNavigate()
    
    const handleSubmit = async event =>{
        event.preventDefault()
        const email = document.getElementById('inputEmail').value;
        const password = document.getElementById('inputPassword').value;

        //send login request to server
        await axios.post(`http://localhost:8000/login`, { email, password })
              .then(response => {
                    console.log('Login successful', response.data);
                    navigate('/', { state: { roles: response.data.roles } });
              }).catch(error => {
                setMessage('Invalid Account or Password')
                console.log(error);
             })
                
              
        
    }
    

    return ( 
        <form className="form-login" onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal text-center">Please Log In </h1>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
            <p className='text-danger'>{message}</p>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Log In</button>
            <div className="text-center py-2" >
                <p>Don't have an account yet?</p>
                <Link className='btn btn-sm ml-1  custom-button' to={'/register'} >Register</Link>

            </div>
        </form>
     );
}
 
export default LogIn;