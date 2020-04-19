<template>
  <div v-if="!getPokedexLoader" class="wrapper pokemon-cards my-10">
    <PokedexCard v-for="(pokemon, i) in getPokemons" :key="i" :pokemon="pokemon" />

    <div class="observer-loader text-center p-10">
      <Spinner v-if="getObserverLoader" />
    </div>
    
    <Observer @Intersect="loadMore" />
  </div>
  <div v-else class="home-loader d-flex flex-center">
    <h1>POKEDEX</h1>
  </div>
</template>

<script>
import PokedexCard from "@/components/Mobile/Pokedex/PokedexCard.vue";
import Observer from "@/components/Mobile/Observer/Observer.vue";
import Spinner from "@/components/Mobile/Loader/Spinner.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    PokedexCard,
    Observer,
    Spinner
  },
  computed: {
    ...mapGetters(["getPokemons", "getPokedexLoader", "getObserverLoader"]),
  },
  methods: {
    ...mapActions(["fetchPokemons", "loadMore"])
  },
  created() {
    if (!this.getPokemons.length) {
      this.fetchPokemons();
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../scss/variables.scss';

.home-loader {
  width: 100%;
  height: 100vh;
  /* background: url("../../../assets/pokedexapp1-01.jpg") no-repeat;
  background-position: center;
  background-size: cover; */
  position: absolute;
  background: $primary-color;
  color: #333333;
  font-weight: bold;
  font-size: 25px;
  top: 0;
  left: 0;
}
</style>