import React from 'react'
import './AboutUs.css'

const AboutUs = () => {
  return (
   <div className="about-container">
    <img className='left' srcset="https://rstheme.com/products/wordpress/advokat-elementor/wp-content/uploads/2019/06/home-about-1.jpg 579w, https://rstheme.com/products/wordpress/advokat-elementor/wp-content/uploads/2019/06/home-about-1-277x300.jpg 277w" alt="john mehta image" />
    <div className="right">
      <h1 className='about-heading'>About Us</h1>
      <h1 className='about-title'>Welcome to Advokat Lawyers & Lawfirm</h1>
      <p className='about-content'>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>
      <br />
      <p className='about-content'>
      These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.  Ut enim ad minim veniam, quis nostrud exercitation. Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <br />
      <img src="https://rstheme.com/products/wordpress/advokat-elementor/wp-content/uploads/2019/06/john-mehta.png" alt="" />
      <br />
      <h3>CEO & Founder of Advokat</h3>
    </div>

   </div>
  )
}

export default AboutUs
