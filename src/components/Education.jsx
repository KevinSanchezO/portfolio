import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export const Education = () => {
    return (

        <>
            <div className='section'>
                <p className='section-title'>EDUCATION</p>
                <div className='come-closer'>
                    <TypeAnimation 
                        className='section-subtitle'
                        sequence={[
                            'The roots of education are bitter, but the fruit is sweet. - Aristotle',
                            4000
                        ]}
                        speed={100}
                        repeat={Infinity}
                    />
                </div>

                <div className='entry'>
                    <div className='entry-header'>
                        <p className='section-entry-title'>Instituto Tecnológico de Costa Rica</p>
                        <p className='section-entry-date'>February 2019 - August 2024</p>
                    </div>

                    <div className='come-closer'>
                    <p className='section-entry-subtitle'>Bachelor's Degree in Computer Engineering</p>
                    </div>
                </div>

                <div className='entry'>
                    <div className='entry-header'>
                        <p className='section-entry-title'>Udemy | Fernando Herrera</p>
                        <p className='section-entry-date'>June 2024</p>
                    </div>

                    <div className='come-closer'>
                    <p className='section-entry-subtitle'>React: De cero a experto ( Hooks y MERN )</p>
                    </div>
                </div>
            </div>

            <hr/>
        </>

    )
}
