import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function LayoutInicial() {
  return (
    <>
 <div class="max-w-2xl mx-auto  bg-black px-4  sm:px-6  lg:max-w-7xl lg:px-8 flex items-center " data-aos="zoom-in">
	<section class="bg-cover bg-center py-32 w-full bg-black" >
		<div class="container mx-auto text-left text-white">
			<div class="flex items-center">
				<div class="w-1/2">
					<h1 class="text-5xl font-medium mb-6">Sobre Nosotros</h1>
					<p class="text-xl mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
						euismod odio, gravida pellentesque urna varius vitae.</p>
					<a href="/Nosotros" className="mt-6 w-full transform rounded-md bg-gray-800 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-gray-600 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">Ver Mas</a>
				</div>
				<div class="w-1/2 pl-16">
					<img src="https://www.soho.co/resizer/0RlVd-yVs0AEyR4yvOQHxYaVzIU=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/2Q6ICXSHNJAZ3OK6DA6UHTGVUQ.jpg" class="h-64 w-full object-cover rounded-xl" alt=""/>
      </div>
				</div>
			</div>
	</section>
</div>
    </>
  );
}

export default LayoutInicial;
