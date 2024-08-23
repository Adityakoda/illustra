import React from "react";
import video from './images/video.mp4'
import './start.css'
function start(){
   
        return(
             <section className="container">
                <div className="backvideo">
                   
                    <video src={video} muted autoPlay loop type="video/mp4" />
                   
                </div>
                <div className="text">
                   <h1>IILUSTRA.ai</h1>
                   <h2>Free AI Image Generator: Turn text to images online</h2>
                    <a href="#" className="button">GET STARTED</a>
                </div>
             </section>

            
        );
    
};
export default start;