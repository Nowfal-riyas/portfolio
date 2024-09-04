import React, {useState} from 'react';
import "./styles/styles.css";
import {NavLink, Link} from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [color, setColor] = useState(false);

    const handleClick = () =>{
        setClick(!click)
    }

    const changeColor = () =>{
        if (window.scrollY >= 100){
            setColor(true)
        }
        else{
            setColor(false)
        }
    }

    window.addEventListener("scroll", changeColor);


  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/"> 
        <h1>Portfolio</h1> 
        </Link>
    
        <ul className={
            click ? "nav_links active" : "nav_links" }>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/project">Project</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>
        <div className='hamburger_menu' onClick={handleClick}>
            {click ? (
                <FaTimes  size={20} style={{
                color: 'aliceblue',
            }} />
            ):(
                <FaBars  size={20} style={{
                    color: 'aliceblue',
                }} />
            )}
        
            
            
        </div>
    </div>
  );
};

export default Navbar
