import React from 'react';
import "./styles/styles.css";
import IntroImg from "../assets/wp14194219.jpg";
import {Link} from "react-router-dom";

const Heroimg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro_img'
        src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
        <p>Hello I'm A</p>
        <h1>Full Stack Developer</h1>
        <div>
            <Link to="/project" 
            className='btn'>Projects</Link>
             <Link to="/contact" 
            className='btn_light'>Contacts</Link>
        </div>
      </div>
    </div>
  )
}

export default Heroimg
