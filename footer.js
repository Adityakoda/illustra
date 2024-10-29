import React from "react";
import { Link } from "react-router-dom"; 
import twitter from './images/twitter.png';
import facebook from './images/facebook.png';
import instagram from './images/instagram.png';
import './footer.css';

function Footer() {
    return (
        <section className="footer">
            <div className="container6">
                <div className="footer_1">
                    <h4>Illustra</h4>
                    <p>Discover the magic of AI image generation with Illustra.ai</p>
                </div>
                <div className="footer_2">
                    <h4>Permalinks</h4>
                    <ul className="permalinks">
                        <Link to="/" ><li><a ><>Home</></a></li></Link>
                        <Link to="/contact" ><li><a ><>Contact</></a></li></Link>
                    </ul>
                </div>
                <div className="footer_3"> 
                    <h4>Privacy</h4>
                    <ul className="privacy">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms And Conditions</a></li>
                        <li><a href="#">Refund Policy</a></li>
                    </ul>
                </div>
                <div className="footer_4">
                    <h4>Contact Us</h4>
                    <div> 
                        <p>+91 12345 09876</p>
                        <p>illustragroup@gmail.com</p>
                    </div>
                    <ul className="social_img">
                        <a href="https://www.twitter.com" target='blank' rel="noopener noreferrer">
                            <img src={facebook} alt="Facebook" className="img5" />
                        </a>  
                        <a href="https://www.twitter.com" target='blank' rel="noopener noreferrer">
                            <img src={instagram} alt="Instagram" className="img5" />
                        </a>
                        <a href="https://www.twitter.com" target='blank' rel="noopener noreferrer">
                            <img src={twitter} alt="Twitter" className="img5" />
                        </a>
                    </ul>
                </div>
            </div>
        </section>
    );
}
export default Footer;