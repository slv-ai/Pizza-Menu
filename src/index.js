import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];



function App() {
  return(
    <div className='container'>
      <Header />
      <Menu />
      <Footer/>

    </div>
  );
}
function Header(){
  return(
    <header className='header footer'>
      <h1> Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu(){
  return (
    <div className='menu'>
      <h2>Our Menu</h2>

      <ul className='pizzas'>
        {pizzaData.map((pizza)=> (
          <Pizza pizzaObj={pizza} key={pizza.name}/>
        ))}
      </ul>
      {/* <Pizza 
        name="Pizza spinaci"
        ingredients ="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza 
        name="Pizza Funghi"
        ingredients ="Tomato, mushrooms"
        photoName="pizzas/funghi.jpg"
        price={13}
      /> */}

    </div>
  )
}
function Pizza(props){
  console.log(props);
  // if (!props.pizzaObj.soldOut) return null;
  return (
    <li className='pizza'>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}/>
      <div>
        <h3> {props.pizzaObj.name} </h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price + 3}</span>
    </div>
  </li>
  );
}
function Footer(){
  const hour = new Date().getHours();
  const openHour = 3;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen)

  // if ( hour >= openHour && hour <= closeHour)alert("we're open!");
  // else alert("we're closed");
  
  
  return(
    <footer className='footer'>
      {isOpen ? (
        <div class='order'>
          <p>
            we are open until {closeHour}:00. come visit us or order online
          </p>
          <button className='btn'>Order</button>
        </div>
      ) : (
        <p>
          we are happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
      
    </footer>
  );
  
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
