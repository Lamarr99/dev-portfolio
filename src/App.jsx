import React from 'react'
import './App.css'
import { Header, 
         Home, 
         About,
         Skills, 
         Projects, 
         Testimonials,
         Contact,
         Footer, 
         ScrollUp,
         Experience
         } from './components'

import { motion } from 'framer-motion'


        
function App() {

  return (
    <motion.div>
    
      <Header /> 
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollUp />
    </motion.div>
  )
}

export default App;
