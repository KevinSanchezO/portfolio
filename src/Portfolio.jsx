import React, { useRef } from 'react'
import { SideBar } from './components/SideBar'
import './Portfolio.css'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Skills } from './components/Skills'
import { Navbar } from './components/Navbar'

export const Portfolio = () => {

    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const educationRef = useRef(null);
    const skillstRef = useRef(null);

    const scrollToSection = (section) => {
        switch(section) {
            case 'about':
                aboutRef.current.scrollIntoView({ behavior: 'smooth'});
                break;
            case 'experience':
                experienceRef.current.scrollIntoView({ behavior: 'smooth'});
                break;
            case 'education':
                educationRef.current.scrollIntoView({ behavior: 'smooth'});
                break;
            case 'skills':
                skillstRef.current.scrollIntoView({ behavior: 'smooth'});
                break;
            default:
                break;
        }
    }
    

  return (
    <div className='page-container'>
        <div className='content'>
            <Navbar scrollToSection={scrollToSection}/>
            <SideBar scrollToSection={scrollToSection}/>            
            <main className='main-content'>
                <section ref={aboutRef}>
                    <About/>
                </section>
                
                <section ref={experienceRef}>
                    <Experience />
                </section>
                
                <section ref={educationRef}>
                    <Education />
                </section>
                
                <section ref={skillstRef}>
                    <Skills />
                </section>
            </main>
        </div>
    </div>
  )
}
