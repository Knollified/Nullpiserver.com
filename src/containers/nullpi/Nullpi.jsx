import React from "react";
import { Project } from "../../components/";
import './Nullpi.css';

const Nullpi = () => {
    return (
        <div className="nullpi__whatnullpi section__margin" id="nullpi">
            <div className="nullpi__whatnullpi-Project">
                <Project title="What Is Null Pi?" text="Null Pi is a LAMP server that hosts projects made by Me ( Justin Torres Aka - Knoll ). Null Pi is also more than just projects or a website. It is an idea or rather a collection of ideas that become reality. The main goal of Null Pi is to display a unique and creative ideas for others. Maybe even turn your ideas into reality." />
            </div>
            <div className="nullpi__whatnullpi-heading">
                <h1 className="gradient__text">Projects powered by imagination, and driven by creativity.</h1>
                <p>View Projects</p>
            </div>
            <div className="nullpi__whatnullpi-container">
                <Project text="Null Pi has ideas to make chatbots using deep and machine learning." title="Chatbot" />
                <Project text="Null Pi likes to explore web apps and making them unique. Each web app has endless possibilites with the right mindset and ideas" title="Web Apps" />
                <Project text="With some skills from Null Pi API's can be made custom and unique." title="API's" />
            </div>
        </div>
    )
}

export default Nullpi