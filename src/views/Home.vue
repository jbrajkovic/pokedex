<template>
  <div v-if="mobile" class="home">
    <Pokedex />
  </div>
  <div v-else class="home-desktop">
    HOME
  </div>
</template>

<script>
import Pokedex from "@/components/Mobile/Pokedex/Pokedex.vue";
import { isMobile } from 'mobile-device-detect';


export default {
  name: "Home",
  components: {
    Pokedex
  },
  computed: {
    mobile() {
      return isMobile
    }
  }
};
</script>