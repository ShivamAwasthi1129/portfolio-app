import React from 'react'
import './Content.css'
import image from '../assets/img-1.png'

const Content = () => {
  return (
    <div className="content-container">
       <div className="content-title-container">
        <h3 className='content-head'>Award Winning</h3>
        <h1 className='content-title'>Leading Law Firm</h1>
        <h5 className='content-text'> We debounce with righteous indigination and dislike men who are beguiled and demoralized by the charms of please</h5>
       <button className='contact-btn'>Contact us</button>
      </div>
      <div className="box">
        <img src={image} alt="" />
      </div>

    </div>


  )
}

export default Content;
