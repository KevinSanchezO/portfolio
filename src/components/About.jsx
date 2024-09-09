import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";

import '../styles/Sections.css'

export const About = () => {
  return (
    <>
        <div className='section'>
            <p className='primary-title'>KEVIN <span>SÁNCHEZ OBANDO</span></p>
            <p className='role-title'>Software Developer</p>

            <p className='regular-text'>
            Software developer focused on <b>web development</b>. Experienced in 
            creating solutions using best practices for various clients and 
            working with agile and cross-functional teams. I am social, 
            conversational, meticulous, analytical, and strategic, 
            dedicated to providing clients and end users with the best software 
            solutions.
            <br/>
            Apart from being a software developer, I enjoy most of my time indoors
            drawing, listening to music and following and experiencing different 
            video games and animated series, I'm an aspiring chef and occasionally 
            develop video games in my free time. When forced outdoors, I enjoy swimming,
            travelling and discovering new places to eat.
            </p>

            <div className='icons'>
                <IconContext.Provider value={{ color: "#2C2E3A", className: "icon" }}>
                    <a href="https://www.linkedin.com/in/kevin-sanchez-obando/">
                        <FaLinkedin size={50}/>
                    </a>
                </IconContext.Provider>

                <IconContext.Provider value={{ color: "#2C2E3A", className: "icon" }}>
                    <a href="https://github.com/KevinSanchezO">
                        <FaGithub size={50}/>
                    </a>
                </IconContext.Provider>
            </div>
            <hr />
        </div>
    </>
  )
}
