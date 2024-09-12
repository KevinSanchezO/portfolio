import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { CiGlobe } from "react-icons/ci";
import { FiSmartphone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";


import '../styles/Sections.css'
import { TypeAnimation } from 'react-type-animation';

export const About = () => {
  return (
    <>
        <div className='section'>
            <p className='primary-title'>KEVIN <span>SÁNCHEZ OBANDO</span></p>
            
            <div className='come-closer'>
            <p className='section-entry-subtitle'>
            <CiGlobe /> Costa Rica • <FiSmartphone /> +506 87720184 • <span><AiOutlineMail /> kesanchezo@gmail.com</span>
            </p>
            <TypeAnimation 
                className='role-title'
                sequence={[
                    'Web Developer',
                    1500,
                    'Proactive',
                    1500,
                    'Creative problem solver',
                    1500,
                    'Connecting front-end finesse with back-end logic',
                    1500,
                    'Making things work behind the scenes',
                    1500,
                    'Interested in learning Mobile development',
                    1500,
                    'Game developer in his free time',
                    1500
                ]}
                speed={50}
                repeat={Infinity}
            />

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
                    <a href="https://www.linkedin.com/in/kevin-sanchez-obando/" target='_blank'>
                        <FaLinkedin size={50}/>
                    </a>
                </IconContext.Provider>

                <IconContext.Provider value={{ color: "#2C2E3A", className: "icon" }}>
                    <a href="https://github.com/KevinSanchezO" target='_blank'>
                        <FaGithub size={50}/>
                    </a>
                </IconContext.Provider>
            </div>
            </div>
        </div>

        <hr/>
    </>
  )
}
