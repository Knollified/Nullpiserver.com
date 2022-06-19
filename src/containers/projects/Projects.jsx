import React from 'react';
import Project from '../../components/project/Project';
import './Projects.css';

const projectsData = [
  {
    title: 'Null Pi',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
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
        <Project title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
  )
};

export default Projects;