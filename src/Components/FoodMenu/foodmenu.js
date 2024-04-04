import React from 'react';
import './foodmenu.css';
import menuOne from '../../assets/2.jpg';
import menuTwo from '../../assets/6.jpg';
import menuThree from '../../assets/7.jpg';

const FoodMenu = () => {
  return (
    <div class="card-container">
        <div class="card">
          <img src={menuOne} alt='' className='menuImg'></img>
            <h1>HTML</h1>
            <p>
                HyperText Markup Language or HTML is the 
                  standard markup language for documents 
                  designed to be displayed in a web browser. 
                  It defines the content and structure of web
                content.
            </p>
            <button className='introBtn'>Order For Delivery</button>
        </div>
        <div class="card">
        <img src={menuTwo} alt='' className='menuImg'></img>
            <h1>CSS</h1>
            <p>
                Cascading Style Sheets is a style sheet 
                  language used for specifying the presentation 
                  and styling of a document written in a markup 
                  language such as HTML or XML. CSS is a
                cornerstone technology of the World Wide Web, 
                  alongside HTML and JavaScript.
            </p>
            <button className='introBtn'>Order For Delivery</button>
        </div>
        <div class="card">
        <img src={menuThree} alt='' className='menuImg'></img>
            <h1>JavaScript</h1>
            <p>
                JavaScript, often abbreviated as JS, is a 
                  programming language and core technology 
                  of the World Wide Web, alongside HTML and CSS.
                As of 2024, 98.9% of websites use JavaScript 
                  on the client side for webpage behavior, 
                  often incorporating third-party libraries.
            </p>
            <button className='introBtn'>Order For Delivery</button>
        </div>
    </div>
  )
}

export default FoodMenu;
