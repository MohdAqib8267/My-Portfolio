import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import Aqib from "../../img/MohdAqib.png";
import hero from "../../img/hero1-97637be1.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDIv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Intro() {
  // transition

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro cont">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : " " }}>Hy! I Am</span>
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              500,
              "", // initially rendered starting point
              1000,
              "Mohd Aqib!👋",
              1000,
              "Mohd Aqib!👋",
              1000,
              "Mohd Aqib!👋",
              500,
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
          {/* <span>Mohd Aqib!👋</span> */}
          <motion.span
            initial={{ opacity: 0, x: "-10rem" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              type: "spring",
              ease: "linear",
              x: { duration: 1 },
            }}
          >
            I'm a self-taught full-stack web developer from Delhi, India,
            currently pursuing my B.Tech at Jamia Millia Islamia. Alongside my
            academic journey, I shape the digital landscape as a Software
            Development Engineer at PointOfViewer. Fueled by curiosity, I'm
            driven to create meaningful and innovative solutions.
          </motion.span>
        </div>
          <span style={{gap:"1rem",display:"flex"}}>
        <a href="mailto:mohdaqib921@gmail.com">
          <button className="button i-button">Hire me</button>
        </a>
        <a target="_blank" href="https://drive.google.com/file/d/1oEt8BT5M9wroemhHgo9b90VB0yuBUCTx/view?usp=sharing">
          <button className="button i-button">My CV</button>
        </a>
        </span>
        <div className="i-icons">
          <a href="https://github.com/MohdAqib8267" target="blank">
            <motion.img
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
                type: "inertia",
              }}
              src={Github}
              alt=""
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mohd-aqib-4052b6225/"
            target="blank"
          >
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/mohdazeem8267/" target="blank">
            <motion.img
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
                type: "inertia",
              }}
              src={Instagram}
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={hero} alt="" />
        <motion.img
          initial={{ opacity: 0, x: "-10rem" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            ease: "linear",
            x: { duration: 1 },
          }}
          whileHover={{ scale: 1.2 }}
          src={glassesimoji}
          alt=""
          id="animation"
        />

        <motion.div
          initial={{ opacity: 0, x: "5rem" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            ease: "linear",
            x: { duration: 1 },
          }}
          whileHover={{ scale: 1.2 }}
          style={{ top: "-4%", left: "68%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1={"Web"} txt2={"Developer"} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "10rem" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            ease: "linear",
            x: { duration: 1 },
          }}
          whileHover={{ scale: 1.2 }}
          style={{ top: "18rem", left: "0rem" }}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} txt1={"DSA"} txt2={"Enthusiast"} />
        </motion.div>
        {/* blur divs */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
