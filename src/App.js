import './App.css';
import React, { useEffect, useState} from 'react';
import axios from 'axios';

export const appContext = React.createContext()

function App() {
 
  const [buguer, setBurger] = useState([])
  const [drink, setDrink] = useState([])
  const [chip, setChip] = useState([])

  useEffect(()=>{
      getBurgers()
      getDrinks()
      getChips()
  },[])

  async function getBurgers(){
    const respBurger = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=ee2648f9f1e9bd8b7424b1f5bb21b561&language=en-US&page=1')
    setBurger(respBurger.data.results)}

  async function getDrinks(){
    const respDrinks = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=ee2648f9f1e9bd8b7424b1f5bb21b561&language=en-US&page=1')
    setDrink(respDrinks.data.results)}

  async function getChips(){
    const respChip = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=ee2648f9f1e9bd8b7424b1f5bb21b561&language=en-US&page=1')
    setChip(respChip.data.results)}

  return (
    <appContext.Provider value ={[buguer, drink, chip]}>
    
      <h1>PROYECTO LIMPIO!</h1>
    
    </appContext.Provider>
  );
}

export default App;
