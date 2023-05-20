import React, { useContext } from "react";
import { useParams } from "react-router-dom"; 
import { Link } from "react-router-dom";

import { burgerContext } from "../App";
import { drinkContext } from "../App";
import { chipContext } from "../App";


function ProductPage() {

  const { id } = useParams(); 

  const burger = useContext(burgerContext);
  const drink = useContext(drinkContext);
  const chip = useContext(chipContext);


  const product = burger[id] || drink[id] || chip[id];

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

  <div className="flex items-center justify-center pt-4 text-gray-900 font-bold text-2xl">
  <h1 > {product.name} </h1>
  </div>
  <div className="gap-2 p-6 justify-items-center ">
<div className="p-6">
<div className="flex-col bg-gray-100 shadow-lg rounded-lg">
<div
    className="bg-contain bg-no-repeat bg-center h-96"
    style={{ backgroundImage: `url(${product.img})` }}
  ></div>


  <div className="p-4">
    <p className="mt-2 text-gray-600 text-sm">{product.description}</p>
    <div className="flex item-center mt-2 gap-5">
      <h3>Precio: {product.price}</h3>
    </div>
    <div className="flex item-center justify-between mt-3 flex-col	">
 
      <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded w-36">
        Add to Card
      </button>
      <Link to={`/Productos`}>
      <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded  w-36">
        Volver</button>
      </Link>
    </div>
  </div>
</div>
</div>
</div>

</>
);
}

export default ProductPage;