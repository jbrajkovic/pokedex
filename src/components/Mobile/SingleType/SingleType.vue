<template>
  <div v-if="!getSingleTypeLoader">
    <Subheader />
    <h3
      class="type-banner uppercase text-center p-10"
      :style="{background: getTypeBackground(type)}"
    >{{type}}</h3>
    
    <div class="type-pokemons wrapper py-20">
      <div
        class="type-pokemon d-flex flex-between py-25 border-bottom border-light"
        v-for="(single, i ) in getPokemonsByType"
        :key="i"
        v-show="getIdFromUrl(single.pokemon.url) < 1000"
        @click="$router.push('/pokemon/' + single.pokemon.name)"
      >
        <p class="pokemon-id w-60">#{{getIdFromUrl(single.pokemon.url)}}</p>
        <h3 class="capitalize flex-2 mx-35 text-shorten">{{single.pokemon.name}}</h3>
        <p>&gt;</p>
      </div>
    </div>
  </div>
  <div v-else class="single-type-loader text-center my-25 py-25">
    <Spinner />
  </div>
</template>

<script>
import Spinner from "../Loader/Spinner";
import Subheader from "../Navigation/Subheader";

import { mapActions, mapGetters } from "vuex";

export default {
  components: { Subheader, Spinner },
  data() {
    return {
      type: this.$route.params.name
    };
  },
  computed: {
    ...mapGetters(["getPokemonsByType", "getSingleTypeLoader"])
  },
  methods: {
    ...mapActions(["fetchPokemonsByType"])
  },
  created() {
    this.fetchPokemonsByType(this.type);
  }
};
</script>

<style scoped>
.type-banner,
.type-pokemon {
  font-size: 25px;
}

.type-banner {
  font-weight: 400;
  color: #ffffff;
}

.pokemon-id {
  color: #aaaaaa;
}
</style>