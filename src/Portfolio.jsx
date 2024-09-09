import React from 'react'
import { SideBar } from './components/SideBar'
import './Portfolio.css'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Skills } from './components/Skills'

export const Portfolio = () => {
  return (
    <div className='page-container'>
        <div className='content'>
            <SideBar />            
            <main className='main-content'>
                <About/>
                <Experience />
                <Education />
                <Skills />
            </main>
        </div>
    </div>
  )
}
