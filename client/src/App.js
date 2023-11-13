import React from 'react'
import Navbar from './component/myNavbar'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/Login'
import Signup from './component/Signup'

 function App() {
  return (
    <>
    <Navbar />
       
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
  
    </>
  )
}
export default App