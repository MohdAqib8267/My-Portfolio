import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import {Link} from 'react-scroll'

function Navbar() {
  return (
   <div className="n-wrapper cont">
    <div className="n-left">
        <div className="n-name">Mohd Aqib</div>
        <Toggle/>
    </div>
    <div className="n-right">
        <div className="n-list">
            <ul style={{listStyleType:"none"}}>
                <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                     <li>Home</li>
                </Link>
                <Link spy={true} to='TechStack' smooth={true} activeClass="activeClass">
                     <li>Skills</li>
                </Link>
                <Link spy={true} to='NewWorks' smooth={true} activeClass="activeClass">
                     <li>Experience</li>
                </Link>
                <Link spy={true} to='Portfolio' smooth={true} activeClass="activeClass">
                     <li>Portfolio</li>
                </Link>
                <Link spy={true} to='Clients' smooth={true} activeClass="activeClass">
                    <li>OurClients</li> 
                </Link>
                
                
            </ul>
        </div>
        
        <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
            <a target="_blank" href="tel:+917017493431">
            <button className="button n-button">Contact</button>
             </a>
        </Link>
        
            
        
    </div>
   </div>
  )
}

export default Navbar
