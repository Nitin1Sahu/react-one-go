import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (

    <footer>
      <div class="container">
        <div class="footer-links">
          <ul>
            <li><NavLink to="about">About Us</NavLink></li>
            <li><NavLink to="contact">Contact</NavLink></li>
          </ul>
        </div>
        <div class="social-links">
          <NavLink to="/" target="_blank"><i class="fab fa-facebook-f"></i></NavLink>
          <NavLink to="/" target="_blank"><i class="fab fa-twitter"></i></NavLink>
          <NavLink to="/" target="_blank"><i class="fab fa-instagram"></i></NavLink>
        </div>
        <div class="newsletter">
          <h4>Subscribe to our Newsletter</h4>
          <input type="email" placeholder="Your Email" />
          <button type="button">Subscribe</button>
        </div>
        <p class="copyright">&copy; 2024 Your Website Name</p>
      </div>
    </footer>
  )
}

export default Footer