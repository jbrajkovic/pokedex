<template>
  <div v-if="isMobile" class="home">
    <Pokedex />
  </div>
  <div v-else class="home-desktop">
    <PokedexDesktop />
  </div>
</template>

<script>
import Pokedex from "@/components/Mobile/Pokedex/Pokedex.vue";
import PokedexDesktop from "@/components/Desktop/Pokedex/Pokedex.vue";

export default {
  name: "Home",
  components: {
    Pokedex,
    PokedexDesktop
  }
};
</script>