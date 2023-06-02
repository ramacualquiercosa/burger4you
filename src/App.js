import './App.css';
import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Test from './components/test';

import { Route , Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import CarouselProducts from './components/carouselProducts';
import CarouselPromos from './components/carouselPromos';


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
    const respBurger = await axios.get('https://burger-bad89-default-rtdb.firebaseio.com/burgers.json')

    setBurger(respBurger.data)
  }

  async function getDrink(){
    const respDrink = await axios.get('https://drink-c644c-default-rtdb.firebaseio.com/drinks.json')

    setDrink(respDrink.data)
  }

  async function getChip(){
    const respChip = await axios.get('https://chip-4890a-default-rtdb.firebaseio.com/chips.json')
  
    setChip(respChip.data)
  }




  return (

    <>
      <Routes>
        <Route path="api" element={Test} />
      </Routes>

      <burgerContext.Provider value={burger}>
        <drinkContext.Provider value={drink}>
          <chipContext.Provider value={chip}>

            <Navbar />
             <CarouselProducts/>
      <CarouselPromos/>
            <Test />
            <Footer/>
          </chipContext.Provider>
        </drinkContext.Provider>
      </burgerContext.Provider>
    </>

  );
}

export default App;




// APIS
// https://chip-83964-default-rtdb.firebaseio.com/chips.json
// https://drink-a0211-default-rtdb.firebaseio.com/drinks.json
// https://burger-561b3-default-rtdb.firebaseio.com/burgers.json