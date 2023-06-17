import React, { useContext } from "react";
import { burgerContext } from "../App";
import { drinkContext } from "../App";
import { chipContext } from "../App";
import { Link } from 'react-router-dom';



function Test({FiltroProducto}) {
  
    let titulo = "PRODUCTOS";
    let burger = useContext(burgerContext);
    let drink = useContext(drinkContext);
    let chip = useContext(chipContext);

    if(FiltroProducto === "burger"){
      drink = null;
      chip = null;
      titulo= "Hamburguesas";
    }

    if(FiltroProducto === "drink"){
      burger = null;
      chip = null;
      titulo= "Bebidas";
    }

    if(FiltroProducto === "chip"){
      drink = null;
      burger = null;
      titulo= "Entradas";
    }

  return (
    <>
      <div className="bg-dark" >
        <div className="mx-auto max-w-1xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h1 className="text-center text-3xl text-white" data-aos="zoom-in">{titulo}</h1>

          <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-16 justify-items-center pt-14" >        
          {burger?.map((item, index) => (

              <Link key={index} to={`/ProductPageB/${index}`}>

              <div  key={index} className="aspect-h-1 aspect-w-1 h-96 w-96 object-center overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" data-aos="zoom-in">
              <div className="bg-contain bg-no-repeat bg-center h-full"
                style={{ backgroundImage: `url(${item.img})`}}></div>
                
              </div>
              <div className="h-1/3">

              <h2 className="mt-4 text-2xl text-white">{item.name}</h2>
              <h3 className="mt-1 text-lg font-medium text-white">{item.price}</h3>
              
            <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
              Agregar a mi carrito
            </button>
            </div>
            </Link>


        ))}
              </div>


      <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-16 justify-items-center pt-12">        
      {drink?.map((item, index) => (

          <Link key={index} to={`/ProductPage/${index}`}>

            <div  key={index} className="aspect-h-1 aspect-w-1 h-96 w-96 object-center overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" data-aos="zoom-in">
            <div className="bg-contain bg-no-repeat bg-center h-full"
              style={{ backgroundImage: `url(${item.img})`}}></div>
          
        </div>
        <div className="h-1/3">

            <h2 className="mt-4 text-2xl text-white">{item.name}</h2>
            <h3 className="mt-1 text-lg font-medium text-white">{item.price}</h3>
        
            <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
              Agregar a mi carrito
            </button>
        </div>
      </Link>


  ))}
        </div>

        
      <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-16 justify-items-center pt-12">        
      {chip?.map((item, index) => (

      <Link key={index} to={`/ProductPageC/${index}`}>

        <div  key={index} className="aspect-h-1 aspect-w-1 h-96 w-96 object-center overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" data-aos="zoom-in">
        <div className="bg-contain bg-no-repeat bg-center h-full"
          style={{ backgroundImage: `url(${item.img})`}}></div>
          
        </div>
        <div className="h-1/3">

        <h2 className="mt-4 text-2xl text-white">{item.name}</h2>
        <h3 className="mt-1 text-lg font-medium text-white">{item.price}</h3>
        
        <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
              Agregar a mi carrito
        </button>
      </div>
      </Link>


  ))}
        </div>

        </div>
        </div>
    </>
  );
}

export default Test;