import React, { useState } from 'react';
import '../css/signin.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


//name email dob student id

const CreateForm = props => {

    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [features, setFeatures] = useState('')
    const [price, setPrice] = useState('')
    const [url, setUrl] = useState('')
    

    const navigate = useNavigate()
    
    const handleSubmit = event => {

        event.preventDefault()

        //build our post body to send to the api
        const body = {
            model:model,
            brand:brand,
            features:features,
            price:price,
            img_src:url
        }
        //post this data to an endpoint for creation
        axios.post(`http://localhost:8000/cameras`, body)
        .then(response => {
            console.log(response)

            //navigate back to the home page if created successfully
            navigate('/cameras') //programatically navigate back to th homepage

            // if(response.status.)
        })
        .catch(error => {

        })
            
    }



    return ( 
        <form className="form-signin" onSubmit={handleSubmit}>

            <h1 className="h3 mb-3 font-weight-normal text-center">Create New Camera</h1>

            <input type="text" id="inputModel" className="form-control" placeholder="Model Name" onChange={event => setModel(event.target.value)} required  />

            
            <input type="text" id="inputBrand" className="form-control mt-2" placeholder="Brand Name" onChange={event => setBrand(event.target.value)} required  />
            

            <input type="text" id="inputPrice" className="form-control mt-2" placeholder="Price" onChange={event => setPrice(event.target.value)} required  />

            <input type="text" id="inputFeatures" className="form-control mt-2" placeholder="Features" onChange={event => setFeatures(event.target.value)} required />

            <input type="text" id="inputUrl" className="form-control mt-2" placeholder="IMG-URL" onChange={event => setUrl(event.target.value)} required />


            <button className="btn btn-lg btn-primary btn-block mt-4" type="submit">Save Camera</button>
        </form>
     );
}
 
export default CreateForm;