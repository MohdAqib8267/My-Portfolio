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
                <span style={{color: darkMode? 'white': ' '}}>Tech</span>
                <span>Stack</span>
                <span>
                    I am a Software Developer with Excellenet knowledge of Front-end & Back-end.
                    <br />
                    
                </span>
                <a target="_blank"  href="https://drive.google.com/file/d/1PM_3llOkCPihEx51owpbbZNbGerdAxVd/view?usp=sharing" download>
                <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
            </div>
            {/* right side */}  
            <div  className="cards">
                <div style={{left:'14rem'}}>
                    <Card
                    emoji={HeartEmoji}
                    heading={'Front-end'}
                    detail={'HTML, CSS, JavaScript, React.Js, Redux-toolkit, Bootsstap, Firebase'}
                    />
                </div>
                {/* second card */}
                <div style={{top:'12rem',left:'-4rem'}}>
                    <Card
                    emoji={Glasses}
                    heading={'Backend'}
                    detail={'JavaScript, Node.js, Express.js, MongoDB, MySql, PostgreSql'}
                    />
                </div>
                {/* 3rd card */}
                <div style={{top:'19rem',left:'12rem'}}>
                    <Card
                    emoji={Humble}
                    heading={'Languages & Dev Tools'}
                    detail={'C++,JavaScrip, SQL, Git, GitHub, Netlify, Render'}
                    />
                </div>
                <div className="blur s-blur2" style={{background:'var(--purple)'}} ></div>
            </div>
        </div>
    );
}

export default Services;
