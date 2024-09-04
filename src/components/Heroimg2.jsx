import React, {Component} from 'react'
import "./styles/styles.css";

class Heroimg2 extends Component {
    render(){
  return (
    <div className='hero_img'>
        <div className='heading'>
    <h1>{this.props.heading}</h1>
    <p>{this.props.text}</p>
        </div>
    </div>
        );
    }
}

export default Heroimg2
