import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import Ecomm from '../../img/e-comm.jpg'
import Chat from '../../img/chat.jpg'
import Notes from '../../img/notes.png'
import Myntra from '../../img/myntra.jpg'
import Sign from '../../img/signup.jpg'
import 'swiper/css'
import { useContext } from 'react'
import { themeContext } from '../../Context'




const Portfolio = () => {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    return (
        <div className="portfolio" id='Portfolio'>
            {/* heading */}
            <span style={{color: darkMode?'white' : ' '}}>Recent Projects</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper 
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className='portfolio-slider'
            >
                <SwiperSlide>
                    
                    <img src={Ecomm} alt="" />
                    
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Notes} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Chat} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Myntra} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Sign} alt="" />
                </SwiperSlide>

            </Swiper>

        </div>
    );
}

export default Portfolio;

