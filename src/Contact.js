import React, { useRef } from 'react';
import styled from 'styled-components';
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
        <Main>
            <H1>Contact</H1>
            <Border></Border>
            <form className='Form' ref={form} onSubmit={sendEmail}>
                <input className='Input' placeholder='Name' type="text" name="to_name" required/>
                <input className='Input' placeholder='Email' type="email" name="from_name" required/>
                <Message placeholder='Message' name="message" required></Message>
                <Submit type="submit" value="Send" >Submit</Submit>
            </form>
        </Main>
    )
};

export default Contact;

const Main = styled.div`
    width: 50%;
    margin: auto;
    text-align: center;
    min-height: calc(100vh - 193px);
    color: white;

    @media (max-width: 900px) {
        width: 70%;
        margin: auto;
    }
`

const H1 = styled.h1`
    text-align: center;
    margin-top: 80px;
`

const Message = styled.textarea`
    height: 150px;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 30px;
`

const Submit = styled.button`
    padding: 10px 35px;
    border: 1px solid grey;
    color: grey;
    font-size: 25px;
    border-radius: 15px;
    /* width: 103%; */
    cursor: pointer;

    &:hover {
        background-color: grey;
        color: white;
    }

    @media (max-width: 800px) {
        /* width: 104%; */
    }
`

const Border = styled.div`
    border-top: 5px solid grey;
    width: 15px;
    margin: auto;
    padding-bottom: 60px;
    margin-top: 20px;
`