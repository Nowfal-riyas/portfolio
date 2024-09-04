import React from 'react';
import "./styles/styles.css";
import { FaLinkedin, FaMailBulk, FaInstagram, FaWhatsapp} from "react-icons/fa";
import { FaLocationDot, FaMobileRetro } from 'react-icons/fa6';
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_container'>
            <div className='left'>
                <div className='location'>
                    <FaLocationDot size={20} 
                    style={{color: "aliceblue", marginRight: "2rem"}}/>
                    <div>
                      <p>Coimbatore Tamilnadu India</p>
                    </div>
                </div>
                <div className='email'>
                  <Link target='_blank' to="https://mail.google.com/mail/u/0/#inbox?compose=new">
                <h4><FaMailBulk size={20} 
                    style={{color: "aliceblue", marginRight: "2rem"}}/>
                    nowfal.riyas1996@gmail.com</h4></Link>
                </div>
                <div className='phone'>
                <h4><FaMobileRetro size={20} 
                    style={{color: "aliceblue", marginRight: "2rem"}}/>
                    +91 80985-89242</h4>
                </div>
            </div>

            <div className='right'>
              <h4>About Me</h4>
              <p>This is Nowfal Riyas Creative Full Stack Application Developer</p>
              <div className='social'>
                <Link target='_blank' to="https://wa.me/+918098589242"><FaWhatsapp 
                size={30}
                style={{color:"aliceblue", marginRight:"1rem"}}/></Link>
                <Link target='_blank' to='https://instagram.com/ri_yas_4'><FaInstagram 
                size={30}
                style={{color:"aliceblue", marginRight:"1rem"}}/></Link>
                <Link target='_blank' to="https://linkedin.com/in/nowfal-riyas"><FaLinkedin 
                size={30}
                style={{color:"aliceblue", marginRight:"1rem"}}/></Link>
              </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
