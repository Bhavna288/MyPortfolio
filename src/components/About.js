import React from 'react'
import myImage from "../Me.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <div className="about-wrapper" id="about">
            <div className="row">
                <div className="col-lg-6 col-sm-12 image-wrapper">
                    <img src={ myImage } className="my-image" alt="Bhavna Tahelyani"></img><br />
                    <a href="https://www.linkedin.com/in/bhavna-tahelyani/" className="social-link" target="_blank">
                        <FontAwesomeIcon icon={ faLinkedin } />
                    </a>
                    <a href="https://github.com/Bhavna288" className="social-link" target="_blank">
                        <FontAwesomeIcon icon={ faGithub } />
                    </a>
                    <a href="https://twitter.com/bhavnatahelyani" className="social-link" target="_blank">
                        <FontAwesomeIcon icon={ faTwitter } />
                    </a>
                    <a href="mailto:tahelyanibhavna288@gmail.com" className="social-link" target="_blank">
                        <FontAwesomeIcon icon={ faEnvelope } />
                    </a>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <h3 className="about-heading">About Me</h3>
                    <p>I am a third-year Computer Engineering student based in Nadiad. I write code and create websites. My areas of interest are MERN stack, machine learning, and cloud computing. I can multitask, adapt to new development environments, learn new technologies, create reliable code and find creative solutions to perplexing problems.</p>

                    <p>I started making a website as a part of the assignment, but now it is my passion. My first website was about an e-menu for the restaurant, for which I used basic front-end and PHP and MySQL in the backend. The front-end was too simple and not interactive enough to make my site stand out. That is when I started learning JavaScript. When I created my next website using simple JS for both the front-end and the backend, the code got too long and repetitive. This made me understand the importance of a framework. After reading numerous articles about the best framework for JavaScript on the internet, I chose ReactJS. At first, I found it difficult to learn without being taught at college, but I got all my errors solved through StackOverflow. Eventually, I felt confident enough to focus on the MERN stack and created an event-organizing website as a part of the group project. Thereupon I realized I wanted to work more in it. I worked as a lead full-stack web developer for the event CDEC organized at my university where I developed the website with my peers.</p>

                    <p>Eight months ago, I applied for the Microsoft Learn Student Ambassador(MSLA) program and got selected. MSLA is a global community of college students, who learn and organize events. From the benefits I got through this program, I explored Microsoft Azure and organized a webinar-cum-workshop about Azure Cognitive Services. During the COVID-19 pandemic, I developed an interest in machine learning and applied some of the services of Azure related to it in my projects. I created a website for text extraction from an image using Computer vision and another website for skin cancer detection and hosted it on Azure.</p>

                </div>
            </div>
        </div>
    )
}

export default About
