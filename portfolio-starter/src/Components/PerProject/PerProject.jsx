import React from 'react';
import { Carousel } from 'react-carousel3';

import ReactTech from "../../img/ff.avif";
import firstCure from "../../img/firstCure.png";
import kalasha from "../../img/kalasha.png";
import pluspoint from "../../img/pluspoint.png";
import aqc from "../../img/AQC.svg";
import backend from "../../img/backend.jpg";
import DSA from "../../img/DSA&DEV.jpg";
import course from "../../img/course.avif";
import "./PreProject.css";
const style = {
  width: 297,
  height: 296,
};
const darkMode=false;
export default () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection:"column",
    //   height:'103vh',
      alignItems:'center',
      background: 'linear-gradient(to bottom, #16235e 0%, #020223 100%)',
    }}
  >         <div className="new-portfolio" >
                 <span style={{color: darkMode?'white' : 'white'}}>Our Clients</span>
            {/* <span style={{color: "var(--orange)"}}>Portfolio</span> */}
             </div>
           
    <Carousel height={460} width={980} yOrigin={42} yRadius={48} autoPlay={true} >
      <div key={1} style={style}>
        <img alt="" src={firstCure} />
      </div>
      <div key={2} style={style}>
        <img alt="" src={kalasha}  />
      </div>
      <div key={3} style={style}>
        <img alt=""  src={pluspoint}  />
      </div>
      <div key={4} style={{ backgroundColor: 'white',display:"flex",alignItems:"center",justifyContent:"center", width:"270",height:"297" }}>
        <img style={{width:"100%",height:"100%",padding:"3rem 1rem"}} alt=""  src={aqc}  />
      </div>
     
    </Carousel>
  </div>
);