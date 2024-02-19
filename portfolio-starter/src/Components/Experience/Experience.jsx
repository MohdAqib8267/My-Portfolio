import React from 'react'
import './Experience.css'
import { useContext } from 'react'
import { themeContext } from '../../Context'


export default function Experience() {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
  return (
    <div>
        <div className="experience " id='Experience' >
            <div className="achievement" >
                <div className="circle" style={{color:darkMode?'black':' ' , border: darkMode?'8px solid var(--orangeCard)': ' '}}>1+</div>
                <span>years</span>
                <span>Experience</span>
            </div>
            <div className="achievement">
                <div className="circle" style={{color:darkMode?'black':' ' , border: darkMode?'8px solid var(--orangeCard)': ' '}}>10+</div>
                <span>Project</span>
                <span>Completed</span>
            </div>
            <div className="achievement">
                <div className="circle" style={{color:darkMode?'black':' ', border: darkMode?'8px solid var(--orangeCard)': ' '}}>9.67</div>
                <span>SPI</span>
                <span>In BTech</span>
            </div>
        </div>
      
    </div>
  )
}
