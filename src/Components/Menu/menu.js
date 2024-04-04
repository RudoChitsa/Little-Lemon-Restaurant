import React from 'react';
import './menu.css';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png';

const Menu = () => {
  return (
    <div className='mainMenu'>
        <img src={logo} alt='little-lemon-logo' className='logo'></img>
        <div className='menuNames'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='menuNamesItem'>Home</Link> 
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='menuNamesItem'>About</Link>
        <Link activeClass='active' to='foodmenu' spy={true} smooth={true} offset={-100} duration={500} className='menuNamesItem'>Menu</Link>
        <Link activeClass='active' to='reservations' spy={true} smooth={true} offset={-100} duration={500} className='menuNamesItem'>Reservations</Link>
        <Link activeClass='active' to='login' spy={true} smooth={true} offset={-100} duration={500} className='menuNamesItem'>Login</Link>
        </div>
        <button className='menuBtn'>Order Online</button>
    </div>
  )
}

export default Menu;
