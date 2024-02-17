import {useState, useEffect} from 'react';
import Card from './Card';
import '../css/main.css'
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom'

const Main = () => {

  const [cameras, setCameras] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3300/cameras')
    .then(response => {
      console.log(response.data);
      setCameras(response.data)

    })
    .catch(error => {
      console.error('Error:', error);
    });

  },[])
  
  

    return ( 
      <div>
    
        <div className="album py-5 bg-light">
        <Link className = "btn btn-sm btn-outline-secondary" to="/signin">Sign In</Link>    
        <Link className = "btn btn-sm btn-outline-secondary" to="/">Add New Camera</Link>    

          <div className="container">
            <div className="row">

              { cameras.map(camera => <Card camera={camera} key={camera._id} />)}

            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Main;