import React from 'react';
import './Project.css';

const Project = ({ title, text, link }) => (
  <div className="nullpi__projects-container__project">
    <div className="nullpi__projects-container__project-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="nullpi__projects-container_project-text">
      <p><a href={link}>{text}</a></p>
    </div>
  </div>
);

export default Project;