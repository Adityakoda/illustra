import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"; 
import './nav2.css';
import profile from './images/Profile-removebg-preview.png';

const Nav2 = () => { 
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const storedUserName = localStorage.getItem('userName');
        if (storedUserName) {
            setUserName(storedUserName);
        }
    }, []);

    return (
        <div>
            <div className='head2'>
                <Link to="/"> <h2>ILLUSTRA.ai</h2></Link>
                <ul className="nav_menu">
                    <Link to="/" ><a ><>Home</></a></Link>
                    <Link to="/contact" ><a ><>Contact</></a></Link>
                    <div className='profile'>
                        <img src={profile} alt='profile ' className='profile'></img>    
                        <a>{userName || "Profile"}</a> 
                    </div>
                </ul>
            </div>
        </div> 
    );
};

export default Nav2;
