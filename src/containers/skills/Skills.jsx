import React from 'react';
import Skill from '../../components/skill/Skill';
import './Skills.css';
import {cplus,git,htmlcss,java,js,mariadb,mysql,nodejs,php,python,react,rpi,swift} from '../../assets/'
const skillsData = [
  {
    title: 'C++',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Java',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Python',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Javascript',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'HTML/CSS',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
];
const skillsDataTwo = [
  {
    title: 'React',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'MySQL',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'MariaDB',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Php',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Swift',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
];
const skillsDataThree = [
  {
    title: 'Git',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'NodeJs',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Apache2',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
];

const Skills = () => {
  return(
  <div className="nullpi__skills section__padding" id="skills">
    <div className="nullpi__skills-heading">
      <h1 className="gradient__text">Skills</h1>
    </div>
    <div className="nullpi__skills-container">
      {skillsData.map((item, index) => (
        <Skill title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
    <div className="nullpi__skills-container">
      {skillsDataTwo.map((item, index) => (
        <Skill title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
    <div className="nullpi__skills-container">
      {skillsDataThree.map((item, index) => (
        <Skill title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
  )
};

export default Skills;