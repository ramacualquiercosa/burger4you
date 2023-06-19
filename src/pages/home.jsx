import React from "react";
import CarouselProducts from "../components/carouselProducts";
import CarouselPromos from "../components/carouselPromos";
import FormContact from "../components/FormContact";
import Slider from "../components/Slider/Slider";
import sliderImg from "../assets/img/sliderImg";

function Home () {
return (
    <>
        <CarouselProducts/>
        <CarouselPromos/>
        <Slider imagenes={sliderImg} />
        <FormContact/>
    </>
)
}

export default Home