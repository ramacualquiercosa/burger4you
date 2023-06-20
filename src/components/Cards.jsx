import React, {useContext, useEffect } from "react";
import { productsContext } from "../App";

function Test({
  FiltroProducto,
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) {

  let products = useContext(productsContext);
  
  

  useEffect(() => {

    if (FiltroProducto&&countProducts==0) {
      console.log (FiltroProducto);
      const element = document.getElementById(FiltroProducto.toUpperCase());
      
      console.log (element);
      
      if (element) {
        // element.scrollIntoView({ behavior: "auto", block: "center" });
        // scrolledRef.current = true;
        
        var headerOffset = 150;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
        window.scrollTo({
             top: offsetPosition,
             behavior: "auto"
        });

      }     
    }
  });

  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
       setTotal(total + product.price * product.quantity);
       setCountProducts(countProducts + product.quantity);
       return setAllProducts([...products]);
    }

     setTotal(total + product.price * product.quantity);
     setCountProducts(countProducts + product.quantity);
     setAllProducts([...allProducts, product]);
  };

  return (
    <>
      
      <div className="bg-dark">
    
        <div className="mx-auto max-w-1xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

          <div className="fixed left-0 right-0 pt-5 top-16 text-xl text-white bg-black">
          <h2 className="z-1 mb-4 text-3xl tracking-tight  text-center  text-white ">Productos  
          {FiltroProducto && " / " + FiltroProducto?.toUpperCase()}</h2>
           
           </div>


          <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-16 justify-items-center pt-14 ">
            {products.map((item, index) => (
              
            <div >
              <a id={item.name.split(' ')[0].toUpperCase()}></a>
              
                <div
                  key={index}
                  className="aspect-h-1 aspect-w-1 h-96 w-96 object-center overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
                >
                    <div
                    className="bg-contain bg-no-repeat bg-center h-full"
                    style={{ backgroundImage: `url(${item.img})` }}
                    
                  >
                  </div>
                </div>
                <div className="h-1/3">
                  <h2 className="mt-4 text-2xl text-white">{item.name}</h2>
                  <p className="text-white text-justify w-80">
                    {item.description}
                  </p>
                  <h3 className="mt-1 text-lg font-medium text-white">
                    ${item.price}
                  </h3>

                  <button
                    className="mt-6 w-full rounded-md bg-gray-800 px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 hover:bg-gray-600 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                    onClick={() => onAddProduct(item)}
                  >
                    Agregar a mi carrito
                  </button>
                </div>
              </div>
            ))
            
            }

          </div>
        </div>

        
      </div>
    </>
  );
}

export default Test;


            
           