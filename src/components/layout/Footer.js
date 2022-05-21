import React from 'react'
import logo from '../../mqlogo.png'
import { FaTwitter, FaLinkedin, FaFacebook, FaPhoneAlt } from 'react-icons/fa'
import { MdLocationOn, MdEmail, MdCopyright} from 'react-icons/md'

function Footer() {
  return (
    <footer className='text-white bg-slate-primary flex p-5 justify-center space-x-10'>
        <div className='space-y-1 flex flex-col items-center'>
            <img src={logo} alt="logo" className='rounded-full w-12'/>
            <h2>Moringa Quer</h2>
            <a href='#'>Tech Stack</a>
        </div>
        <div className='space-y-4'>
            <span className='flex  items-center'><MdEmail/>moringa_quer@gmail.com</span>
            <span className='flex justify-center items-center'><FaPhoneAlt/> +254701010101</span>
            <div className='flex space-x-2 justify-center'>
                <span><FaLinkedin/></span>
                <span><FaTwitter/></span>        
                <span><FaFacebook/></span>
                <span><MdLocationOn/></span>  
            </div>
            <span className='text-orange-primary flex justify-center items-center'><MdCopyright/>2022. All Right Reserved</span>  
        </div>
                     
    </footer>
  )
}

export default Footer