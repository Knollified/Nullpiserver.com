import React from 'react';
import { RiLinkedinBoxFill, RiGithubFill } from 'react-icons/ri';
import './Footer.css';

const Footer = () => {
    return (
        <div className="nullpi__footer section__padding" id="footer">

            <div className="nullpi__footer-heading gradient__text">
                <h1>Nullpiserver.com</h1>
            </div>

            <div className="nullpi__footer-content">
                <p><a href="#home">Home</a></p>
                <p><a href="#nullpi">What is Null Pi?</a></p>
                <p><a href="#about">About</a></p>
                <p><a href="#skills">Skills</a></p>
                <p><a href="#projects">Projects</a></p>
                <p><a href="#contact">Contact</a></p>
            </div>

            <div className='nullpi__footer-links'>
                <RiLinkedinBoxFill color='#fff' onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "https://www.linkedin.com/in/devjustintorres/"
                }} size={50} />

                <RiGithubFill color='#fff' onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "https://github.com/knollified"
                }} size={50} />
            </div>

            <div className='nullpi__footer-copy gradient__text'>
                &copy;<em color='#fff'> nullpiserver.com</em>
            </div>
                
        </div>
    )
}


export default Footer;