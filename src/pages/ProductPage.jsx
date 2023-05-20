import React, { useContext } from "react";
import { useParams } from "react-router-dom"; 

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

<div className="py-6">
<div className="flex max-w-md bg-gray-100 shadow-lg rounded-lg overflow-hidden">
<div
    className="w-1/3 bg-contain bg-no-repeat bg-center"
    style={{ backgroundImage: `url(${product.img})` }}
  ></div>


  <div className="w-2/3 p-4">
    <h1 className="text-gray-900 font-bold text-2xl">
      {product.name}
    </h1>
    <p className="mt-2 text-gray-600 text-sm">{product.description}</p>
    <div className="flex item-center mt-2 gap-5">
      <h3>Precio: {product.price}</h3>
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


);
}

export default ProductPage;