import React from 'react';
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './RESUME (10).pdf';
import { useContext } from 'react';
import { themeContext } from '../../Context';

const Services = () => {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    
    return (
        <div className="services" id='Services'>
            {/* left side */}
            <div className="awesome">
                <span style={{color: darkMode? 'white': ' '}}>My Awesome</span>
                <span>services</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. sit amet consectetur
                    <br />
                    sit amet consectetur adipisicing elit.
                </span>
                <a href={Resume} download>
                <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
            </div>
            {/* right side */}
            <div  className="cards">
                <div style={{left:'14rem'}}>
                    <Card
                    emoji={HeartEmoji}
                    heading={'Design'}
                    detail={'Figma, Sketch, Photoshop, Adobe, Adobe xd'}
                    />
                </div>
                {/* second card */}
                <div style={{top:'12rem',left:'-4rem'}}>
                    <Card
                    emoji={Glasses}
                    heading={'Developer'}
                    detail={'Html, Css, JavaScript, ReactJs, NodeJs,Express,MogoDB,Bootstrap'}
                    />
                </div>
                {/* 3rd card */}
                <div style={{top:'19rem',left:'12rem'}}>
                    <Card
                    emoji={Humble}
                    heading={'UI/UX'}
                    detail={'Clean UI/UX,Best web Design,Debuging, Responsive Pages'}
                    />
                </div>
                <div className="blur s-blur2" style={{background:'var(--purple)'}} ></div>
            </div>
        </div>
    );
}

export default Services;
