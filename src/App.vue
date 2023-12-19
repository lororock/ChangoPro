<script setup>
import { RouterView } from "vue-router";
import { onMounted } from "vue";
import { ref } from "vue";

const loading = ref(true);

const animation = () => {
  setTimeout(() => {
    console.log("¡Temporizador finalizado!");
    loading.value = false;
  }, 2000);
};

onMounted(() => {
  animation();
});
</script>

<template>
  <RouterView class="relative" />
  <div
    :class="
      loading
        ? 'absolute top-0 left-0 max-w-screen max-h-screen overflow-auto v-else'
        : 'hidden'
    "
  >
    <div class="grid grid-cols-1 md:grid-cols-2 h-screen">
      <!-- Primer div que ocupa la mitad -->
      <div
        class=""
        :class="
          loading
            ? 'animate-fade-right animate-once animate-alternate-reverse animate-duration-[2000ms] h-full'
            : ''
        "
      >
        <img
          src="./assets/img/izquierda.jpg"
          class="object-cover w-screen h-screen"
        />
      </div>

      <!-- Segundo div que también ocupa la mitad -->
      <div
        class="animate-fade-left animate-once animate-alternate-reverse animate-duration-[2000ms] h-full"
      >
        <img
          src="./assets/img/derecha.jpg"
          class="object-cover w-screen h-screen"
        />
      </div>
    </div>
  </div>
</template>
