import React from 'react';
import './Skill.css';

const Skill = ({ title, image }) => (
  <div className="nullpi__skills-container__skill">
    <div className="nullpi__skills-container__skill-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="nullpi__skills-container_skill-image">
      <img src={image} alt="" />
    </div>
  </div>
);

export default Skill;