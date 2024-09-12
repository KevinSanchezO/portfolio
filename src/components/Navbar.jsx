import React from 'react'
import profileImage from '../assets/profile.png'
import '../styles/Navbar.css'

export const Navbar = ({ scrollToSection }) => {
  return (
    <header>
        <img className='pfp' src={profileImage} alt="Profile picture" />

        <button onClick={() => scrollToSection('about')}>ABOUT</button>
        <button onClick={() => scrollToSection('experience')}>EXP</button>
        <button onClick={() => scrollToSection('education')}>EDUCATION</button>
        <button onClick={() => scrollToSection('skills')}>SKILLS</button>
    </header>
  )
}
