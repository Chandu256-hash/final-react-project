import React from 'react'
import  Footer from '../Footer/Footer'
import NavBar from './NavBar'
import './RootLayout.css'

import {Outlet} from 'react-router-dom'

function RootLayout() {
  return (
    <div>
      <NavBar />
        <div className="main-content">
        <Outlet /> 
      </div>
      <Footer />
    </div>
  )
}

export default RootLayout
