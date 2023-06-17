import React, { useContext } from "react";
import { burgerContext } from "../App";
import { drinkContext } from "../App";
import { chipContext } from "../App";
// import { Link } from 'react-router-dom';



function Test() {
  const burger = useContext(burgerContext);
  const drink = useContext(drinkContext);
  const chip = useContext(chipContext);

  return (
    <>
    {/* <div className="bg-dark" >
      <div className="mx-auto max-w-1xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h1 className="text-center text-3xl text-white" data-aos="zoom-in">Productos</h1> */}







      <div className="bg-dark">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-center text-3xl text-white" data-aos="zoom-in">Productos</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
          {burger.map((item, index) => (
            <div key={index} className="group relative" data-aos="zoom-in">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80" data-aos="zoom-in">
                <img
                  src={item.img}
                  className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex-col">

              <h3 className="mt-2 text-2xl tracking-tight text-white sm:text-2xl">
                    
                    <span aria-hidden="true" className="absolute inset-0" />
                    {item.name}
                </h3>

              <p className="mt-2 text-base leading-7 text-white">
                    
                    <span aria-hidden="true" className="absolute inset-0" />
                    {item.description}
                </p>

                <div>

               


                </div>
                <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-2xl">{item.price}</p>
                <button className="mt-3 px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                            Add to Card
            </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
          {chip.map((item, index) => (
            <div key={index} className="group relative" data-aos="zoom-in">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80" data-aos="zoom-in">
                <img
                  src={item.img}
                  className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex-col">

              <h3 className="mt-2 text-2xl tracking-tight text-white sm:text-2xl">
                    
                    <span aria-hidden="true" className="absolute inset-0" />
                    {item.name}
                </h3>

              <p className="mt-2 text-base leading-7 text-white">
                    
                    <span aria-hidden="true" className="absolute inset-0" />
                    {item.description}
                </p>

                <div>

               


                </div>
                <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-2xl">{item.price}</p>
                <button className="mt-3 px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                            Add to Card
            </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
          {drink.map((item, index) => (
            <div key={index} className="group relative" data-aos="zoom-in">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80" data-aos="zoom-in">
                <img
                  src={item.img}
                  className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex-col">

              <h3 className="mt-2 text-2xl tracking-tight text-white sm:text-2xl">
                    
                    <span aria-hidden="true" className="absolute inset-0" />
                    {item.name}
                </h3>

              <p className="mt-2 text-base leading-7 text-white">
                    
                    <span aria-hidden="true" className="absolute inset-0" />
                    {item.description}
                </p>

                <div>

               


                </div>
                <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-2xl">{item.price}</p>
                <button className="mt-3 px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                            Add to Card
            </button>
              </div>
            </div>
          ))}
        </div>





      </div>
    </div>





{/* 




      <div className="grid grid-cols-2 gap-x-6 gap-y-16 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-16 justify-items-center pt-14" >        {burger.map((item, index) => (


        <>
              <div  key={index} className="aspect-h-1 aspect-w-1 h-96 w-96 object-center overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" data-aos="zoom-in">
              <div
                className="bg-contain bg-no-repeat bg-center h-full"
                style={{ backgroundImage: `url(${item.img})`}}></div>
                
              </div>
              <div className="h-1/3">

              <h2 className="mt-4 text-2xl text-white">{item.name}</h2>
              <h3 className="mt-1 text-lg font-medium text-white">{item.price}</h3>
              
            <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                            Add to Card
            </button>
            </div>

            </>


        ))}
              </div>


              <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-16 justify-items-center pt-12">        {drink.map((item, index) => (

<>
        <div  key={index} className="aspect-h-1 aspect-w-1 h-96 w-96 object-center overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" data-aos="zoom-in">
        <div
          className="bg-contain bg-no-repeat bg-center h-full"
          style={{ backgroundImage: `url(${item.img})`}}></div>
          
        </div>
        <div className="h-1/3">

        <h2 className="mt-4 text-2xl text-white">{item.name}</h2>
        <h3 className="mt-1 text-lg font-medium text-gray-900">{item.price}</h3>
        
      <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                      Add to Card
      </button>
      </div>
      </>

  ))}
        </div>

        
      <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-16 justify-items-center pt-12">        {chip.map((item, index) => (

<>
        <div  key={index} className="aspect-h-1 aspect-w-1 h-96 w-96 object-center overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" data-aos="zoom-in">
        <div
          className="bg-contain bg-no-repeat bg-center h-full"
          style={{ backgroundImage: `url(${item.img})`}}></div>
          
        </div>
        <div className="h-1/3">

        <h2 className="mt-4 text-2xl text-white">{item.name}</h2>
        <h3 className="mt-1 text-lg font-medium text-white">{item.price}</h3>
        
      <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                      Add to Card
      </button>
      </div>
      </>

  ))}
        </div>

</div>
</div> */}
    </>
  );
}

export default Test;
