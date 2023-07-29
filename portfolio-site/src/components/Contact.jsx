import React from 'react'
import emailicon from '../assets/emailicon.png'
import Phone from '../assets/Phone.png'
const Contact = () => {
  return (
    <div id='contact'>
        <p className='project'>Contact Me</p>
        <div className='flex'>
        <img src={emailicon} alt="" className='email'/>
         <p className='span'>nyeneabasi95@gmail.com</p>
        </div>

        <div className='flex'>
        <img src={Phone} alt="" className='email'/>
         <p className='span'>07771247284</p>
        </div>
       

    </div>
  )
}

export default Contact