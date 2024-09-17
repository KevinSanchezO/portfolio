import React from 'react'
import experienceInformation from '../data/ExperienceInformation'
import { TypeAnimation } from 'react-type-animation'

export const Experience = () => {
  return (
    <>
        <div className='section'>
            <p className='section-title'>EXPERIENCE</p>

            <div className='come-closer'>
                <TypeAnimation
                    className='section-subtitle'
                    sequence={[
                        'Nothing ever becomes real \'til it is experienced. - John Keats',
                        4000
                    ]}
                    speed={100}
                    repeat={Infinity}
                />
            </div>

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
