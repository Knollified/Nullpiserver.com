import React from 'react';
import Knoll from '../../assets/Knoll.jpg'
import Nullpi  from '../nullpi/Nullpi';
import './About.css';

const About = () => (
  <div className="nullpi__about section__padding" id="about">
    
      <div className="nullpi__about-image">
            <img src={Knoll} alt="" />
        </div>
      <div className="nullpi__about-content">
        <div className="nullpi__about-text">
            <h1 className='gradient__text'>About Me</h1>
            <p className>Hello, I am Justin Torres or "Knoll" the creator of Null Pi. I am an aspiring programmer looking to build my skills and create unique projects. I have a deep passion for creating and designing things. My first big project is currently this webpage that will constantly update with the skills and projects I acquire over the years. Thank you for visiting my site and if you are interested in creating a project please feel free to contact me.</p>
        </div>
      </div>
  </div>
);

export default About;