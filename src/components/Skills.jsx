import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import cardsInformation from '../data/CardInformation'

export const Skills = () => {
    const [cardsInfo, setCardsInfo] = useState([]);

    useEffect(() => {
        setCardsInfo(cardsInformation);
    }, [])

    useEffect(() => {
        console.log(cardsInfo);
    }, [cardsInfo])
    
    return (
        <>
            <div className='section'>
                <p className='section-title'>SKILLS</p>

                <div className='entry'>
                    <p className='section-entry-subtitle'>
                        Projects
                    </p>

                    {cardsInfo.map((card, index) => (
                        <Card 
                            key={index}
                            imgSource = {card.imgSource}
                            heading = {card.heading}
                            content = {card.content}
                            link = {card.link}
                            sourceCode = {card.sourceCode}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
