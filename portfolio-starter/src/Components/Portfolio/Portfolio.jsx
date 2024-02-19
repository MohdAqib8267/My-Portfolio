import React, { useState } from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import SocialMedia from '../../img/Feista.png';
import Chat from '../../img/chat.jpg'
import Notes from '../../img/notes.png'
import Ecom from '../../img/huge.jpg'
import FatClub from '../../img/FatClub.png'
import Myntra from '../../img/myntra.jpg'
import Sign from '../../img/signup.jpg'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Link from '@iconscout/react-unicons/icons/uil-link'
import 'swiper/css'
import { useContext } from 'react'
import { themeContext } from '../../Context'

const Portfolio = () => {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;

    // const [showFirstImage, setShowFirstImage] = useState(true);
    const [showFirstImage,setShowFirstImage]=useState(Array(100).fill(false));
  const handleMouseEnter = (Id) => {
    const newHoverState=[...showFirstImage];
    newHoverState[Id]=true;
    setShowFirstImage(newHoverState);

  };

  const handleMouseLeave = (Id) => {
    const newHoverState=[...showFirstImage];
    newHoverState[Id]=false;
    setShowFirstImage(newHoverState);
  };
    return (
        <div className="portfolio" id='Portfolio'>
            {/* heading */}
            <span style={{color: darkMode?'white' : ' '}}>Recent Projects</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper
            spaceBetween={30}
            slidesPerView={1}
            
        
            grabCursor={true}
            className='portfolio-slider'
            >
                <SwiperSlide>
                    <div style={{display:'flex',height:'100%',width:'100%', textDecoration:"none",cursor:'pointer'}} onMouseEnter={()=>handleMouseEnter(100)} onMouseLeave={()=>handleMouseLeave(100)} target='_blank'>
                    <div class="image-container">
                        {/* <img src={SocialMedia} alt="" />
                        <img src={Ecom} alt='' /> */}
                        {showFirstImage[100]?
                        <div style={{background:darkMode?'var(--gray)':'black',color:darkMode?'black':'white'}} className='proj'>
                            <div className="proj-info1">
                                Real-State
                            </div>
                            <div className="proj-info2">
                                React Js, Node Js, MongoDB, Express Js, React-Query, Mantine
                            </div>
                            <div className="proj-logo">
                                <a href="https://github.com/MohdAqib8267/Real-State">
                                <Github />
                                </a>
                                <a href="https://real-state-client-flax.vercel.app/">
                                <Link />
                                </a>
                            </div>
                        </div>
                        :(<img src="https://img.freepik.com/free-photo/high-angle-pie-chart-with-cities_52683-98166.jpg?size=626&ext=jpg&ga=GA1.1.992526081.1690612214&semt=ais" alt="" />)
                            }
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{display:'flex',height:'100%',width:'100%', textDecoration:"none",cursor:'pointer'}} onMouseEnter={()=>handleMouseEnter(1)} onMouseLeave={()=>handleMouseLeave(1)} target='_blank'>
                    <div class="image-container">
                        {/* <img src={SocialMedia} alt="" />
                        <img src={Ecom} alt='' /> */}
                        {showFirstImage[1]?
                        <div style={{background:darkMode?'var(--gray)':'black',color:darkMode?'black':'white'}} className='proj'>
                            <div className="proj-info1">
                                Feista
                            </div>
                            <div className="proj-info2">
                                React Js, Node Js, MongoDB, Express Js, FireBase, CSS
                            </div>
                            <div className="proj-logo">
                                <a href="https://github.com/MohdAqib8267/Social-Media/tree/complete_code">
                                <Github />
                                </a>
                                <Link />
                            </div>
                        </div>
                        // :(<img src={SocialMedia} alt="" />)
                        :(<img src="https://img.freepik.com/free-photo/hand-holding-smartphone-social-media-concept_23-2150208245.jpg?w=740&t=st=1690993530~exp=1690994130~hmac=147f8fd1039c462031411f9c79026cb8a9c8568d4829dc304721ed1738b11ad5" />)
                            }
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{display:'flex',height:'100%',width:'100%', textDecoration:"none",cursor:'pointer'}} onMouseEnter={()=>handleMouseEnter(2)} onMouseLeave={()=>handleMouseLeave(2)} target='_blank'>
                    <div class="image-container">
                        {showFirstImage[2]?
                        <div style={{background:darkMode?'var(--gray)':'black',color:darkMode?'black':'white'}} className='proj'>
                            <div className="proj-info1">
                                E-Shoppy
                            </div>
                            <div className="proj-info2">
                                React Js, Node Js, MongoDB, Express Js, FireBase, CSS, Admin-Dashboard
                            </div>
                            <div className="proj-logo">
                                <a href="https://github.com/MohdAqib8267/E-Shoopy-Full-Stack-/tree/signup(13/7/23)">
                                <Github />
                                </a>
                                <Link />
                            </div>
                        </div>:
                        // (<img src={Ecom} alt="" />)
                        (<img src="https://img.freepik.com/premium-photo/hand-holding-virtual-info-graphics-with-trolley-cart-icons-technology-online-shopping-business-concept_50039-3922.jpg?size=626&ext=jpg&ga=GA1.1.992526081.1690612214&semt=sph" alt="" />)
                            }
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{display:'flex',height:'100%',width:'100%', textDecoration:"none",cursor:'pointer'}} onMouseEnter={()=>handleMouseEnter(3)} onMouseLeave={()=>handleMouseLeave(3)} target='_blank'>
                    <div class="image-container">
                        {showFirstImage[3]?
                        <div style={{background:darkMode?'var(--gray)':'black',color:darkMode?'black':'white'}} className='proj'>
                            <div className="proj-info1">
                                FitClub
                            </div>
                            <div className="proj-info2">
                                React Js, Framer Motion, CSS, Email Js
                            </div>
                            <div className="proj-logo">
                                <a href="https://github.com/MohdAqib8267/FatClub/tree/origin">
                                <Github />
                                </a>
                                <a target='_blank' href="https://fitclub-mohdaqib8267.pages.dev/">
                                <Link />
                                </a>
                            </div>
                        </div>:
                        (<img src={FatClub} alt="" />)
                            }
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{display:'flex',height:'100%',width:'100%', textDecoration:"none",cursor:'pointer'}} onMouseEnter={()=>handleMouseEnter(4)} onMouseLeave={()=>handleMouseLeave(4)} target='_blank'>
                    <div class="image-container">
                        {showFirstImage[4]?
                        <div style={{background:darkMode?'var(--gray)':'black',color:darkMode?'black':'white'}} className='proj'>
                            <div style={{fontSize:'1.5rem', margin:'0 0 0.4rem 0.4rem',textAlign:'center'}} className="proj-info1">
                                School ManageMent System
                            </div>
                            <div className="proj-info2">
                                Node Js, Express Js, MongoDb
                            </div>
                            <div className="proj-logo">
                                <a href="https://github.com/MohdAqib8267/School_management_system">
                                <Github />
                                </a>
                                <a target='_blank' href="#">
                                <Link />
                                </a>
                            </div>
                        </div>:
                        (<img src="https://img.freepik.com/free-vector/marketing-consulting-concept-illustration_114360-9027.jpg" alt="" />)
                            }
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{display:'flex',height:'100%',width:'100%', textDecoration:"none",cursor:'pointer'}} onMouseEnter={()=>handleMouseEnter(5)} onMouseLeave={()=>handleMouseLeave(5)} target='_blank'>
                    <div class="image-container">
                        {showFirstImage[5]?
                        <div style={{background:darkMode?'var(--gray)':'black',color:darkMode?'black':'white'}} className='proj'>
                            <div style={{fontSize:'1.5rem', margin:'0 0 0.4rem 0.4rem',textAlign:'center'}} className="proj-info1">
                                Notes App
                            </div>
                            <div className="proj-info2">
                                React Js, Css.
                            </div>
                            <div className="proj-logo">
                                <a href="https://github.com/MohdAqib8267/Reactjs-Notes-App">
                                <Github />
                                </a>
                                <a target='_blank' href="#">
                                <Link />
                                </a>
                            </div>
                        </div>:
                        (<img src={Notes} alt="" />)
                            }
                    </div>
                    </div>
                </SwiperSlide>

                {/* <SwiperSlide>
                    <img src={Sign} alt="" />
                </SwiperSlide> */}

            </Swiper>

        </div>
    );
}

export default Portfolio;

