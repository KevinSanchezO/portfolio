import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import cardsInformation from '../data/CardInformation'

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

export const Skills = () => {
    const [cardsInfo, setCardsInfo] = useState([]);

    useEffect(() => {
        setCardsInfo(cardsInformation);
    }, [])
    
    return (
        <>
            <div className='section'>
                <p className='section-title'>SKILLS</p>

                <div className='entry'>
                    <p className='section-entry-subtitle'>
                        PROJECTS
                    </p>

                    <div className='projects-container'>
                        {cardsInfo.map((card, index) => (
                            <Card 
                                key={index}
                                imgSource = {card.imgSource}
                                heading = {card.heading}
                                content = {card.content}
                                link = {card.link}
                                sourceCode = {card.sourceCode}
                                brightColorImage = {card.brightColorImage}
                            />
                        ))}
                    </div>
                </div>
                
                {/* <div className='entry'>
                    <p className='section-entry-subtitle'>
                        PROGRAMMING LANGUAGES & TOOLS
                    </p>
                    <div >
                        <p className='regular-text'>HTML • CSS • JavaScript • React • Redux</p>
                        <p className='regular-text'>jQuery • Tailwind CSS • MaterialUI • Bootstrap • .NET</p>
                        <p className='regular-text'>C# • Python • Flask • Django • Java</p>
                        <p className='regular-text'>Spring Boot • Github • DevOps • Postman • MongoDB</p>
                        <p className='regular-text'>SQLServer • PostgreSQL • Postman</p>
                    </div>
                </div> */}
            </div>

            <hr/>
        </>
    )
}
