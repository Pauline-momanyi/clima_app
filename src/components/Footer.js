import React from 'react'
import {FiClock, FiMail} from 'react-icons/fi'
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

function Footer() {
  return (
    <div className='bg-slate-primary text-white flex justify-around pt-8 pb-8'>
        <div className='space-y-4'>
            <h2>CLIMA<br/>Home Care</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p className='flex'><span className='text-orange-primary'><FaMapMarkerAlt/></span>Rainbow Rd, Nairobi</p>
            <p className='flex'><span className='text-orange-primary'><FiMail/></span>support@clima.com</p>
            <p className='flex'><span className='text-orange-primary'><FaPhoneAlt/></span>+2547 11223344</p>
        </div>
        <div className='space-y-4'>
            <h2 className = "underline underline-offset-8 decoration-orange-primary mb-3">Quick Links</h2>
            <p>About Us</p>
            <p>Services</p>
            <p>Contacts</p>
        </div>
        <div className='space-y-4'>
            <h2 className = "underline underline-offset-8 decoration-orange-primary mb-3">Working Hours</h2>
            <p className='flex'><span className='text-orange-primary'><FiClock/></span>9 AM - 5 PM, Monday - Saturday</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <button className='flex rounded-full bg-orange-primary hover:bg-blue-700 py-2 px-4'><span><FaPhoneAlt/></span>Call us Today</button>
        </div>

    </div>
  )
}

export default Footer