import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const navigation = [
  { name: "Inicio", href: "/Home", current: false },
  { name: "Nosotros", href: "/Nosotros", current: false },
  { name: "Productos", href: "/Productos", current: false },
  { name: "Contacto", href: "/Contacto", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) {
  const [active, setActive] = useState(false);

  const onDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id);

    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <Disclosure as="nav" className="bg-red-900 fixed w-screen z-50" data-aos="zoom-in">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 z-50 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-red-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <a href="/home">
                    <img
                      className="block  h-8 w-auto lg:hidden"
                      src={require("../assets/img/logo3.png")}
                      alt="Your Company"
                    />
                  </a>

                  <a href="/home">
                    <img
                      className="hidden h-9 w-auto lg:block"
                      src={require("../assets/img/logo3.png")}
                      alt="Burgers 4 you"
                    />
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:block justify-center">
                  <div className="flex space-x-4 items-center justify-center">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-white hover:bg-red-950 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="container-icon ">
                <div
                  className="container-cart-icon"
                  onClick={() => setActive(!active)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="icon-cart"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  <div className="count-products">
                    <span id="contador-productos">{countProducts}</span>
                  </div>
                </div>

                <div
                  className={`container-cart-products ${
                    active ? "" : "hidden-cart"
                  }`}
                >
                  {allProducts.length ? (
                    <>
                      <div className="row-product">
                        {allProducts.map((product) => (
                          <div className="cart-product" key={product.id}>
                            <div className="info-cart-product">
                              <span className="cantidad-producto-carrito">
                                {product.quantity}
                              </span>
                              <p className="titulo-producto-carrito">
                                {product.name}
                              </p>
                              <span className="precio-producto-carrito">
                                ${product.price}
                              </span>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="icon-close"
                              onClick={() => onDeleteProduct(product)}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </div>
                        ))}
                      </div>

                      <div className="cart-total">
                        <h3>Total:</h3>
                        <span className="total-pagar">${total}</span>
                      </div>

                      <button className="btn-clear-all" onClick={onCleanCart}>
                        Vaciar Carrito
                      </button>
                    </>
                  ) : (
                    <p className="cart-empty">El carrito está vacío</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
