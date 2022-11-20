import React,{ useState } from 'react'
import './App.css'
import { Header, 
         Home, 
         About,
         Skills,
         Services,
         Qualifications, 
         Work, 
         Testimonials,
         Contact,
         Footer, 
         ScrollUp } from './components'

import { AnimatePresence } from 'framer-motion'

        
function App() {


  return (
    <AnimatePresence>
    
     <Header  key='Header' /> 
     <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualifications />
      <Work />
      <Testimonials />
      <Contact />
      
     </main>

     <Footer />
     <ScrollUp />
    </AnimatePresence>
  )
}

export default App
