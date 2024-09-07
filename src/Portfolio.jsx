import React from 'react'
import { SideBar } from './components/SideBar'
import './Portfolio.css'
import { About } from './components/about'

export const Portfolio = () => {
  return (
    <div className='page-container'>
        <div className='content'>
            <SideBar />            
            <main className='main-content'>
                <About/>
            </main>
        </div>
    </div>
  )
}
