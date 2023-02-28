import React from "react";
import landing_image from "../src/images/landing_image.jpg"
import "./landing.css"
import { Link } from "react-router-dom";
const Landing = () =>{
    return(
        <div className="Landing_container">
            <div className="Landing_image_container">
            <img className="Landing_image" src={landing_image} alt="landing_image"/>
            </div>
         <div className="Landing_heading">
            <h1>welcome to instaclone project </h1> 
            <Link to="/posts">
            <button>click to navigate to insta clone post views</button>
            </Link>
        </div>
        </div>
    )
}

export default Landing;