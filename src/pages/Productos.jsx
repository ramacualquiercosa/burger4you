import React from "react";
import Cards from "../components/Cards";

function Productos () {

    const searchParams = new URLSearchParams(window.location.search);
    let search = searchParams.get('item');
    

    return (
    <>
       
        <Cards FiltroProducto={search}/>

    </>
)
}

export default Productos