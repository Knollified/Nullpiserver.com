import React from 'react';
import './Skill.css';

const Skill = ({ title, text }) => (
  <div className="nullpi__skills-container__skill">
    <div className="nullpi__skills-container__skill-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="nullpi__skills-container_skill-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Skill;