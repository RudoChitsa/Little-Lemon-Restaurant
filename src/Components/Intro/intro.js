import React from 'react';
import './intro.css';
import headerImg from '../../assets/3.jpg';

const Intro = () => {
  return (
    <div className='introMain'>
      <div className='info'>
      <h2 className='companyName'>Little Lemon</h2>
      <h3 className='location'>Chicago</h3>
      <p className='summary'>We are a family owned Mediterranean restaurant, 
      focussed on traditional recipes served with a modern twist</p>
      <button className='introBtn'>Reserve A Table</button>
      </div>
      <img src={headerImg} alt='' className='headerImg'></img>
    </div>
  )
}

export default Intro;
