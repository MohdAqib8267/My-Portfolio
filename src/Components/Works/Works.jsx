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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. sit amet consectetur
        <br />
        sit amet consectetur adipisicing elit.
        <br />
        sit amet consectetur adipisicing elit. adipisicing elit
        <br />
        sit amet consectetur adipisicing elit.
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
