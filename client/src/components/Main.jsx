import {useState, useEffect} from 'react';
import Card from './Card';
import '../css/main.css'
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom'
import Landing from './Landing';
import SearchForm from './SearchForm';


const Main = () => {

  const location = useLocation();
  const [cameras, setCameras] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [userRoles, setUserRoles] = useState([]);
  

  useEffect(() => {
    
    if (location.state && location.state.roles) {
        setUserRoles(location.state.roles);
    }
  }, [location.state]);

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

    if (!userRoles.includes('admin')) {
      alert('You do not have permission to perform this action.');
      return;
  }
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

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  

  if (isLoading) {
    return <Landing />

  }
    return ( 
      <div>

        <section className="jumbotron text-center custom-searchForm">
          <div className="container">
            
            <SearchForm onSearch={handleSearch} />
           
            <div className="btn-group mt-4 ">
            <Link className = "btn btn-sm btn-outline-secondary ml-2" to="/addcamera">Add New Camera</Link>

              </div>
          </div>
        </section>
        
    
        <div className="album py-5 bg-light custom-main">
          <div className="container">
            <div className="row">
             {cameras.filter(camera => 
               camera.model.toLowerCase().includes(searchQuery.toLowerCase()) || 
               camera.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
               (camera.color && Array.isArray(camera.color) ? camera.color.some(color => color.toLowerCase().includes(searchQuery.toLowerCase())) : false)
               ).map(camera => <Card camera={camera} key={camera._id} onDelete={handleDelete} />)}
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Main;