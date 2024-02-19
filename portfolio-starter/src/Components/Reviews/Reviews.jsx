

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import star from "../../img/star.png"
import "./Reviews.css";
import { useContext } from 'react'
import { themeContext } from '../../Context'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from "@coreui/react";


export default function Reviews() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

 
  

  var settings = {
    // className: "center",
    // centerMode: true,
    // infinite: true,
    // centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots:true,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

const [username,setUsername]=useState('');
const [org,setOrg]=useState('');
const [rating,setRating]=useState(0);
const [msg,setMsg]=useState('');
const [visible, setVisible] = useState(false)

const [rev,setRev]=useState([]);

  const fetchRev = async () => {
    try {
      const response = await fetch("http://localhost:8000/ad-review", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      if (response.ok) {
        const data = await response.json();
        if (data && data.length > 0) {
          setRev(data);
        }
      } else {
        console.error("Failed to fetch reviews. Status:", response.status);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
useEffect(() => {
  fetchRev();
}, []);

console.log(rev); 
const AddReview=async(e)=>{
  e.preventDefault();
  // console.log(username,rating,msg);
  const op={username,org,rating,msg};
  
  try {
    const result=await fetch("http://localhost:8000/ad-review",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(op)
    })
    if (result) {
      // console.log("Review added successfully!");
      fetchRev();
      setUsername("");
      setMsg("");
      setOrg("");
      setRating("");

    } else {
      console.error("Failed to add review. Status:", result.status);
    }
  } catch (error) {
    console.log(error.message);
  }

}

  return (
    <div className="rev-container">
      <span>Client Reviews</span>
    <div className="rev-slider">
      <Slider {...settings}>
      {
         rev.map((item)=>{
          return(
            <div className="card1">
              <div className="rev-name">
                <span style={{color:"var(--gray)"}}>{item.username}</span>
                <span className="rating">    <img src={star} alt="" />  {item.rating}/5</span>
              </div>
            <div className="company" style={{color: darkMode?'var(--gray)' : ' '}}>"{item.org}"</div>
              <div className="rew"  style={{color: darkMode?'var(--black)' : ' '}}>
               {item.msg}
              </div>
          </div>
          )
        })
      }
      
      </Slider>

    </div>
    <div className="review-form" id='Contact'>
            <div className="w-left">
                <div className="awesome">
                  {window.length<=480?
                    <span style={{color: darkMode?'white':'var(--gray) '}}>Add Your</span>
                    :
                    <span style={{color: darkMode?'white':'white '}}>Add Your</span>
                  }
                    
                    <span>Review</span>
                    <div className="blur s-blur1" 
                    style={{background:'#ABF1FF94'}} ></div>
                </div>
            </div>
            <div className="c-right" style={{alignItems:"center"}}>
                <form onSubmit={AddReview} >
                    <input type="text" name='user_name' value={username} onChange={(e)=>setUsername(e.target.value)} required className='user' placeholder='username' />
                    <input type="text" name='user_name' value={org} onChange={(e)=>setOrg(e.target.value)} required className='user' placeholder='Organisation' />
                    <input type="number" name='user_email' value={rating} onChange={(e)=>setRating(e.target.value)} required className='user' placeholder='Rating out of 5'  max="5"  min="0"/>
                    <textarea name="message" value={msg} onChange={(e)=>setMsg(e.target.value)} className='user' required placeholder='message' cols="30" rows="10"></textarea>
                    <input type="submit" onClick={() => setVisible(!visible)} value='submit' className='button' />
                    <div className="blur c-blur1"
                    style={{background:'var(--purple'}}
                    ></div>
                </form>
                <CModal
                      alignment="center"
                      visible={visible}
                      onClose={() => setVisible(false)}
                      aria-labelledby="VerticallyCenteredExample"
                    >
                      <CModalHeader>
                        <CModalTitle id="VerticallyCenteredExample">Review Added</CModalTitle>
                      </CModalHeader>
                      <CModalBody>
                        Thank You For your Review.
                      </CModalBody>
                      <CModalFooter>
                        <CButton color="secondary" onClick={() => setVisible(false)}>
                          Close
                        </CButton>
                        {/* <CButton color="primary">Save changes</CButton> */}
                      </CModalFooter>
                    </CModal>
            </div>
        </div>
    </div>
  );
}
