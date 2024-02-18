import { Link } from "react-router-dom";
import '../css/card.css'


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
        <img 
          className="card-img-top" 
          data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
          alt="Thumbnail [100%x225]" 
          style={{height: '100%', width: '100%', display: 'block'}}
	        src={camera.img_src} 
          data-holder-rendered="true" />             

          <div className="card-body">
            <p className="card-text custom-cardtitle">{camera.model}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                  <Link type="button" className="btn btn-sm custom-link" to={`/cameras/${camera._id}`} >View</Link>
                  {/* <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> */}
                  <button type="button" className="btn btn-sm ml-1  custom-button " onClick={()=>handleDelete(camera)}>Delete</button>
              </div>
              <small className="text-muted custom-card-small">{camera?.color ? camera?.color.join(', ') : camera?.color}</small>
            </div>
          </div>  
        </div>
      </div>
     );
}
 
export default Card;