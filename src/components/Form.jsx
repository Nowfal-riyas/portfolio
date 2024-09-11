import  React, {useState} from 'react'
import "../components/styles/styles.css";
import Swal from 'sweetalert2';

const Form = () => {
  //useState
  const [formdata, setFormdata] = useState({
    name:"",
    email:"",
    phone:"",
    subject:"",
    message:""
  });

  const handleChange = (event) =>{
    const {name, value} = event.target;
    setFormdata({...formdata, [name]: value,});
  };

  const handleSubmit = async (event) =>{
    event.preventDefault();

    try {
      
    const response = await fetch("https://portfolio-api-xwll.onrender.com/sendemail", {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify(formdata),
    });

    if(!response.ok){
      throw new Error("Network response Error");
    }

    const result = await response.json();
    console.log("Form submitted sucessfully", result);

    setFormdata({
      name:"",
      email:"",
      mobile:"",
      subject:"",
      message:"",
    });

    Swal.fire({
      title: "Good job!",
      text: "Form Submitted Sucessfully",
      icon: "success"
    });

    
    } catch (error) {
      console.error("Error submitting data", error);
    }

  };


  return (
    <div className='form' onSubmit={handleSubmit}>
      <form action="">
        <label>Your Name:</label>
        <input type="text" 
        name="name"
        value={formdata.name}
        onChange={handleChange}
        required />

        <label>Email:</label>
        <input type="email" 
        name="email"
        value={formdata.email}
        onChange={handleChange}
        required />

        <label>Mobile:</label>
        <input type="text" 
        name="mobile"
        value={formdata.mobile}
        onChange={handleChange}
        maxLength="10"
        required/>

        <label>Subject:</label>
        <input type="text" 
        name="subject"
        value={formdata.subject}
        onChange={handleChange}
        required/>
        <label>Message:</label>
        <textarea rows="3" placeholder='Type your message here...' 
        name="message"
        value={formdata.message}
        onChange={handleChange}
        required/>
        <button className='btn'>Submit </button>
      </form>
    </div>
  )
}

export default Form
