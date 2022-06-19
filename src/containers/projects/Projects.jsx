import React from 'react';
import Project from '../../components/project/Project';
import './Projects.css';

const projectsData = [
  {
    title: 'Null Pi: Web Site',
    link: 'https://nullpiserver.com',
    text: 'Go to Null Pi Server'
  },
  {
    title: 'The Krypt: Web Game',
    link: 'https://knollified.github.io/The-Krypt-React/',
    text: 'Go to The Krypt'
  },
  {
    title: 'Ryko: Discord.js Bot',
    link: 'https://github.com/Knollified/Ryko',
    text: 'Go to Ryko'
  },
];

const Projects = () => {
  return(
  <div className="nullpi__projects section__padding" id="projects">
    <div className="nullpi__projects-heading">
      <h1 className="gradient__text">Projects Past, Present and Future</h1>
    </div>
    <div className="nullpi__projects-container">
      {projectsData.map((item, index) => (
        <Project title={item.title} text={item.text} link={item.link} key={item.title + index} />
      ))}
    </div>
  </div>
  )
};

export default Projects;