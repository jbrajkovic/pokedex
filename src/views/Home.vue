<template>
  <div class="home">
    <Pokedex />
  </div>
</template>

<script>
import Pokedex from "@/components/Mobile/Pokedex/Pokedex.vue";

export default {
  name: "Home",
  components: {
    Pokedex
  }
};
</script>