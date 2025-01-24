
// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'

import './App.css'
import Home from './Home'
import About from './components/About'
import Services from './components/Services';
import Appointment from './components/Appointment';
import Admin from './components/Admin';
import ScrollToTop from './components/Scroll';
import Dashboard from './components/Dashboard';
import TestAd from './components/TestAd';

function App() {
 

  return (
    <>
   <Router>
   <ScrollToTop />
    <Header/>
      <div>
        {/* Add your navigation bar component here */}
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>}/>
          <Route path="/appointment" element={<Appointment/>}/>
          <Route path="/Admin" element={<Admin/>}/>
          <Route path="/test" element={<TestAd/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
         
          </div>
          </Router>
  
  </>
  )
}

export default App
