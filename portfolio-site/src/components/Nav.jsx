import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <nav className='nav-bar'>
        <div className='nav-header'>
            <a href='/' className='name'>Nyene</a>
        </div>

        <div className='nav-links'>
            <a href='/#about' className='nav-linkss'>About</a>
            <a href='/#skills' className='nav-linkss'>Skills</a>
            <a href='/#projects' className='nav-linkss'>Projects</a>
            <a href='/#contact' className='nav-linkss'>Contact</a>
        </div>

    </nav>
  )
}

export default Nav