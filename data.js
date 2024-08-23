import React from "react";
import vintage from './images/surreal ai.jpg'
import snake from './images/door-leading-magical-world_23-2151038217.jpg'
import duck from './images/arafed-image-person-standing-front-large-structure-generative-ai_927978-7082.jpg'
import './data.css';  
function data(){
    return(
        
         <section className="container2 ">
           <div className="bubbles">
                <span style={{ '--i': 0 }}></span>
                <span style={{ '--i': 0 }}></span>
                <span style={{ '--i': 0 }}></span>
                <span style={{ '--i': 0 }}></span>
                <span style={{ '--i': 0 }}></span>
                <span style={{ '--i': 0 }}></span>
                <span style={{ '--i': 0 }}></span>
                <span style={{ '--i': 0 }}></span>
                <span style={{ '--i': 0 }}></span>
                <span style={{ '--i': 0 }}></span>
                <span style={{ '--i': 0 }}></span>
                <span style={{ '--i': 0 }}></span>
                <span style={{ '--i': 0 }}></span>
                <span style={{ '--i': 0 }}></span>
                <span style={{ '--i': 0 }}></span>
                <span style={{ '--i': 0 }}></span>
                <span style={{ '--i': 0 }}></span>
                <span style={{ '--i': 0 }}></span>
                <span style={{ '--i': 0 }}></span>
                <span style={{ '--i': 0 }}></span>

                <span style={{ '--i': 11 }}></span>
                <span style={{ '--i': 12 }}></span>
                <span style={{ '--i': 24 }}></span>
                <span style={{ '--i': 10 }}></span>
                <span style={{ '--i': 14 }}></span>
                <span style={{ '--i': 23 }}></span>
                <span style={{ '--i': 18 }}></span>
                <span style={{ '--i': 16 }}></span>
                <span style={{ '--i': 19 }}></span>
                <span style={{ '--i': 20 }}></span>
                <span style={{ '--i': 22 }}></span>
                <span style={{ '--i': 25 }}></span>
                <span style={{ '--i': 18 }}></span>
                <span style={{ '--i': 21 }}></span>
                <span style={{ '--i': 15 }}></span>
                <span style={{ '--i': 13 }}></span>
                <span style={{ '--i': 26 }}></span>
                <span style={{ '--i': 17 }}></span>
                <span style={{ '--i': 13 }}></span>
                <span style={{ '--i': 28 }}></span>
           </div>


            <div className="head">
                <h1>Discover the magic of AI image generation with Illustra.ai</h1>
            </div>
            <div className="text1">
                <p>It's free to test out the AI Image generator and it makes creating your own images super easy. Just write a description of the image you'd like to generate and watch the text to image transformation happen in seconds.
                    So simple to get the perfect images or create stunning visuals with our AI image generator. Dream it, and use text to image online to visualize it. Easily create different AI images for products, characters, and portraits at your fingertips even if it doesn't exist yet.
                    Type your simple text description and our AI generator lets you create images in seconds. Powered by AI technology, our AI image creator makes it easy to bring imagination to life. The possibilities for creativity are endless!
                    <img src={vintage} className="img1" alt="vintage" />
                </p>
                <div className="bubbles">
                    <span style={{ '--i': 11 }}></span>
                    <span style={{ '--i': 12 }}></span>
                    <span style={{ '--i': 24 }}></span>
                    <span style={{ '--i': 10 }}></span>
                    <span style={{ '--i': 14 }}></span>
                    <span style={{ '--i': 23 }}></span>
                    <span style={{ '--i': 18 }}></span>
                    <span style={{ '--i': 16 }}></span>
                    <span style={{ '--i': 19 }}></span>
                    <span style={{ '--i': 20 }}></span>
                    <span style={{ '--i': 22 }}></span>
                    <span style={{ '--i': 25 }}></span>
                    <span style={{ '--i': 18 }}></span>
                    <span style={{ '--i': 21 }}></span>
                    <span style={{ '--i': 15 }}></span>
                    <span style={{ '--i': 13 }}></span>
                    <span style={{ '--i': 26 }}></span>
                    <span style={{ '--i': 17 }}></span>
                    <span style={{ '--i': 13 }}></span>
                    <span style={{ '--i': 28 }}></span>
                </div>
            </div>  
            <div className="text2">
                <img src={snake} className="img2" alt="snake" />
                <p>
                    The system integrates with advanced AI models to translate textual inputs into visual outputs, ensuring high-quality and contextually accurate images. ReactJS, known for its component-based architecture, is utilized to manage the application's state and render complex UI elements efficiently. This modular approach enables the seamless integration of features like text input fields, image display areas, and loading indicators, all while maintaining a fast and responsive user experience.
                </p>
                <div className="bubbles">
                    <span style={{ '--i': 11 }}></span>
                    <span style={{ '--i': 12 }}></span>
                    <span style={{ '--i': 24 }}></span>
                    <span style={{ '--i': 10 }}></span>
                    <span style={{ '--i': 14 }}></span>
                    <span style={{ '--i': 23 }}></span>
                    <span style={{ '--i': 18 }}></span>
                    <span style={{ '--i': 16 }}></span>
                    <span style={{ '--i': 19 }}></span>
                    <span style={{ '--i': 20 }}></span>
                    <span style={{ '--i': 22 }}></span>
                    <span style={{ '--i': 25 }}></span>
                    <span style={{ '--i': 18 }}></span>
                    <span style={{ '--i': 21 }}></span>
                    <span style={{ '--i': 15 }}></span>
                    <span style={{ '--i': 13 }}></span>
                    <span style={{ '--i': 26 }}></span>
                    <span style={{ '--i': 17 }}></span>
                    <span style={{ '--i': 13 }}></span>
                    <span style={{ '--i': 28 }}></span>
                </div>
            </div>  
            <div className="text3">
            <p>
                It's free to test out the AI Image generator and it makes creating your own images super easy. Just write a description of the image you'd like to generate and watch the text to image transformation happen in seconds.
                So simple to get the perfect images or create stunning visuals with our AI image generator. Dream it, and use text to image online to visualize it. Easily create different AI images for products, characters, and portraits at your fingertips even if it doesn't exist yet.
                Type your simple text description and our AI generator lets you create images in seconds. Powered by AI technology, our AI image creator makes it easy to bring imagination to life. The possibilities for creativity are endless!
                <img src={duck} className="img3" alt="duck" />
            </p>
        </div>  
    </section>
    )
}
export default data;