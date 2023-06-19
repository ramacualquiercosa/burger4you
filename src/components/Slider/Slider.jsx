import React from 'react';
import estilos from './Slider.module.css';
import { Button } from 'flowbite-react';

function Slider({ imagenes }) {
	// Variables y Estados
	const [imagenActual, setImagenActual] = React.useState(0);
	const cantidad = imagenes?.length;

	// Return prematuro para evitar errores
	if (!Array.isArray(imagenes) || cantidad === 0) return;

	const siguienteImagen = () => {
		setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
	};

	const anteriorImagen = () => {
		setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
	};

	return (
		<div className={estilos.container}>
			<button onClick={anteriorImagen}>←</button>
			{imagenes.map((imagen, index) => {
				return (
					<div
						className={
							imagenActual === index
								? `${estilos.slide} ${estilos.active}`
								: estilos.slide
						}>
						{imagenActual === index && (
							<img key={index} src={imagen} alt="imagen" />
						)}
					</div>
				);
			})}
			<button onClick={siguienteImagen}>→</button>
		<div>
			<h1>Quienes somos</h1>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde eligendi dicta iure veniam nostrum perspiciatis ipsa eaque quibusdam dignissimos dolore, quaerat distinctio aliquid blanditiis cupiditate expedita, quasi maiores placeat voluptatibus!</p>	
			<div class="px-5 py-2">
              <a
                href="/Nosotros"
                class="text-sm leading-6 text-slate-100 hover:text-gray-900"
              >
                Ver mas
              </a>
            </div>
		</div>
		</div>
		
	);
}

export default Slider;