import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import cardsInformation from '../data/CardInformation'
import techStack from '../data/TechStack'

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
                

                <div className='entry'>
                    <p className='section-entry-subtitle'>
                        LANGUAGES AND TOOLS I HAVE USED
                    </p>

                    <div className='tech-table'>
                        {techStack.map((tech, index) => (
                            <div className='tech' key={index}>
                            <img 
                                src={tech.logo}
                                alt={tech.name} className='image-tech'
                            />
                            <p className='text-tech'>{tech.name}</p>
                        </div>
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
