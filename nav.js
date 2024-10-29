import {useState} from 'react';
import { Link } from "react-router-dom"; 
import './nav.css';
import Login from './loginpage'; 
import Signup from'./signup';

const Nav=()=> {
    const [count1,setcount1]=useState(1);
    const [count2,setcount2]=useState(1);
    const handleLogin=()=>{
        setcount1(count1+1);
        setcount2(1);
        console.log(count1);
    }
    const handleSignup=()=>{
        setcount2(count2+1);
        setcount1(1);
        console.log(count2);
    }
    return(
        <div>
            <div className='head'>
                <Link to="/"> <h2>ILLUSTRA.ai</h2></Link>
                <div className='btn-container'>
                    <button className='btn1'onClick={handleLogin}>Log in</button>
                    <button className='btn2' onClick={handleSignup}>Sign Up</button>
                </div>
            </div>
            <Login count1={count1}/>
            <Signup count2={count2}/>
        </div>    
    );
};
export default Nav;