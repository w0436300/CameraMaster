import {useState, useEffect} from 'react';
import Card from './Card';
import '../css/main.css'
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom'

const Main = () => {

  const [cameras, setCameras] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/cameras')
      .then(response => {
        console.log(response.data);
        setCameras(response.data)

    })
    // .catch(error => {
    //   console.error('Error:', error);
    // });

  },[])

  function handleDelete(cameraId) {
    // //make a call to the delete endpoint for removing the camera from the db
    axios.delete(`http://localhost:8000/cameras/${cameraId}`)
      .then(response => {
        console.log(response)
        //update the states to exclude the newley deleted camera...
        //creat a new array that will over write the current ar5ray
        //apply filter out the deleted camera
        const filteredCameras = cameras.filter(item => item._id != cameraId)
        setCameras(filteredCameras);//trigger re-render without deleted
      })
      .catch(error => {
        console.log(error);
      })
  }

  
  

    return ( 
      <div>
    
        <div className="album py-5 bg-light">
        <Link className = "btn btn-sm btn-outline-secondary" to="/signin">Sign In</Link>    
        <Link className = "btn btn-sm btn-outline-secondary" to="/addCamera">Add New Camera</Link>    

          <div className="container">
            <div className="row">

              { cameras.map(camera => <Card camera={camera} key={camera._id} onDelete={handleDelete} />)}

            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Main;