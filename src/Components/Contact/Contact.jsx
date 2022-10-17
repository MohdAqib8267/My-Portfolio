import React, { useState } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useContext } from 'react';
import { themeContext } from '../../Context';


const Contact = () => {

    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;

    const form = useRef();

    const [done,setDone]=useState('');

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_olsx4cw', 'template_nniya6i', form.current, 'cdyEUgpDwkcWjvZZg')
        .then((result) => {
            console.log(result.text);
            setDone(alert('Thanks for Contact me!'))
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="contact-form" id='Contact'>
            <div className="w-left">
                <div className="awesome">
                    <span style={{color: darkMode?'white':' '}}>Get In touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur1" 
                    style={{background:'#ABF1FF94'}} ></div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail} >
                    <input type="text" name='user_name' required className='user' placeholder='username' />
                    <input type="email" name='user_email' required className='user' placeholder='Email' />
                    <textarea name="message" className='user' required placeholder='message' cols="30" rows="10"></textarea>
                    <input type="submit" value='send' className='button' />
                    <div className="blur c-blur1"
                    style={{background:'var(--purple'}}
                    ></div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
