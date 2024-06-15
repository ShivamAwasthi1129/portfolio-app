import React from 'react'
import { RiFacebookCircleLine } from 'react-icons/ri'
import { FaTwitter, FaLinkedin, FaPinterest } from 'react-icons/fa'
import './Header.css'
const Header = () => {
  return (
    <div className='header-container'>
      <nav class='nav'>
        <a class='nav-link header-link active' aria-current='page' href='#'>
          Support@retheme.com
        </a>
        <a class='nav-link header-link' href='#'>
          {' '}
          +1020930542
        </a>
        <a class='nav-link header-link' href='#'>
          9:00 AM - 05:00 PM
        </a>
      </nav>
      <div className='icons'>
        <RiFacebookCircleLine size={24} />
        <FaTwitter size={24} />
        <FaPinterest size={24} />
        <FaLinkedin size={24} />
      </div>
    </div>
  )
}

export default Header
