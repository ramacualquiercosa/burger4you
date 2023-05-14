import './App.css';
import React, { useEffect, useState} from 'react';
import axios from 'axios';

export const appContext = React.createContext()

function App() {
 
  const [buguer, setBurger] = useState([])
  const [beer, setBeer] = useState([])
  const [chips, setChips] = useState([])

  useEffect(()=>{
      getBurger()
      getBeer()
      getChips()
  },[])

  async function getBurger(){
    const respBurger = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=ee2648f9f1e9bd8b7424b1f5bb21b561&language=en-US&page=1')
    setBurger(respBurger.data.results)}

  async function getBeer(){
    const respBeer = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=ee2648f9f1e9bd8b7424b1f5bb21b561&language=en-US&page=1')
    setBeer(respBeer.data.results)}

  async function getChips(){
    const respChips = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=ee2648f9f1e9bd8b7424b1f5bb21b561&language=en-US&page=1')
    setChips(respChips.data.results)}

  return (
    <appContext.Provider value ={[buguer, beer, chips]}>
    
      <h1>PROYECTO LIMPIO</h1>
    
    </appContext.Provider>
  );
}

export default App;
