import React from 'react'
import { Link } from 'react-router-dom'

const header = () => {
  return (
    <nav class="navbar navbar-expand-lg "  style={{height: "45px", marginTop:"20px" }}>
    <div class="container-fluid" >
      <img src='https://shalamarhospital.org.pk/wp-content/uploads/2022/10/cropped-cropped-cropped-sh-logo-1-e1668507609747.png' class="navbar-brand text-white fw-bold fs-6 text" href="#"style={{height: "70px" }} ></img>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
       
        <span class="navbar-text">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 "  style={{marginLeft: "700px"}}>
          <li class="nav-item">
            <Link class="nav-link active text-dark fw-bold fs-6 text" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark fw-bold fs-6 text" href="#" >About us</a>
          </li>
          <li class="nav-item"> 
            <Link class="nav-link text-darke fw-bold fs-6 text" to="/Contact" > Contact Us</Link>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark fw-bold fs-6 text" href="#" > Health Centre</a>
          </li>


          
        </ul>
        </span>
      </div>
    </div>
    
  </nav>
  )
}

export default header