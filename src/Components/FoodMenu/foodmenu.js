import React from 'react';
import './foodmenu.css';
import menuOne from '../../assets/2.jpg';
import menuTwo from '../../assets/6.jpg';
import menuThree from '../../assets/7.jpg';

const FoodMenu = () => {
  return (
    <div className="card-container">
        <div className="card">
          <img src={menuOne} alt='' className='menuImg'></img>
            <h1>Greek Salad</h1>
            <p>
            The famous Greek salad of crispy lettuce, 
            peppers, olives and our Chicago styled feta cheese, 
            garnished with crunchy garlic, rosemary croutons.
            </p>
            <button className='introBtn'>Order For Delivery</button>
        </div>
        <div className="card">
        <img src={menuTwo} alt='' className='menuImg'></img>
            <h1>Bruschetta</h1>
            <p>
            Our Bruschetta is made from grilled bread that has 
            been smeared with garlic and seasoned with salt and olive oil; 
            made perfect for an evening dinner
            </p>
            <button className='introBtn'>Order For Delivery</button>
        </div>
        <div className="card">
        <img src={menuThree} alt='' className='menuImg'></img>
            <h1>Lemon Dessert</h1>
            <p>
            This comes straight from Grandma's recipe book. 
            Every last ingredient has been sourced and is as authentic as can be imagined.
            </p>
            <br></br>
            <br></br>
            <br></br>
            <button className='introBtn'>Order For Delivery</button>
        </div>
    </div>
  )
}

export default FoodMenu;
