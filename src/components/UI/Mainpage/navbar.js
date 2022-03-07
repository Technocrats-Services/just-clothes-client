import image from './res/logo.png';
import React from 'react'
import 'animate.css'


export default function Navbar(){
     return(
         <nav className="navbar navbar-light bg-light ">
    <a className="navbar-brand p-1 ms-1" href="/">
      <img src={image} width="150" height="30" className="d-inline-block align-top animate__animated animate__zoomIn" alt="" />
    </a>
  </nav>

     )
}