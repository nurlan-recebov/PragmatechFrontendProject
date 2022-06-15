import { useState } from 'react'
import logo from './logo.svg'

import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './components/home'
import Headersection from './components/headersection'
export default function App() {
  return(
    <div className='App'>
      <nav> <Navbar /></nav>
      <main><Home/></main>
      <footer> <Footer/></footer>
    </div>
  )
}



