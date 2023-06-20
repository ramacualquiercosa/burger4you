import React from 'react'
import {
  BookmarkIcon,
  MapPinIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Premio a mejor hamburguesa del país",
    description: "Brindado por el Instituto nacional de gatronomía",
    icon: BookmarkIcon,
  },
  {
    name: "40000 clientes nos eligen cada aó",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon:  UserGroupIcon,
  },
  {
    name: "Seleccionamos materia prima de mejor calidad",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon:  ShieldCheckIcon,
  },
  {
    name: "Nos ubicamos en Buenos Aires, argentina",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: MapPinIcon,
  },
];

function Nosotros() {
  return (
    <div className="bg-dark py-24 sm:py-32" data-aos="zoom-in">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mb-4 text-3xl tracking-tight  text-center  text-white ">
            Burger 4U
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-2xl">
            Somos una empresa con más de 40 años en el rubro
          </p>
          <p className="mt-6 text-lg leading-8 text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Distinctio, voluptatibus quis ratione, vel molestiae molestias porro
            laboriosam sint, perspiciatis accusamus temporibus soluta
            consequatur eligendi tenetur rerum. At sint necessitatibus
            excepturi..
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-900">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">
                  {feature.description}
                </dd>
              </div>
         
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Nosotros