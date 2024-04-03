import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='nav'>
      <div className="website__logo">
        <h1>react-router-dom</h1>
      </div>
      <div className='nav__list'>
        <ul>
          <li>
            <NavLink className={(e) => e.isActive ? "a__white" : ""} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={(e) => e.isActive ? "a__white" : ""} to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className={(e) => e.isActive ? "a__white" : ""} to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="btn__login">
        <NavLink to="/login">login</NavLink>
        <NavLink to="/sign-up">Sign-up</NavLink>
      </div>
    </nav>
  )
}

export default Header