import React from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import HeroImg2 from "../components/Heroimg2.jsx"
import Aboutcontent from '../components/Aboutcontent.jsx';


const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT" text="I'm A Full Stack Software Developer"/>
      <Aboutcontent/>
      <Footer />
    </div>
  )
}

export default About
