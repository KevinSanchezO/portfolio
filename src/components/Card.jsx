import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import '../styles/Card.css'

export const Card = ({imgSource, heading, content, link, sourceCode}) => {
  return (
    <div className='card'>
        <img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" 
        alt=""/>
        <div className='card-content'>
            <h2>
                {heading}
            </h2>
            
            <p>
                {content}
            </p>

            <a href={link} className="button">
                Find out more 
                <span>
                <FaArrowRight />
                </span>
            </a>
        </div>
    </div>
  )
}
