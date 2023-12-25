<script setup>
import { ref } from 'vue';

// Se utiliza ref para crear una referencia al modal
const modal = ref(null);

// Método para abrir el modal
const openModal = () => {
    modal.value.classList.remove('hidden');
};

// Método para cerrar el modal
const closeModal = () => {
    modal.value.classList.add('hidden');
};
</script>

<template>
    <section class="pt-10 overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center" id="inicio">
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
            <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
                    Transformando Ideas en Experiencias Visuales Inolvidables
                </h2>

                <p class="hidden text-gray-500 md:mt-4 md:block">
                    Nos especializamos en la creación de contenido audiovisual, gestión de campañas, marketing, eventos y
                    diseño, ofreciendo soluciones integrales que destacan y cautivan.

                    En ChanGo Pro, no simplemente creamos contenido, sino que damos vida a tus visiones. Nuestro equipo
                    apasionado combina la innovación con la experiencia para ofrecer experiencias visuales impactantes que
                    resuenan con tu audiencia.
                </p>
                <p class="hidden text-gray-500 md:mt-4 md:block">
                    Explora nuestras creaciones en nuestro portafolio y descubre cómo podemos potenciar tu presencia
                    digital. En ChanGo Pro, no solo creamos contenido; creamos conexiones, contamos historias y hacemos que
                    cada proyecto sea memorable.
                </p>

                <div class="mt-4 md:mt-8">
                    <button @click="openModal"
                        class="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                        Nuestro compromiso
                    </button>
                </div>
            </div>
        </div>

        <!-- El Modal -->
        <div ref="modal" class="hidden fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50">
            <div class="flex items-center justify-center min-h-screen">
                <div class="bg-white p-8 rounded">
                    <!-- Contenido del Modal -->
                    <div
                        class="divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white max-w-screen-sm mx-auto">
                        <details class="group p-6 [&_summary::-webkit-details-marker]:hidden" open>
                            <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                <h2 class="text-lg font-medium">Creación de Contenido Audiovisual</h2>

                                <span class="relative h-5 w-5 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                            </summary>

                            <p class="mt-4 leading-relaxed text-gray-700">
                                Nuestra creatividad se traduce en videos y contenido audiovisual que cuenta historias
                                impactantes y cautivadoras
                            </p>
                        </details>

                        <details class="group p-6 [&_summary::-webkit-details-marker]:hidden">
                            <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                <h2 class="text-lg font-medium">Gestión de Campañas y Marketing</h2>

                                <span class="relative h-5 w-5 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                            </summary>

                            <p class="mt-4 leading-relaxed text-gray-700">
                                Optimizamos tu presencia en línea a través de estrategias de marketing digital y campañas
                                efectivas que conectan con tu audiencia
                            </p>
                        </details>

                        <details class="group p-6 [&_summary::-webkit-details-marker]:hidden">
                            <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                <h2 class="text-lg font-medium">Eventos Memorables</h2>
                                <span class="relative h-5 w-5 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                            </summary>

                            <p class="mt-4 leading-relaxed text-gray-700">
                                Desde la planificación hasta la ejecución, creamos eventos que dejan una impresión duradera,
                                combinando creatividad y logística impecable
                            </p>
                        </details>

                        <details class="group p-6 [&_summary::-webkit-details-marker]:hidden">
                            <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                <h2 class="text-lg font-medium">Diseño Creativo</h2>
                                <span class="relative h-5 w-5 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                            </summary>

                            <p class="mt-4 leading-relaxed text-gray-700">
                                Nuestro equipo de diseñadores transforma ideas en visuales atractivos, desde logotipos hasta
                                materiales de marketing
                            </p>
                        </details>


                    </div>
                    <!-- Botón para cerrar el modal -->
                    <button @click="closeModal"
                        class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
        <img alt="Violin"
            src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]" />
    </section>
</template>