import React from 'react'

export const Experience = () => {
  return (
    <>
        <div className='section'>
            <p className='section-title'>EXPERIENCE</p>

            <div className='entry'>
                <div className='entry-header'>
                <p className='section-entry-title'>Front End Software Developer</p>
                <p className='section-entry-date'>February 2024 - June 2024</p>
                </div>
                
                <div className='come-closer'>

                <p className='section-entry-subtitle'>Accenture</p>
                <p className='regular-text'>

                As a front-end developer, I was responsible for 
                maintaining, restructuring and optimizing existing code to
                uphold high-quality standards. Additionally, I developed new
                features to meet client requirements, ensuring the delivery of 
                customized, user-centric products. This work Impacted more than 
                7000 across various departments at Accenture.
                <br/>
                Engaged in daily scrum meetings to assess progress, identify 
                potential challenges, and strategize upcoming tasks.
                <br/>
                Assisted in back-end development using .NET and PostgreSQL.
                </p>
                </div>
            </div>

            <div className='entry'>
                <div className='entry-header'>
                <p className='section-entry-title'>Fullstack Software Developer</p>
                <p className='section-entry-date'>June 2023 - November 2023</p>
                </div>
                
                <div className='come-closer'>
                <p className='section-entry-subtitle'>Freelance</p>
                <p className='regular-text'>

                Developed a full-stack web application for a small business to
                manage inventory and users. The application allowed users to register sales,
                view sales statistics, generate inventory alerts for low stock or slow-moving
                products and modify, add and delete inventory items. This system helped the
                business reduce costs by up to 35% and improved inventory management efficiency.
                </p>
                </div>
            </div>
        </div>

        <hr/>
    </>
  )
}
