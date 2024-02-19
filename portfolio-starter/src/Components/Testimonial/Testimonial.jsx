import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/Data_structure&algo.png";
import profilePic2 from "../../img/full_stack.webp";
import profilePic3 from "../../img/Jmi.png";
import profilePic4 from "../../img/School.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "I have Excellent knowledge of Data Structure & Algorithms.I have Solved 700+ Problems on Leetcode.",
    },
    {
      img: profilePic2,
      review:
      "I am a Full Stack Developer and I have create many Beactiful and Impressive projects and I have Excellent Knowledge of Html,css,JavaScript,React Js,Node Js,Bootstrap & MongoDb.",
    },
    {
      img: profilePic3,
      review:
       "I am currently in 4th Year of BTech from Jamia millia islamia(New Delhi).My branch is Electronics and Communication Engineering."+
        "I got 9.4 SPI in my last academic year.",
    },
    {
      img: profilePic4,
      review:
        "I did my schooling from Islamia Inter College Which is located in Deoband(Saharanpur). I got 1st Postion in My 12th Class with 77.6%.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>My Education </span>
        <span> & Skills... </span>
        
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial" id="Testimonials">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;