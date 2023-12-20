<script setup>
import { ref } from "vue";

const audioElement = ref(null);
const isPlaying = ref(false);

const toggleReproduccion = () => {
  if (isPlaying.value) {
    audioElement.value.pause();
  } else {
    audioElement.value.play();
  }
  isPlaying.value = !isPlaying.value;
};

audioElement.value?.addEventListener("ended", () => {
  isPlaying.value = false;
});
</script>

<template>
  <div>
    <div class="grid h-screen place-content-center bg-white-100 px-4">
      <div class="text-center">
        <img
          src="../assets/img/not fount.gif"
          class="mx-auto h-56 w-auto text-black sm:h-64"
        />
        <h1
          class="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Uh-oh!
        </h1>

        <p class="mt-4 text-gray-500">Estamos buscando esta pagina..</p>
        <audio controls autoplay class="hidden" ref="audioElement">
          <source src="../assets/img/mi-sonido.mp3" type="audio/mp3" />
        </audio>
      </div>
      <button @click="toggleReproduccion">
        {{ isPlaying ? "Pausar Sonido" : "Reproducir Sonido" }}
      </button>
    </div>
  </div>
</template>
