import React from 'react';
import Typed from 'react-typed'
import resume from '../Bhavna_Tahelyani_ML.pdf';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <canvas></canvas>
                <h1>Bhavna Tahelyani</h1>
                <Typed
                    className="typed-text"
                    strings={ ["MERN Developer", "Machine Learning", "Android Developer", "Flask Developer"] }
                    typeSpeed={ 40 }
                    backSpeed={ 60 }
                    loop
                />
                <a href={ resume } className="btn-main" download>Download Resume</a>
            </div>
        </div>
    )
}

export default Header
