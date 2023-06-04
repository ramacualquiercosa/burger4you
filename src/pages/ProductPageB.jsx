import React, { useContext } from "react";
import { useParams } from "react-router-dom"; 
import { Link } from "react-router-dom";

import { burgerContext } from "../App";



function ProductPageB() {

  const { id } = useParams(); 

  const burger = useContext(burgerContext);



  const product = burger[id] 

if (!product) {
  return <div>Producto no encontrado.</div>;
}

return (
  // <div>
  //   <h1>{product.name}</h1>
  //   <p>{product.description}</p>
  //   <p>Precio: {product.price}</p>
  // </div>

  <>

<div className="flex items-center justify-center mt-8">

<div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-6xl md:h-96 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:max-w-sm md:rounded-none md:rounded-l-lg" src={product.img} alt=""></img>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
        <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded w-36">
        Add to Card
      </button>
      <Link to={`/Productos`}>
      <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded  w-36 mt-2">
        Volver</button>
      </Link>
    </div>
</div>
</div>

</>
);
}

export default ProductPageB;