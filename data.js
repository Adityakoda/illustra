    import React from "react";
    import vintage from './images/surreal ai.jpg'
    import snake from './images/door-leading-magical-world_23-2151038217.jpg'
    import duck from './images/thumbnail4469628023200496738report4077543322767060526aiease_base_07394_.webp'
    import './data.css';  

    function data(){
        return( 
            <section className="container2 ">
                <div className="header">
                    <h1>Discover the magic of AI image generation with Illustra.ai</h1>
                </div>
                <div className="nest">
                    <div className="left">
                        <p>It's free to test out the AI Image generator and it makes creating your own images super easy. Just write a description of the image you'd like to generate and watch the text to image transformation happen in seconds.
                            So simple to get the perfect images or create stunning visuals with our AI image generator. Dream it, and use text to image online to visualize it. Easily create different AI images for products, characters, and portraits at your fingertips even if it doesn't exist yet.
                            Type your simple text description and our AI generator lets you create images in seconds. Powered by AI technology, our AI image creator makes it easy to bring imagination to life. The possibilities for creativity are endless!
                        </p>
                    </div>
                    <div className="right">
                        <img src={vintage} className="img1" alt="vintage" />
                    </div>
                </div>
                <div className="nest-flip">
                    <div className="left">
                        <p>
                            The system integrates with advanced AI models to translate textual inputs into visual outputs, ensuring high-quality and contextually accurate images. ReactJS, known for its component-based architecture, is utilized to manage the application's state and render complex UI elements efficiently. This modular approach enables the seamless integration of features like text input fields, image display areas, and loading indicators, all while maintaining a fast and responsive user experience.
                        </p>
                    </div>
                    <div className="right">
                        <img src={snake} className="img2" alt="snake" />
                    </div>
                </div>
                <div className="nest">
                    <div className="left">
                    <p>It's free to test out the AI Image generator and it makes creating your own images super easy. Just write a description of the image you'd like to generate and watch the text to image transformation happen in seconds.
                        So simple to get the perfect images or create stunning visuals with our AI image generator. Dream it, and use text to image online to visualize it. Easily create different AI images for products, characters, and portraits at your fingertips even if it doesn't exist yet.
                        Type your simple text description and our AI generator lets you create images in seconds. Powered by AI technology, our AI image creator makes it easy to bring imagination to life. The possibilities for creativity are endless!
                    </p>
                </div>
                <div className="right">
                    <img src={duck} className="img3" alt="duck" />
                </div>
            </div>
        </section>
    )
}
export default data;