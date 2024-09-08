import React from 'react'
import { SideBar } from './components/SideBar'
import './Portfolio.css'
import { About } from './components/about'
import { Experience } from './components/Experience'
import { Education } from './components/Education'

export const Portfolio = () => {
  return (
    <div className='page-container'>
        <div className='content'>
            <SideBar />            
            <main className='main-content'>
                <About/>
                <Experience />
                <Education />
            </main>
        </div>
    </div>
  )
}
