import React from 'react';
import Skill from '../../components/skill/Skill';
import './Skills.css';
import {cplus,git,htmlcss,java,js,mariadb,mysql,nodejs,php,python,react,apache2,swift} from '../../assets/'
const skillsData = [
  {
    title: 'C++',
    image: cplus,
  },
  {
    title: 'Java',
    image: java,
  },
  {
    title: 'Python',
    image: python,
  },
  {
    title: 'Javascript',
    image: js,
  },
];
const skillsDataTwo = [
  {
    title: 'React',
    image: react,
  },
  {
    title: 'MySQL',
    image: mysql,
  },
  {
    title: 'MariaDB',
    image: mariadb,
  },
  {
    title: 'Php',
    image: php,
  },
];
const skillsDataThree = [
  {
    title: 'HTML/CSS',
    image: htmlcss,
  },
  {
    title: 'Git',
    image: git,
  },
  {
    title: 'NodeJs',
    image: nodejs,
  },
  {
    title: 'Apache2',
    image: apache2,
  },
];
const skillsDataFour = [
  {
    title: 'Swift',
    image: swift,
  },
];

const Skills = () => {
  return(
  <div className="nullpi__skills section__padding" id="skills">
    <div className="nullpi__skills-heading">
      <h1 className="gradient__text">Skills</h1>
    </div>

    <div className="nullpi__skills-container__main">
    <div className="nullpi__skills-container">
      {skillsData.map((item, index) => (
        <Skill title={item.title} image={item.image} key={item.title + index} />
      ))}
    </div>
    <div className="nullpi__skills-container">
      {skillsDataTwo.map((item, index) => (
        <Skill title={item.title} image={item.image} key={item.title + index} />
      ))}
    </div>
    <div className="nullpi__skills-container">
      {skillsDataThree.map((item, index) => (
        <Skill title={item.title} image={item.image} key={item.title + index} />
      ))}
    </div>
    </div>
  </div>
  )
};

export default Skills;