import { Link } from "react-router-dom";



const Card = ({camera, onDelete}) => {

  function handleDelete(camera) {
    // alert (cameraId)
    
    const answer = confirm(`Delete ${camera?.model}?`)
    if(answer){
      onDelete(camera._id)
    }
    
  }
    return ( 
        <div className="col-md-4">
        <div className="card mb-4 box-shadow">
          <div className="card-body">
            <p className="card-text">{camera.model}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                  <Link type="button" className="btn btn-sm btn-outline-secondary" to={`/cameras/${camera._id}`} >View</Link>
                  {/* <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> */}
                  <button type="button" className="btn btn-sm btn-outline-secondary" onClick={()=>handleDelete(camera)}>Delete</button>
              </div>
              <small className="text-muted">9 mins</small>
            </div>
          </div>  
        </div>
      </div>
     );
}
 
export default Card;