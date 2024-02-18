import {useState, useEffect} from 'react';
import Card from './Card';
import '../css/main.css'
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Landing from './Landing';


const Main = () => {

  const [cameras, setCameras] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    axios.get('http://localhost:8000/cameras')
      .then(response => {
        console.log(response.data);
        setCameras(response.data);
        setIsLoading(false);

    })
    .catch(error => {
      console.error('Error:', error);
    });

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

  if (isLoading) {
    return <Landing />

  }
    return ( 
      <div>
        <section className="jumbotron text-center">
          <div className="container">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search this site" />
              <div className="input-group-append">
                <button className="btn btn-secondary" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
            <div className="btn-group mt-4 ">
            <Link className = "btn btn-sm btn-outline-secondary ml-2" to="/addcamera">Add New Camera</Link>
              </div>
            

          </div>
        </section>
        
    
        <div className="album py-5 bg-light">
            
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