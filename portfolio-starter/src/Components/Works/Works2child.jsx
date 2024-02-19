import React from "react";
import "./Works.css";
import ReactIcon from "../../img/react.png";
import NodeIcon from "../../img/node.jpg";
import Javascript from "../../img/javascript.png";
import C from "../../img/c++.png";
import DSA from "../../img/DSA.png";
import { useContext } from "react";
import { themeContext } from "../../Context";
import "./Works.css"

export default function Worksatpoint() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      {/* left side */}
      
      <div className="awesome w-left">
        
        
      {window.innerWidth <= 768 ? 
        <span style={{ color: darkMode ? "var(--gray)" : "var(--gray) ",textDecoration:"underline",textDecorationColor:"var(--black)" }}>Experience</span>
        :
      <span></span>
      }
        <span>SDE (Backend)</span>
       
        {/* <span>Growth Hackers Technlogies, pvt Ltd</span> */}
        <span
          style={{ display: "flex", gap: "0.4rem", flexDirection: "column" }}
          className="works2childinfo"
        >
          {window.innerWidth <= 768 ? <b style={{color:"var(--black)"}}>
          PointofViewer
            <br />
            (Aug,2023 - Present)
          </b>:
          <b style={{color:"white"}}>
          PointofViewer
            <br />
            (Aug,2023 - Present)
          </b>
          }
          <br />
          • Architected, designed, and implemented database and website.
          <br />
          • Managed a team to meet project timelines and deliver a polished website.
          <br />
          • Integrate CRM for lead checkups, conversions, marketing campaigns as an
extension to the base product.
          <br />
          • Conducted troubleshooting and debugging to ensure seamless execution.
        </span>

        <button className="button s-button">Hire me</button>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7e-ggW79vLvZl_S2ZPYjSpUUDN6uGPx9EeutxAqM&s"
              alt=""
            />
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
            <img
              style={{ width: "8rem" }}
              src="https://cdn-icons-png.flaticon.com/512/919/919832.png"
              alt=""
            />
          </div>
        </div>
        {/* background circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
}
