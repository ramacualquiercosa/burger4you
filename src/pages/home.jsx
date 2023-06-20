import React from "react";
import CarouselProducts from "../components/carouselProducts";
import CarouselPromos from "../components/carouselPromos";
// import FormContact from "../components/FormContact";
import LayoutInicial from "../components/LayoutInicial";
import FormContact2 from "../components/FormContact2";
import HomeLayout from "../components/HomeLayout";

function Home () {
return (
    <>
        <HomeLayout/>
        <LayoutInicial/>
        <CarouselProducts/>
        <CarouselPromos/>
        <FormContact2/>
    </>
)
}

export default Home