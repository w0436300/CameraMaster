import {useEffect, useState} from "react";
import { useLocation, useParams } from "react-router-dom";
import '../css/detail.css';
import axios from "axios";

const Details = () => {
    
    const [camera, setCamera] = useState(null)
    const { id }=useParams()
    useEffect (() => {
        axios.get(`http://localhost:3300/cameras/${id}`)
        .then(response => {
            setCamera(response.data)
            console.log(camera?.color);
        })
    },[])

    return (
       
         <div className="align-items-center">
            <div className="col-lg-8 col-md-8" style={{ margin: "auto", paddingTop: 30, paddingBottom: 50 }}>
                <h4 className="font-size38 sm-font-size32 xs-font-size30">{camera?.model}</h4>
                <p className="no-margin-bottom">Brand: {camera?.brand}</p>
                <div className="contact-info-section margin-40px-tb">
                    <ul className="list-style9 no-margin">
                        <li>
                            <div className="row">
                                <div className="col-md-5 col-5">
                                    <   strong className="margin-10px-left text-orange">Price:</strong>
                                </div>
                                <div className="col-md-7 col-7">
                                    <p>{camera?.price}</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div className="col-md-5 col-5">
                                    <strong className="margin-10px-left text-yellow">Release Year:</strong>
                                </div>
                                <div className="col-md-7 col-7">
                                    <p>{camera?.release_year}</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div className="col-md-5 col-5">
                                    <strong className="margin-10px-left text-lightred">Features:</strong>
                                </div>
                                <div className="col-md-7 col-7 ">
                                    
                                        <ul className="list-unstyled ">
                                            {camera?.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                     
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div className="col-md-5 col-5">
                                    <strong className="margin-10px-left text-green">Film Size:</strong>
                                </div>
                                <div className="col-md-7 col-7">
                                    <p> {camera?.film_size}</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div className="col-md-5 col-5">
                                    <strong className="margin-10px-left xs-margin-four-left text-purple">Film Types:</strong>
                                </div>
                                <div className="col-md-7 col-7">
                                    <p>{camera?.film_type.join(', ')}</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div className="col-md-5 col-5">
                                    <strong className="margin-10px-left xs-margin-four-left text-pink">Color:</strong>
                                </div>
                                <div className="col-md-7 col-7">
                                    <p>{camera?.color}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <h5 className="font-size24 sm-font-size22 xs-font-size20">Grades</h5>


                {
                    camera?.grades ? (
                        <div className="sm-no-margin">
                            <div className="progress-text">
                                <div className="row">
                                    <div className="col-7">Math</div>
                                    <div className="col-5 text-right">camera?.grades?.math</div>
                                </div>
                            </div>
                            <div className="custom-progress progress">
                                <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: `${camera?.grades?.math}%` }} className="animated custom-bar progress-bar slideInLeft bg-sky"></div>
                            </div>
                            <div className="progress-text">
                                <div className="row">
                                    <div className="col-7">English</div>
                                    <div className="col-5 text-right">{camera?.grades?.english}%</div>
                                </div>
                            </div>
                            <div className="custom-progress progress">
                                <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: `${camera?.grades?.english}%` }} className="animated custom-bar progress-bar slideInLeft bg-orange"></div>
                            </div>
                            <div className="progress-text">
                                <div className="row">
                                    <div className="col-7">Science</div>
                                    <div className="col-5 text-right">{camera?.grades?.science}%</div>
                                </div>
                            </div>
                            <div className="custom-progress progress">
                                <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: `${camera?.grades?.science}%` }} className="animated custom-bar progress-bar slideInLeft bg-green"></div>
                            </div>
                        </div>


                    ) : (
                        <p>No Grades Available</p>
                    )
                }


            </div>
        </div> 
     
     )
    
}
 
export default Details;