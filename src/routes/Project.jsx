import React from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import HeroImg2 from "../components/Heroimg2.jsx";
import Works from "../components/Works.jsx";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some Of My Recent Works"/>
      <Works /> 
      <Footer />
    </div>
  )
}

export default Project
