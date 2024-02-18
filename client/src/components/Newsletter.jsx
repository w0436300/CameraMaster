import {useEffect, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/newsletter.css';
import Landing from './Landing';
import axios from 'axios';

const Newsletter = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(false); //
        };

        loadData();
    }, []);

   

    const handleSubmit = event => {
        event.preventDefault()
        // setIsLoading(true)
        //build our post body to send to the api
        const formData = {
            name: event.target.name.value,
            last_name: event.target.lastName.value,
            email: event.target.email.value,
            registeredAt: new Date().toISOString()
        }
        //post this data to an endpoint for creation
        axios.post(`http://localhost:8000/users`, formData)
        .then(response => {
            console.log(response)
            toast.success("We got your information!!"); 
            // if(response.status.)
        })
        .catch(error => {
            console.log(error);
            toast.error("Submission failed, please try again!")
        })
        .finally(() => {
            console.log("Finished loading");

            // setIsLoading(false); // 
        });
            
    }

    if(isLoading) {
            return <Landing />
        }

    return ( 
      <div>
        <ToastContainer />
        <form className="form form-newsletter" onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal text-center">Our Newsletter</h1>
            
            <div className='form-row mb-2'>
                 <label htmlFor="inputName" className="sr-only form-label">Name</label>
                 <input type="text" 
                    id="inputName" 
                    className="form-input form-control" 
                    placeholder="Name"
                    name="name"
                    defaultValue='John'
                    required autoFocus />
            </div>
           
            <div className='form-row mb-2'>
                <label htmlFor="inputLastName" className="sr-only form-label">Name</label>
                 <input type="text" 
                        id="inputLastName" 
                        className="form-input form-control" 
                        placeholder="LastName"
                        name="lastName"
                        defaultValue='Smith'
                        required autoFocus />
            </div>
            
            <div className='form-row'>
                <label htmlFor="inputEmail" className="sr-only form-label">Email address</label>
                <input type="email" 
                       id="inputEmail" 
                         className="form-input form-control" 
                         name="email"
                         placeholder="Email address" 
                          defaultValue='test@test.com'
                          required autoFocus />
            </div>

             <button className="btn btn-lg btn-primary btn-block mt-4" type="submit" >Submit</button>
        </form>
      </div>  
     );
}
 
export default Newsletter 