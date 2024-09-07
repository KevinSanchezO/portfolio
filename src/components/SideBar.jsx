import React from 'react'
import '../styles/SideBar.css'
import profileImage from '../assets/profile.png'

export const SideBar = () => {

    return (
        <aside className='side-bar'>
            <img src={profileImage} alt="Profile picture" />

            <button>ABOUT</button>
            <button>EXPERIENCE</button>
            <button>EDUCATION</button>
            <button>SKILLS</button>
        </aside>
    )
}
