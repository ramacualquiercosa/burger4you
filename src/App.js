import './App.css';
import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Test from './components/test';
import CarouselBurger from './components/carouselBurgers';

export const burgerContext = React.createContext()
export const drinkContext = React.createContext()
export const chipContext = React.createContext()

function App() {
 
  const [burger, setBurger] = useState([])
  const [drink, setDrink] = useState([])
  const [chip, setChip] = useState([])
  

  useEffect(()=>{
    getBurger()
    getDrink()
    getChip()
 },[])

  async function getBurger(){
    const respBurger = await axios.get('https://burger-561b3-default-rtdb.firebaseio.com/burgers.json')
    console.log(respBurger.data)
    setBurger(respBurger.data)
  }

  async function getDrink(){
    const respDrink = await axios.get('https://drink-a0211-default-rtdb.firebaseio.com/drinks.json')
    console.log(respDrink.data)
    setDrink(respDrink.data)
  }

  async function getChip(){
    const respChip = await axios.get('https://chip-83964-default-rtdb.firebaseio.com/chips.json')
    console.log(respChip.data)
    setChip(respChip.data)
  }




  return (
    <burgerContext.Provider value ={burger}>
    <drinkContext.Provider value ={drink}>
    <chipContext.Provider value ={chip}>
      <Test/>
      <CarouselBurger/>
    </chipContext.Provider> 
    </drinkContext.Provider>
    </burgerContext.Provider>
    
    
  );
}

export default App;




// APIS
// https://chip-83964-default-rtdb.firebaseio.com/chips.json
// https://drink-a0211-default-rtdb.firebaseio.com/drinks.json
// https://burger-561b3-default-rtdb.firebaseio.com/burgers.json