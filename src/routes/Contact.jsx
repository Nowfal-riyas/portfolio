import React from 'react'
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import HeroImg2 from "../components/Heroimg2.jsx";
import Form from "../components/Form.jsx";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT" text="Let's Connect And Have A Chat"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact
