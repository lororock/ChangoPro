<script setup>
import { ref } from 'vue'

const downSticky = ref(false);
const dropdown = ref(false);
const whatsapp = ref("");

const navbarSticky = () => {
  downSticky.value = !downSticky.value;
};

const dropdownNavbar = () => {
  dropdown.value = !dropdown.value;
};

const changewhatsapp = () => {
  if (window.innerWidth <= 768) {
    whatsapp.value = "api";
  } else {
    whatsapp.value = "web";
  }
};
</script>

<template>
  <nav class="bg-indigo-600 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
      <a to="/" class="flex items-center">
        <img src="../assets/chango1.png" class="h-12 mr-2 " />
        <span class="hidden self-center text-2xl font-semibold whitespace-nowrap text-white lg:block">ChanGo Pro</span>
      </a>
      <div class="flex md:order-2">
        <a :href="`https://${whatsapp}.whatsapp.com/send?phone=%20573114012648&text=Hola+bienvenido+a+ChanGo+Pro`"
          target="_blank">
          <button @click="changewhatsapp"
            class="text-indigo-700 bg-cyan-50 hover:bg-cyan-100 focus:ring-4 focus:outline-none focus:ring-blue-700 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 ">
            Contactanos
          </button>
        </a>

        <button @click="navbarSticky" type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-indigo-700 cus:outline-none focus:ring-2 focus:ring-indigo-800">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
      <div :class="`items-center justify-between ${downSticky ? '' : 'hidden'
        } w-full md:flex md:w-auto md:order-1`">
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-indigo-700 rounded-lg bg-indigo-600 md:flex-row md:space-x-8 md:mt-0 md:border-0">
          <li>
            <a active-class="block py-2 pl-3 pr-4 text-white bg-blue-500 rounded md:bg-transparent md:text-blue-300 md:p-0"
              href="#inicio"
              class="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-300 md:p-0"
              aria-current="page">Inicio</a>
          </li>
          <li>
            <a active-class="block py-2 pl-3 pr-4 text-white bg-blue-500 rounded md:bg-transparent md:text-blue-300 md:p-0"
              href="#informacion"
              class="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-300 md:p-0">Informacion</a>
          </li>
          <li>
            <a active-class="block py-2 pl-3 pr-4 text-white bg-blue-500 rounded md:bg-transparent md:text-blue-300 md:p-0"
              href="#caracteristicas"
              class="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-300 md:p-0">Caracteristicas</a>
          </li>
          <li>
            <button @click="dropdownNavbar"
              class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-white rounded hover:bg-blue-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0 md:w-auto">
              Explorar
              <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 4 4 4-4" />
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div :class="`z-10 ${dropdown ? '' : 'hidden'
              } absolute font-normal bg-cyan-50 divide-y divide-indigo-600 rounded-lg shadow w-44`">
              <ul class="py-2 text-sm text-indigo-700" aria-labelledby="dropdownLargeButton">
                <li>
                  <a active-class="block px-4 py-2 bg-blue-600" href="#"
                    class="block px-4 py-2 hover:bg-blue-600 hover:text-white">Posicionamiento de marca</a>
                </li>
                <li>
                  <a active-class="block px-4 py-2 bg-blue-600" href="#"
                    class="block px-4 py-2 hover:bg-blue-600 hover:text-white">Campañas mediaticas para eventos</a>
                </li>
                <li>
                  <a active-class="block px-4 py-2 bg-blue-600" href="#"
                    class="block px-4 py-2 hover:bg-blue-600 hover:text-white">???</a>
                </li>
              </ul>
              <div class="py-1">
                <a href="#" class="block px-4 py-2 text-sm text-indigo-700 hover:bg-blue-600 hover:text-white">???</a>
              </div>
            </div>
          </li>
          <li>
            <a href="#paquetes"
              class="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-300 md:p-0">Paquetes</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
