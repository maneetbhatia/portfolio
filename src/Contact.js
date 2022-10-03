import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.
        sendForm(
            'service_2hzzwmn',
            'template_joj8k1n', 
            form.current, 
            'fD0gTFNX-miNkjGB8')
        .then((result) => {
            alert("message send!")
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="Main">
            <h1 className='H1'>Contact</h1>
            <div className='Border'></div>
            <form className='Form' ref={form} onSubmit={sendEmail}>
                {/* <label>Name</label> */}
                <input className='Input' placeholder='Name' type="text" name="to_name" required/>
                {/* <label>Email</label> */}
                <input className='Input' placeholder='Email' type="email" name="from_name" required/>
                {/* <label>Message</label> */}
                <textarea className="Message" placeholder='Message' name="message" required></textarea>
                <button className='Submit' type="submit" value="Send" >Submit</button>
            </form>
        </div>
    )
};

export default Contact;
