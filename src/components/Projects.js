import React from 'react'
import skinCancer from "../skin-cancer.png"
import foodLauncher from "../foodlauncher.png"
import printOnline from "../printonline.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
    return (
        <div className="projects-wrapper" id="projects">
            <h2 className="projects-head">My Projects</h2>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="project">
                        <div className="proj-logo">
                            <FontAwesomeIcon icon={ faCalendarAlt } />
                        </div>
                        <div className="proj-title">
                            Down To Meet
                        </div>
                        <div className="proj-info">
                            The website provides users to browse, create, and promote local events. It provides a platform for building a community for the upliftment of its members whether they be in a personal or professional context.
                        </div>
                        <div className="view-proj">
                            <a href="">Github</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="project">
                        <div className="proj-logo">
                            <img src={ skinCancer } />
                        </div>
                        <div className="proj-title">
                            Dermature
                        </div>
                        <div className="proj-info">
                            Skin Cancer Detection - A machine-learning website that can calculate the probability that a mole can be malign, considering the image of a mole, which is the symptom of skin cancer. Deployed the website on Azure using Docker Container Registry.
                        </div>
                        <div className="view-proj">
                            <a href="">Github</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="project">

                        <div className="proj-logo">
                            <img src={ foodLauncher } />
                        </div>
                        <div className="proj-title">
                            FoodLauncher
                        </div>
                        <div className="proj-info">
                            Android application that allows users to search nearby restaurants and food recipes based on the specific diet provided by the user using Zomato API, Google API and Spoonacular API.
                        </div>
                        <div className="view-proj">
                            <a href="">Github</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="project">
                        <div className="proj-logo">
                            <img src={ printOnline } />
                        </div>
                        <div className="proj-title">
                            PrintOnline
                        </div>
                        <div className="proj-info">
                            Web2print solution for local print shops. Order prints online by uploading decument or images and get confirmation when ready. This website helps users save time standing in long lines for getting the printing stuff done.
                        </div>
                        <div className="view-proj">
                            <a href="">Github</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects
