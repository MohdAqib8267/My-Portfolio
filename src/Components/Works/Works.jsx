import React from 'react'
import './Works.css'
import ReactIcon from '../../img/react.png'
import NodeIcon from '../../img/node.jpg'
import Javascript from '../../img/javascript.png'
import C from '../../img/c++.png'
import DSA from '../../img/DSA.png'
import { useContext } from 'react'
import { themeContext } from '../../Context'


export default function Works() {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
  return (
        <div className="works">
            {/* left side */}
              <div className="awesome w-left">
    <span style={{color:darkMode?'white':' '}}>Works on these</span>
    <span>Technologies</span>
    <span>
        I am a Quick learner and I have excellent problem Solving Skills.
        <br />
        I have Solve 400+ Data Structure & Algrithms Problems.
        <br />
        and also I have worked Html, Css, JavaScript, 
        <br />
        ReactJs, NodeJs, MongoDB and other Technologies...
    </span>
 
    <button className="button s-button">Hire me</button>
  
    <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
    </div>

    {/* right side */}
    <div className="w-right">
        <div className="w-mainCircle">
        <div className="w-secCircle">
            <img src={DSA} alt="" />
        </div>
        <div className="w-secCircle">
            <img src={NodeIcon} alt="" />
        </div>
        <div className="w-secCircle">
            <img src={ReactIcon} alt="" />
        </div>
        <div className="w-secCircle">
            <img src={Javascript} alt="" />
        </div>
        <div className="w-secCircle">
            <img src={C} alt="" />
        </div>
    </div>
    {/* background circles */}
    <div className="w-backCircle blueCircle"></div>
    <div className="w-backCircle yellowCircle"></div>
    </div>
    </div>
  )
}
