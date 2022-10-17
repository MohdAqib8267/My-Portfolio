import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDIv/FloatingDiv';
import {themeContext} from '../../Context'
import {useContext} from 'react'



function Intro() {

    // transition
   

    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode? 'white' : ' '}} >Hy! I Am</span>
                <span>Mohd Aqib</span>
                <span>I am BTech 3rd Year Student from Jamia Millia Islamia(New Delhi) and I am Software Developer with high Level of experience in web designing
                    and development, producting the Quality work.
                </span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <a href="https://github.com/MohdAqib8267" target='blank' >
                <img src={Github} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/mohd-aqib-4052b6225/" target='blank'>
                <img src={LinkedIn} alt="" />
                </a>
                <a href="https://www.instagram.com/mohdazeem8267/" target='blank'>
                <img src={Instagram} alt="" />
                </a>
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <img src={glassesimoji} alt="" id='animation' />

            <div style={{top:'-4%' , left:'68%'}} className='floating-div'>
                <FloatingDiv image={Crown} txt1={'Web'} txt2={'Developer'} />
            </div>
            <div style={{top:'18rem' , left:'0rem'}}  className='floating-div'>
                <FloatingDiv image={thumbup} txt1={'Best UI/UX'} txt2={'Design'} />
            </div>
            {/* blur divs */}
            <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
            <div className="blur" 
            style={{
                background:"C1F5FF", 
                top:'17rem', 
                width:'21rem',
                height:'11rem',
                left:'-9rem'
                }}>

            </div>
        </div>
    </div>
  )
}

export default Intro
