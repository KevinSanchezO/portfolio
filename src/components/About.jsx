import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";

import '../styles/Sections.css'

export const About = () => {
  return (
    <>
        <div className='section'>
            <h2>KEVIN <span>SÁNCHEZ OBANDO</span></h2>
            <h3>Software Developer</h3>

            <p>
            Software developer focused on Front End development. Experienced in 
            creating solutions using best practices for various clients and 
            working wit agile and cross-functional teams. I am social, 
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
        </div>
        <hr />
    </>
  )
}
