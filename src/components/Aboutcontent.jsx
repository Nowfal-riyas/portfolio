import React from 'react'
import "../components/styles/styles.css";
import {Link} from "react-router-dom";
import Img1 from "../assets/wp14343822-backend-developer-wallpapers.jpg";
import Img2 from "../assets/wp9641853-front-end-developer-wallpapers.jpg"

const Aboutcontent = () => {
  return (
    <div className='about'>
      <div className='about_left'>
        <h1>Who Am I ?</h1>
        <p>I'm a Full stack Application developer.</p>
        <p>Programming Languages: Python, JavaScript, Dart.</p>
        <p>Front end: HTML, CSS, Bootstrap.</p>
        <p>Mobile App: Flutter, Firebase.</p>
        <p>Back end: Flask, Rest Api, Postman.</p>
        <p>Version control: Git, Github.</p>
        <p>Database: MySQL, MongoDb.,</p>
        <Link target="_blank" to="https://drive.google.com/folderview?id=16BE9ryV9JFFjT__NjGFaR1gamTgKPAn5" className='btn'>Resume</Link>
      </div>
      <div className='about_right'>
        <div className='img_container'>
            <div className='top'>                
                <img src={Img1} className='img' alt="true" />
            </div>
            <div className='bottom'>                
                <img src={Img2} className='img' alt="true" />
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default Aboutcontent
