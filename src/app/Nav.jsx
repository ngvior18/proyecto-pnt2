"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  UserCircleIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import getCategorias from "./categorias/useCategorias";

export default function navLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const categorias = getCategorias();
  const [token, setToken] = useState(null);
  const [adminToken, setAdminToken] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(localStorage.getItem("authToken"));
      setAdminToken(localStorage.getItem("adminAuthToken"));
    }
  });

  const handleLogOut = () => {
    localStorage.clear();
  };

  return (
    <>
      <header className="isolate border-b border-white-100">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href={!adminToken ? "/" : "/admin"} className="-m-1.8 p-1.5">
              <img className="h-12 w-13 pt-4" src="/images/logo.png" alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-cyan-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {!adminToken ? (
            <PopoverGroup className="hidden lg:flex z-1">
              <Popover className="relative">
                <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 pl-4 p-1">
                  <span className="text-white px-3 py-1  bg-cyan-700 font-cambria">
                    NUESTROS PRODUCTOS
                  </span>
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                </PopoverButton>

                <Transition
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 border">
                      <div className="p-4 z-1">
                        {categorias.map((categoria) => (
                          <div
                            key={categoria._id}
                            className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-cyan-700"
                          >
                            <a
                              href={`/categorias/${categoria._id}`}
                              className="block font-semibold text-gray-900 font-cambria"
                            >
                              {categoria.nombre}
                              <span className="absolute inset-0" />
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>

              <a
                href="/contacto"
                className="text-sm font-semibold leading-6 text-white p-2 px-4 transition-colors font-cambria"
              >
                CONTACTANOS
              </a>
            </PopoverGroup>
          ) : (
            <>
              <a
                href="/admin/categories"
                className="text-sm font-semibold leading-6 text-white p-2 px-4 transition-colors font-cambria"
              >
                CATEGORIAS
              </a>
              <a
                href="/admin/productos"
                className="text-sm font-semibold leading-6 text-white p-2 px-4 transition-colors font-cambria"
              >
                PRODUCTOS
              </a>
              <a
                href="/admin/users"
                className="text-sm font-semibold leading-6 text-white p-2 px-4 transition-colors font-cambria"
              >
                USUARIOS
              </a>
            </>
          )}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
            <Popover className="relative">
              <Popover.Button className="flex items-center text-cyan-700 p-1 border border-transparent rounded-lg hover:border-white transition-colors ">
                <UserCircleIcon className="h-7 w-7" aria-hidden="true" />
              </Popover.Button>
              <Transition
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2 w-48 rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-white">
                  <div className="py-1">
                    <div>
                      <>
                        {token || adminToken ? (
                          <>
                            <a
                              href="/perfil"
                              className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                            >
                              Ver Perfil
                            </a>
                            <a
                              onClick={handleLogOut}
                              href={token ? "/login" : "/admin/login"}
                              className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                            >
                              Cerrar sesion
                            </a>
                          </>
                        ) : (
                          <>
                            <a
                              href="/login"
                              className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                            >
                              Ingresa
                            </a>
                            <a
                              href="/register"
                              className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                            >
                              Registrate
                            </a>
                          </>
                        )}
                        {/* {adminToken ? (
                          <>
                            <a
                              href="/perfil"
                              className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                            >
                              Ver Perfil
                            </a>
                          </>
                        ) : (
                          <></>
                        )} */}
                      </>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <a
              href="#"
              className="ml-4 text-sm font-semibold leading-6 text-cyan-700 p-1 border border-transparent rounded-lg hover:border-white transition-colors"
            ></a>
          </div>
        </nav>
      </header>
    </>
  );
}
