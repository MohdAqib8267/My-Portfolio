import React from 'react';
import './FloatingDiv.css'
import { useContext } from 'react';
import { themeContext } from '../../Context';
const FloatingDiv = (props) => {

    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;

    return (
       <div className="floatingdiv">
        <img src={props.image} alt="" />
        <span style={{color: darkMode? 'black' : ' '}}>
            {props.txt1} 
            <br />
            {props.txt2}
        </span>
       </div>
    );
}

export default FloatingDiv;
