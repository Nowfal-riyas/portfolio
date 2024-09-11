import React from 'react'
import "../components/styles/styles.css";
import Pro from "../assets/wp8778419-dark-code-wallpapers.png";
import { NavLink } from 'react-router-dom';

const Works = () => {
  return (
    <div className='work_container'>
      <h1 className='project_heading'>Projects
      </h1>
      <div className='project_container'>
        <div className='project_card'>
          <img src={Pro} alt="project Image" />
          <h2 className='project_title'>Number Find</h2> 
          <div className="pro_details">
            <p>I have developed this project with React js and back end with flask api
              we can find details of the number plate by giving an Input and can store and modify users </p>
            <div className='pro_btns'>
              <NavLink target="_blank" to="https://github.com/Nowfal-riyas/number-plate-project" className="btn">Git Source</NavLink>
            </div>
          </div>
        </div>
        <div className='project_card'>
          <img src={Pro} alt="project Image" />
          <h2 className='project_title'>Task-trek</h2> 
          <div className="pro_details">
            <p>I built this project using React Js. This is completely
              web based application we can create todo project and delete it once done </p>
            <div className='pro_btns'>
              <NavLink target="_blank" to="https://github.com/Nowfal-riyas/task-trek" className="btn">Git Source</NavLink>
            </div>
          </div>
        </div>
        <div className='project_card'>
          <img src={Pro} alt="project Image" />
          <h2 className='project_title'>Todo App</h2> 
          <div className="pro_details">
            <p>I built this app using Flutter framework. In this project we can add our
              todo task and remove if the task is done.
            </p>
            <div className='pro_btns'>
              <NavLink target="_blank" to="https://github.com/Nowfal-riyas/flutter-todo" className="btn">Git Source</NavLink>
            </div>
          </div>
        </div>
        <div className='project_card'>
          <img src={Pro} alt="project Image" />
          <h2 className='project_title'>Website project</h2> 
          <div className="pro_details">
            <p>This is a website based project I built this project
              using bootstrap framework completely mobile responsive </p>
            <div className='pro_btns'>
              <NavLink target="_blank" to="https://github.com/Nowfal-riyas/front-end-project-website" className="btn">Git Source</NavLink>
            </div>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Works
