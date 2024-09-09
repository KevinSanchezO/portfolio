import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import '../styles/Card.css'

export const Card = ({imgSource, heading, content, link, sourceCode, brightColorImage}) => {
  return (
    <div className='card'>
        <img src={imgSource} 
        alt="Example image of the project"/>
        <div className='card-content'>
            <h2 style={{ color: brightColorImage ? 'black' : 'white' }}>
                {heading}
            </h2>
            
            <p style={{ color: brightColorImage ? 'black' : 'white' }}>
                {content}
            </p>

            <a href={link} className="button" style={{ color: brightColorImage ? 'black' : 'white' }}>
                Find out more 
                <span>
                <FaArrowRight />
                </span>
            </a>
        </div>
    </div>
  )
}
