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
            Software developer focused on Front End development. Experienced in 
            creating solutions using best practices for various clients and 
            working with agile and cross-functional teams. I am social, 
            conversational, meticulous, analytical, and strategic, 
            dedicated to providing clients and end users with the best software 
            solutions.
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
