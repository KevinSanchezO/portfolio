import React from 'react'
import experienceInformation from '../data/ExperienceInformation'

export const Experience = () => {
  return (
    <>
        <div className='section'>
            <p className='section-title'>EXPERIENCE</p>

            {experienceInformation.map((exp, index) => (
                <div className='entry' key={index}>
                    <div className='entry-header'>
                        <p className='section-entry-title'>{exp.title}</p>
                        <p className='section-entry-date'>{exp.date}</p>
                    </div>

                    <div className='come-closer'>
                        <p className='section-entry-subtitle'>{exp.place}</p>

                        {exp.paragraphs.map((text, textIndex) => (
                            <p className='regular-text' key={textIndex}>
                                {text}
                            </p>
                        ))}
                    </div>
                </div>
                ))}
        </div>
        <hr/>
    </>
  )
}
