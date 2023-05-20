import React, { useContext } from "react";
import { burgerContext } from "../App";
import { drinkContext } from "../App";
import { chipContext } from "../App";
import { Link } from 'react-router-dom';



function Test() {
  const burger = useContext(burgerContext);
  const drink = useContext(drinkContext);
  const chip = useContext(chipContext);

  return (
    <>
    <div className="flex items-center justify-center pt-4 text-gray-900 font-bold text-2xl">
      <h1 >Prueba API Hamburguesas:</h1>
      </div>
      <div className=" grid grid-cols-2 gap-2 py-2 justify-items-center grid-flow-row ">
        {burger.map((item, index) => (

// agregado

<Link key={index} to={`/ProductPage/${index}`}>

          <div key={index} className="py-6">
            <div className="flex max-w-md bg-gray-100 shadow-lg rounded-lg overflow-hidden">



              <div
                className="w-1/3 bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>


              <div className="w-2/3 p-4">
                <h1 className="text-gray-900 font-bold text-2xl">
                  {item.name}
                </h1>
                <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
                <div className="flex item-center mt-2 gap-5">
                  <h3>Precio: {item.price}</h3>
                </div>
                <div className="flex item-center justify-between mt-3">
                  <h1 className="text-gray-700 font-bold text-xl">
                    {/* ${item.price} */}
                  </h1>
                  <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                    Add to Card
                  </button>
                </div>
              </div>
            </div>
          </div>
          </Link>


        ))}

      </div>
      <div className="flex items-center justify-center pt-7 pb-4 text-gray-900 font-bold text-2xl">
      <h1>Prueba API Bebidas:</h1>
      </div>
      <div className=" grid grid-cols-2 justify-items-center gap-4 py-4 grid-flow-row ">
        {drink.map((item, index) => (
          <div key={index} className="py-6">
            <div className="flex max-w-md bg-gray-100 shadow-lg rounded-lg overflow-hidden">
              <div
                className="w-1/3 bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div className="w-2/3 p-4">
                <h1 className="text-gray-900 font-bold text-2xl">
                  {item.name}
                </h1>
                <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
                <div className="flex item-center mt-2 gap-5">
                  <h3>Precio: {item.price}</h3>
                </div>
                <div className="flex item-center justify-between mt-3">
                  <h1 className="text-gray-700 font-bold text-xl">
                    {/* ${item.price} */}
                  </h1>
                  <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                    Add to Card
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center pt-7 pb-4 text-gray-900 font-bold text-2xl">
      <h1>Prueba API Entradas:</h1>
      </div>
      <div className=" grid grid-cols-2 justify-items-center gap-4 py-4 grid-flow-row ">
        {chip.map((item, index) => (
          <div key={index} className="py-6">
            <div className="flex max-w-md bg-gray-100 shadow-lg rounded-lg overflow-hidden">
              <div
                className="w-1/3 bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div className="w-2/3 p-4">
                <h1 className="text-gray-900 font-bold text-2xl">
                  {item.name}
                </h1>
                <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
                <div className="flex item-center mt-2 gap-5">
                  <h3>Precio: {item.price}</h3>
                </div>
                <div className="flex item-center justify-between mt-3">
                  <h1 className="text-gray-700 font-bold text-xl">
                    {/* ${item.price} */}
                  </h1>
                  <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                    Add to Card
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Test;
