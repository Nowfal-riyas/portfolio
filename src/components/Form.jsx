import React from 'react'
import "../components/styles/styles.css";

const Form = () => {
  return (
    <div className='form'>
      <form action="">
        <label>Your Name:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="text" />
        <label>Subject:</label>
        <input type="text" />
        <label>Message:</label>
        <textarea rows="5" placeholder='Type your message here...' />
        <button className='btn'>Submit </button>
      </form>
    </div>
  )
}

export default Form
