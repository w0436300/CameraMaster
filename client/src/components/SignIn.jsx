import React from 'react';
import '../css/signin.css';
import { Link } from "react-router-dom";

const SignIn = props => {
    
    const handleSubmit = event =>{
        event.preventDefault()
        axios.get(`http://localhost:8000/users`,)
        
    }
    

    return ( 
        <form className="form-signin" onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            <div className="text-center py-2" >
                <p>Don't have an account yet?</p>
                <Link className='btn btn-sm ml-1  custom-button' to={'/newsletter'} >Register</Link>

            </div>
        </form>
     );
}
 
export default SignIn;