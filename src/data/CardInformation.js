import journalApp from '../assets/journal-app.png'
import calendarApp from '../assets/calendar-app.png'
import gifApp from '../assets/gif-expert-app.png'

const cardsInformation = [
    {
        imgSource : calendarApp,
        heading : 'Calendar Page',
        content : 
        'Fullstack web aplication developed with the MERN stack. The application enables users to create profiles and create schedule events by selecting specific dates on aninteractive calendar.',
        link: 'https://calendaria.up.railway.app/auth/login',
        sourceCode: 'https://github.com/KevinSanchezO/calendar-backend',
        brightColorImage: true,
    },
    {
        imgSource : journalApp,
        heading : 'Journal App',
        content : 
        'Fullstack web aplication developed with Firebase, React, Redux and Material UI where users can create journals and add images',
        link: 'https://journal-app-orpin-six.vercel.app/',
        sourceCode: 'https://github.com/KevinSanchezO/journal-app',
        brightColorImage: false,
    },
    {
        imgSource : gifApp,
        heading : 'Gif Expert App',
        content : 
        'Web application built with React that lets users search and discover a vast collection of GIFs using the GIFAPI. Explore an array of trending, popular, or themed GIFs, and with a simple search.',
        link: 'https://gifferexpertapp.netlify.app/',
        sourceCode: 'https://github.com/KevinSanchezO/gif-expert-app',
        brightColorImage: false,
    },

]

export default cardsInformation;