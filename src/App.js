import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
//Componentes   
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//Paginas
import Home from "./pages/home";
import Productos from "./pages/Productos";
import Contacto from "./pages/contacto";
import ProductPage from "./pages/ProductPage";
import ProductPageB from "./pages/ProductPageB";
import ProductPageC from "./pages/ProductPageC";
import Nosotros from "./pages/Nosotros";
//Contextos
export const burgerContext = React.createContext();
export const drinkContext = React.createContext();
export const chipContext = React.createContext();



function App() {
  //Estados
  const [burger, setBurger] = useState([]);
  const [drink, setDrink] = useState([]);
  const [chip, setChip] = useState([]);

  useEffect(() => {
    getBurger();
    getDrink();
    getChip();
  }, []);

  //Fetch
  async function getBurger() {
    const respBurger = await axios.get("https://burger-bad89-default-rtdb.firebaseio.com/burgers.json");
    setBurger(respBurger.data);
  }

  async function getDrink() {
    const respDrink = await axios.get("https://drink-c644c-default-rtdb.firebaseio.com/drinks.json");
    setDrink(respDrink.data);
  }

  async function getChip() {
    const respChip = await axios.get("https://chip-4890a-default-rtdb.firebaseio.com/chips.json");
    setChip(respChip.data);
  }

  return (
    <>
      <burgerContext.Provider value={burger}>
        <drinkContext.Provider value={drink}>
          <chipContext.Provider value={chip}>

            <Navbar/>

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Home" element={<Home />} />
              <Route exact path="/Contacto" element={<Contacto/>} />
              <Route exact path="/Nosotros" element={<Nosotros/>} />
              <Route exact path="/ProductPage/:id" element={<ProductPage />} />
              <Route exact path="/ProductPageB/:id" element={<ProductPageB />}></Route>
              <Route exact path="/ProductPageC/:id" element={<ProductPageC />}></Route>
              <Route exact path="/Productos" element={<Productos />}></Route>
            </Routes>

            <Footer/>

          </chipContext.Provider>
        </drinkContext.Provider>
      </burgerContext.Provider>
    </>
  );
}

export default App;

// APIS
// https://chip-4890a-default-rtdb.firebaseio.com/chips.json
// https://drink-c644c-default-rtdb.firebaseio.com/drinks.json
// https://burger-bad89-default-rtdb.firebaseio.com/burgers.json
