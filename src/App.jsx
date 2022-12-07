import React from 'react'
import './App.css'
import { Header, 
         Home, 
         About,
         Skills,
         Qualifications, 
         Work, 
         Testimonials,
         Contact,
         Footer, 
        //  ScrollUp
         } from './components'

import { motion } from 'framer-motion'


        
function App() {

  return (
    <motion.div>
    
      <Header /> 
      <Home />
      <About />
      <Skills />
      <Qualifications />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
      {/* <ScrollUp /> */}
    </motion.div>
  )
}

export default App;
