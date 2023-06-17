import React from "react";
import carouselImg from "../assets/img/carouselImg";


export default function CarouselPromos() {
    
  return (
    
    <div className="max-w-2xl mx-auto  bg-black px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8" data-aos="zoom-in">
        <h1 className="mb-4 text-3xl tracking-tight  text-center text-white dark:text-white">Promos especiales</h1>
        <div id="default-carousel" className="relative" data-carousel="slide">
            
            <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                
                <div className="hidden duration-700 ease-in-out " data-carousel-item>
                    <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                    <img src={carouselImg[3]} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 bg-gray-800" alt="..."/>
                    <h2 className="block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center text-4xl drop-shadow-lg w-full p-8">Happy Hour todos los viernes hasta las 23:00hs</h2>
                   
                </div>
                
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={carouselImg[6]} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 " alt="..."/>
                    <h2 className="block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center text-4xl drop-shadow-lg w-full p-8">15% off abonando con mercado pago</h2>
                    
                </div>
              
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={carouselImg[0]} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
                    <h2 className="block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center text-4xl drop-shadow-lg w-full p-8">2 x 1 abonando con tarjetas adheridas</h2>
                </div>
            </div>
            
            <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            </div>
           
            <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span class="hidden">Previous</span>
                </span>
            </button>
            <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <span class="hidden">Next</span>
                </span>
            </button>
        </div>
        
    
        <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
    </div>
  );
}