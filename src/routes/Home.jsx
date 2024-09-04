import React from "react";
import Navbar from "../components/Navbar.jsx";
import Heroimg from "../components/Heroimg.jsx";
import Footer from "../components/Footer.jsx";
import Aboutcontent from "../components/Aboutcontent.jsx";
import Works from "../components/Works.jsx"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg/>
      <Aboutcontent />
      <Works />
      <Footer/>
    </div>
  )
}

export default Home
