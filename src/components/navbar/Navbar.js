import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import { Redirect } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [logout, setLogout] = useState(false)

  function handleLogOut(){
    console.log('Logged out');
    localStorage.clear();   
    setLogout(true)
  }

  if (logout){
    return <Redirect to='/'/>
  }   

  return (
    <div className="clima__navbar">
      <div className="clima__navbar-links">
        <div className="clima__navbar-links_logo">
          {/* <img src={logo} /> */}
        </div>
        <div className="clima__navbar-links_container">
          <p><Link to="/">Home</Link></p>
          <p><Link to="/about">About Us</Link></p>
          <p><Link to="/services">Services</Link></p>
          <p><Link to="/contacts">Contacts</Link></p>
          <p><Link to="/gallery">Gallery</Link></p>
        </div>
      </div>
      <div className="clima__navbar-sign">
        <Link to='/signin'><p className='signin'>Sign in</p></Link>
        <Link to='/signup'><button type="button" className='signup'>Sign up</button></Link>
        <button type="button" className='logout' onClick={handleLogOut}>LogOut</button>
      </div>
      <div className="clima__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="clima__navbar-menu_container scale-up-center">
          <div className="clima__navbar-menu_container-links">
          <p><Link to="/">Home</Link></p>
          <p><Link to="/about">About Us</Link></p>
          <p><Link to="/services">Services</Link></p>
          <p><Link to="/contacts">Contacts</Link></p>
          <p><Link to="/gallery">Gallery</Link></p>
          </div>
          <div className="clima__navbar-menu_container-links-sign">
            <Link to='/signin'><p className='signin'>Sign in</p></Link>
            <Link to='/signup'><button type="button" className='signup'>Sign up</button></Link>
            <button type="button" className='logout' onClick={handleLogOut}>LogOut</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;