import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import twitter from './images/Icon-twitter.png';
import facebook from './images/Icon-facebook.png';
import google from './images/Icon-google.png';
import instagram from './images/Icon-instagram.png';
import Sea from './images/back5.jpg';
import './contact.css';

function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm('service_57qsvm5', 'template_qgquk1m', form.current, 'wMfiSObcmUm_JFU7s')
        .then(
            () => {
                console.log('SUCCESS!');
                alert('Email sent successfully!');
            },
            (error) => {
                console.log('FAILED...', error.text);
                alert('Failed to send email.');
            }
        );
    };
    return (
        <section className="container8">
            <img src={Sea} alt="sea" className="img1" />
            <div className="main_container">
                <div className="left_container">
                    <div className="top_container">
                        <h2>CONTACT US</h2>
                    </div>
                    <div className="icons-container">
                        <a href="https://www.twitter.com" target='blank' rel="noopener noreferrer" className="share-icon">
                            <img src={twitter} alt="Twitter" />
                        </a>
                        <a href="https://www.facebook.com" target='blank' rel="noopener noreferrer" className="share-icon">
                            <img src={facebook} alt="Facebook" />
                        </a>
                        <a href="#https://www.google.com" target='blank' rel="noopener noreferrer" className="share-icon">
                            <img src={google} alt="Google" />
                        </a>
                        <a href="https://www.instagram.com" target='blank' rel="noopener noreferrer" className="share-icon">
                            <img src={instagram} alt="Instagram" />
                        </a>
                    </div>
                </div>
                <form className="right_container" ref={form} onSubmit={sendEmail}> 
                    <h2>Enter Your Query</h2>
                    <div className="message">
                        <input type="text" name="user_name" placeholder="First Name" required />
                        <input type="text" name="user_lastname" placeholder="Last Name" required />
                        <input type="email" name="user_email" placeholder="E-Mail" required />
                        <textarea name="message" placeholder="Type Message Here" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
export default Contact;