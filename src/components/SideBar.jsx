import React from 'react'
import '../styles/SideBar.css'
import profileImage from '../assets/profile.png'

export const SideBar = ({ scrollToSection }) => {

    return (
        <aside className='side-bar'>
            <img src={profileImage} alt="Profile picture" />

            <button onClick={() => scrollToSection('about')}>ABOUT</button>
            <button onClick={() => scrollToSection('experience')}>EXPERIENCE</button>
            <button onClick={() => scrollToSection('education')}>EDUCATION</button>
            <button onClick={() => scrollToSection('skills')}>SKILLS</button>
        </aside>
    )
}
