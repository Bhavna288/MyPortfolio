import React from 'react';
import Typed from 'react-typed'

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <canvas></canvas>
                <h1>Web development</h1>
                <Typed
                    className="typed-text"
                    strings={ ["Web Developer", "Machine Learning", "Android Developer"] }
                    typeSpeed={ 40 }
                    backSpeed={ 60 }
                    loop
                />
                <a href="#" className="btn-main">Contact Me</a>
            </div>
        </div>
    )
}

export default Header
