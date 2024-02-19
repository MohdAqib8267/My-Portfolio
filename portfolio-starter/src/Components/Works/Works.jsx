import React from "react";
import "./Works.css";
import ReactIcon from "../../img/react.png";
import NodeIcon from "../../img/node.jpg";
import Javascript from "../../img/javascript.png";
import C from "../../img/c++.png";
import DSA from "../../img/DSA.png";
import { useContext } from "react";
import { themeContext } from "../../Context";

export default function Works() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      {/* left side */}
      <div className="awesome w-left">
        
        
        <span></span>
        <span>Backend Intern</span>
       
        {/* <span>Growth Hackers Technlogies, pvt Ltd</span> */}
        <span
          style={{ display: "flex", gap: "0.4rem", flexDirection: "column" }}
        >
          <b style={{color:"var(--orange)"}}>
            Growth Hackers Technlogies, pvt Ltd
            <br />
            (Feb,2023 - Jul,2023)
          </b>
          <br />
          • Integrated Knowlarity API to handle user calls,
          <br />
          customized UI of Jitsi Meet for video calls,
          <br />
          and managed frontend components.
          <br />
          • Utilized REST APIs to retrieve and display data from databases.
          <br />
          • Troubleshot and resolved bugs and issues in the backend
          <br />
          to ensure smooth application operation.
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
