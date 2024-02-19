import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "./TechStack.css";
import ReactTech from "../../img/ff.avif";
import backend from "../../img/backend.jpg";
import DSA from "../../img/DSA&DEV.jpg";
import course from "../../img/course.avif";
import PhTechStack from "../PhTechStack/PhTechStack";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
gsap.registerPlugin(ScrollTrigger);

export default function TechStack() {
  const component = useRef();
  const slider = useRef();

  const darkMode = false;
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          markers: false,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="TechStack" ref={component}>
      <div className="firstContainer">
        <div className="i-name techstack" style={{ alignItems: "center" }}>
          <span></span>
          <span style={{ color: darkMode ? "white" : " " }}>Tech Stack</span>

          <motion.span
            initial={{ opacity: 0, x: "-10rem" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              type: "spring",
              ease: "linear",
              x: { duration: 1 },
            }}
            style={{ fontSize: "1rem", textAlign: "center" }}
          >
            Seasoned full-stack web developer proficient in the dynamic duo of
            React.js for front-end and Node.js for back-end development.
            Leveraging these technologies, I design and implement scalable
            solutions, showcasing a comprehensive skill set in crafting seamless
            and user-friendly web applications.
          </motion.span>
        </div>
      </div>
      {window.innerWidth <= 768 ? (
        <PhTechStack />
      ) : (
        <div ref={slider} className="Slide-container">
          <div className="description panel frontend">
            <div className="frontend-left">
              <div
                className="i-name"
                style={{ alignItems: "center", margin: "0 10rem" }}
              >
                <span style={{ color: "white" }}>Frontend</span>
                <span style={{ color: darkMode ? "white" : " " }}></span>
                <span style={{ fontSize: "1.2rem", textAlign: "center" }}>
                  HTML, Css, JavScript <br />
                  <span style={{ color: "var(--orange)" }}>React.Js</span>{" "}
                  <br />
                  Next.Js, Redux-tookit <br />
                  <span style={{ color: "var(--orange)" }}>Bootsrap</span>
                </span>
              </div>
            </div>
            <div className="frontend-right">
              <img src={ReactTech} alt="" />
            </div>
          </div>
          <div className="panel red frontend">
            <div className="frontend-left">
              <div
                className="i-name"
                style={{ alignItems: "center", margin: "0 5rem" }}
              >
                
                <span style={{ color: "var(--orange)", fontSize: "1rem" }}>
                  
                  <TypeAnimation
                  preRenderFirstString={true}
                  sequence={[
                    500,
                    "Backend", // initially rendered starting point
                    1000,
                    "Backend & Database",
                    1000,
                    "Backend & Database",
                    1000,
                    "Backend & Database",
                    500,
                  ]}
                  speed={50}
                  style={{ fontSize: "2em" }}
                  repeat={Infinity}
                />
                </span>
                <span style={{ color: darkMode ? "white" : " " }}></span>
                <span style={{ fontSize: "1.2rem", textAlign: "center" }}>
                  Node.Js, Express.Js <br />
                  <span style={{ color: "var(--orange)" }}>
                    Rest APIs, MongoDB{" "}
                  </span>{" "}
                  <br />
                  SQL, MySql, Prisma
                  <br />
                  <span style={{ color: "var(--orange)" }}>PosgreSql</span>
                </span>
              </div>
            </div>
            <div className="frontend-right">
              <img src={backend} alt="" />
            </div>
          </div>
          <div className="panel red frontend">
            <div className="frontend-left">
              <div
                className="i-name"
                style={{ alignItems: "center", margin: "0 0rem" }}
              >
                <span style={{ fontSize: "2rem", color: "white" }}>
                  Programming & Dev Tools
                </span>
                <span style={{ color: darkMode ? "white" : " " }}></span>
                <span style={{ fontSize: "1.2rem", textAlign: "center" }}>
                  C/C++, TypeScript <br />
                  <span style={{ color: "var(--orange)" }}>
                    Data Structers & Algorithms
                  </span>{" "}
                  <br />
                  Git, Github, VsCode <br />
                  <span style={{ color: "var(--orange)" }}>
                    Postmans, FileZilla
                  </span>
                </span>
              </div>
            </div>
            <div className="frontend-right">
              <img src={DSA} alt="" />
            </div>
          </div>
          <div className="panel red frontend">
            <div className="frontend-left">
              <div
                className="i-name"
                style={{ alignItems: "center", margin: "0 0rem" }}
              >
                <span style={{ fontSize: "2rem", color: "var(--orange)" }}>
                  Course Work
                </span>
                <span style={{ color: darkMode ? "white" : " " }}></span>
                <span style={{ fontSize: "1.2rem", textAlign: "center" }}>
                  Operating System, DBMS <br />
                  <span style={{ color: "var(--orange)" }}>
                    Computer Networking, Assembly Language
                  </span>{" "}
                  <br />
                  Object-Oriented Programming (C++) <br />
                  <span style={{ color: "var(--orange)" }}>
                    Computer Architecture
                  </span>
                </span>
              </div>
            </div>
            <div className="frontend-right">
              <img src={course} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
