import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper";
import "./Clients.css"
import { motion } from 'framer-motion';
import aqc from "../../img/AQC.svg";
import aqc1 from "../../img/aqc1.png";
import aqc2 from "../../img/aqc2.png";
import aqc3 from "../../img/aqc3.png";
import aqc4 from "../../img/aqc4.png";
import fc1 from "../../img/fc1.png";
import fc2 from "../../img/fc2.png";
import fc3 from "../../img/fc3.png";
import fc4 from "../../img/fc4.png";
import kf1 from "../../img/kf1.jpg";
import kf2 from "../../img/kf2.png";
import kf3 from "../../img/kf3.png";
import kf4 from "../../img/kf4.png";
import pp1 from "../../img/pp1.png";
import pp2 from "../../img/pp2.png";
import pp3 from "../../img/pp3.png";
import pp4 from "../../img/pp4.png";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Clients = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    return (
      <>
        <div className="section orcas" id="orcas">

          <h1 className="title">Our Client</h1>
          
          <div className="flex one">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              className="mySwiper"
              autoplay={{
                delay: 4000,
                disableOnInteraction: false
              }}
              direction={"horizontal"}
              //ref={swiperRef}
              //dir={'ltr'}
            >
              {/* <SwiperSlide>
                <img
                  src="https://i.ibb.co/FB89DHR/ezgif-5-5c67647a38-2.gif"
                  alt=""
                />
              </SwiperSlide> */}
              <SwiperSlide>
                <img
                  src={pp1}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={pp2}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={pp3}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={pp4}
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
            <div className="flexText">
            <div className="blur" 
            style={{
                background:"C1F5FF", 
                top:'8rem', 
                width:'21rem',
                height:'11rem',
                left:'90%'
                }}>

            </div>

              <h1 style={{color:darkMode?"var(--orange)":"var(--black)"}}>Plus Point Hardware</h1>
              <motion.h2
              initial={{ opacity: 0, x: "10rem" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                ease: "linear",
                x: { duration: 1 },
              }}
              >
              ‘Every result or goal you want to achieve is preceded by a process.’ This was the motive behind the initiation of a phenomenon; a phenomenon that we proudly call PlusPoint. This journey of ours began long, long back - more than 80 years ago to be precise. It was a family endeavour, fueled by the passion and dedication of the brothers.              Whether you seek the perfect lock for your front door or the finishing touches for your renovation project, we are here to provide the solution that perfectly matches your needs.
              </motion.h2>
              <a target="_blank" href="https://pluspoint-test.netlify.app/">
                <button className="button i-button">Visit</button>
                </a>
            </div>
          </div>
          <div className="flex two">
            <div className="flexText">
              <h1 style={{color:darkMode?"white":"var(--gray)"}}>AQC Nutrition</h1>
              <motion.h2
              initial={{ opacity: 0, x: "-10rem" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                ease: "linear",
                x: { duration: 1 },
              }}
              >
               Embarking on our journey in 2009, AQC Chem set out with a grand vision: to transform the world of nutrition through innovation and sheer excellence. Born with the minds of a team from industry experts and right from the start our dedication was clear– to seamlessly blend technology and culinary science into a harmonious union. 
              </motion.h2>
              <a target="_blank" href="https://aqc-test.netlify.app/">
                <button className="button i-button">Visit</button>
                </a>
            </div>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              className="mySwiper"
              autoplay={{
                delay: 4000,
                disableOnInteraction: false
              }}
              direction={"horizontal"}
              //ref={swiperRef}
              //dir={'ltr'}
            >
              <SwiperSlide>
                <img
                  src={aqc1}
                  alt=""
                />
              </SwiperSlide>
              
              <SwiperSlide>
                <img
                  src={aqc2}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={aqc3}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={aqc4}
                  alt=""
                />
              </SwiperSlide>
              
              
            </Swiper>
          </div>
          <div className="flex one">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              className="mySwiper"
              autoplay={{
                delay: 4000,
                disableOnInteraction: false
              }}
              direction={"horizontal"}
              //ref={swiperRef}
              //dir={'ltr'}
            >
              <SwiperSlide>
                <img
                  src={fc1}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={fc2}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={fc3}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={fc4}
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
            <div className="flexText">
            <div className="blur" 
            style={{
                background:"C1F5FF", 
                top:'8rem', 
                width:'21rem',
                height:'11rem',
                left:'90%'
                }}>

            </div>
              <h1 style={{color:darkMode?"var(--orange)":"var(--black)"}}>First Cure</h1>
              <motion.h2
              initial={{ opacity: 0, x: "10rem" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                ease: "linear",
                x: { duration: 1 },
              }}
              >
                We understand that a surgery need can be stressful. That's why we want you to focus only on getting better and leave everything else to us. We simplify your surgery experience by bringing together some of the best surgeons, most modern and safe procedures at affordable costs.
              </motion.h2>
              <a target="_blank" href="https://www.firstcurehealth.com/">
                <button className="button i-button">Visit</button>
                </a>
            </div>
          </div>
          <div className="flex two">
          <div className="blur" 
            style={{
                background:"C1F5FF", 
                top:'60rem', 
                width:'21rem',
                height:'11rem',
                left:'-10rem'
                }}>

            </div>
            <div className="flexText">
              <h1 style={{color:darkMode?"white":"var(--gray)"}}>Kalasha Fine Jewels</h1>
              <motion.h2
              initial={{ opacity: 0, x: "-10rem" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                ease: "linear",
                x: { duration: 1 },
              }}
              >
                With over 118 year of experience in business CapsGold pvt ltd. stands as the unbeatable market leader in bullion trading since establishment.In the year 2017 KALASHA FINE JEWELS the flagship store of CapsGold was introduced to the world of luxurious fine heritage jewellery under the management of 3rd and 4th generations of Chanda family.Kalasha is the perfect blend of age-old tradition and modern elegance. Experience handcrafted jewellery at its best at Kalasha Fine Jewels.
              </motion.h2>
              <a target="_blank" href="https://kalashajewels.com/">
                <button className="button i-button">Visit</button>
                </a>
            </div>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              className="mySwiper"
              autoplay={{
                delay: 4000,
                disableOnInteraction: false
              }}
              direction={"horizontal"}
              //ref={swiperRef}
              //dir={'ltr'}
            >
              <SwiperSlide>
                <img
                  src={kf1}
                  alt=""
                />
              </SwiperSlide>
              
              <SwiperSlide>
                <img
                  src={kf2}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={kf3}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={kf4}
                  alt=""
                />
              </SwiperSlide>
              
              
            </Swiper>
          </div>
          
        </div>
      </>
    );
  };

export default Clients
