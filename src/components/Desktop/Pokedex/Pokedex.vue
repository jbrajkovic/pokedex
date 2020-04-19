<template>
  <div>
    <div v-if="!getPaginationLoader" class="pokedex-desktop wrapper">
      <div class="pokemon-cards-desktop">
        <PokemonCardDesktop v-for="(pokemon,i) in getFilteredPokemons" :key="i" :pokemon="pokemon" />
      </div>

      <Pagination />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import PokemonCardDesktop from "./PokemonCardDesktop";
import Pagination from "../Pagination/Pagination";
import Spinner from "../Loader/LoaderDesktop";

import { mapActions, mapGetters } from "vuex";

export default {
  components: { PokemonCardDesktop, Pagination, Spinner },
  computed: {
    ...mapGetters(["getPokemons", "getPokedexLoader", "getFilteredPokemons", "getPaginationLoader"])
  },
  methods: {
    ...mapActions(["fetchPokemons", "fetchPokemonsForPagination"])
  },
  created() {
    if (!this.getFilteredPokemons.length) {
      this.fetchPokemonsForPagination();
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../../scss/mixin.scss";

.pokemon-cards-desktop {
  display: grid;
  gap: 10px 0;
  grid-template-columns: 1fr;
  padding: 30px 0 120px;

  @include sm {
    grid-template-columns: repeat(2, 1fr);
  }

  @include lg {
    grid-template-columns: repeat(3, 1fr);
  }

  @include xl {
    grid-template-columns: repeat(4, 1fr);
    margin-left: 200px;
  }

  @include rwd(1301) {
    margin-left: 240px;
  }
}
</style>