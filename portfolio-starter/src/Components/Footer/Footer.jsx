import React from 'react';
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'

const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{width:'100%'}} />
            <div className="f-content">
                <span> mohdaqib921@gmail.com </span>
                
                <duv className="f-icons">
                    <a href="https://www.instagram.com/mohdazeem8267/" target='blank'>
                    <Insta color='white' size='3rem' />
                    </a>
                    <a href="https://www.linkedin.com/in/mohd-aqib-4052b6225/" target='blank'>
                    <LinkedIn color='white' size='3rem' />
                    </a>
                    <a href="https://github.com/MohdAqib8267" target='blank'>
                    <Github color='white' size='3rem' />
                    </a>
                </duv>
            </div>
        </div>
    );
}

export default Footer;
