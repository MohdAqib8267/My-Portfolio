import React from "react";
import { useContext } from "react";
import { themeContext } from "../../Context";
import "./Coding.css";
import Card from "../Card/Card";
import { TypeAnimation } from "react-type-animation";

const Coding = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="coding-container">
      <div className="coding awesome">
        <span style={{ color: darkMode ? "white" : " " }}>Coding</span>
        
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              500,
              "Profiles", // initially rendered starting point
              1000,
              "Leetcode",
              1500,
              "GFG",
              800,
            
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
        
      </div>
      <div
        style={{ backgroundColor: darkMode ? "white" : "rgb(33, 33, 91)" }}
        className="coding-info"
      >
        <a href="https://leetcode.com/mohd_aqib/">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png?f=webp"
            alt=""
          />
        </a>
        <a href="https://auth.geeksforgeeks.org/user/mohdaqib921/practice/">
          <img
            src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3269914/geeksforgeeks-icon-md.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Coding;
