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
import Nosotros from "./pages/Nosotros";


//Contextos
export const productsContext = React.createContext();



function App() {



  const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);




  //Estados
    const [products, setProducts] = useState([]);
  

  useEffect(() => {
    
    getProducts();
    
  }, []);

 //Fetch
  
  async function getProducts() {
    const respProducts = await axios.get("https://products-736ef-default-rtdb.firebaseio.com/products.json");
    setProducts(respProducts.data);
  }




  
  return (
    <>
    <productsContext.Provider value={products}>
      
            
            <Navbar allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}/>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Home" element={<Home />} />
              <Route exact path="/Contacto" element={<Contacto/>} />
              <Route exact path="/Nosotros" element={<Nosotros/>} />
              <Route exact path="/Productos" element={<Productos 
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
                            
              />}></Route>
            
            </Routes>

            <Footer/>
            
         
          
      </productsContext.Provider>
    </>
  );
}

export default App;

// API
// https://products-736ef-default-rtdb.firebaseio.com/products.json

