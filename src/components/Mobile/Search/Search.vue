<template>
  <div class="search wrapper">
    <div class="search-top d-flex flex-between">
      <h1 class="capitalize">Search Pokemons</h1>
      <v-icon name="regular/times-circle" scale="2.2" @click="$emit('closeSearch')" />
    </div>

    <div class="search-input py-25 border-bottom border-light">
      <input v-model="search" class="p-15" type="text" placeholder="Search" />
    </div>

    <div class="search-results my-20">
      <p v-if="!startSearch" class="search-message text-center">{{searchMessage}}</p>
      <p v-if="!searchFilter.length && startSearch" class="search-message text-center">No Result</p>

      <ResultBox
        v-for="(pokemon, i) in searchFilter"
        :key="i"
        :pokemon="pokemon"
        @searchPokemon="searchPokemon($event)"
      />
    </div>
  </div>
</template>

<script>
import ResultBox from "./SearchResultBox";

import { mapActions, mapGetters } from "vuex";

export default {
  components: { ResultBox },
  data() {
    return {
      search: "",
      result: [],
      searchMessage: "Type at least 3 characters"
    };
  },
  computed: {
    ...mapGetters(["getAllPokemons"]),

    startSearch() {
      return this.search.length >= 3;
    },

    searchFilter() {
      if (!this.startSearch) return [];

      return this.getAllPokemons.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  methods: {
    ...mapActions(["fetchAllPokemons"]),

    searchPokemon(pokemon) {
      this.$emit("closeSearch");
      
      if (pokemon == this.$route.params.name) return;

      this.$router.push("/pokemon/" + pokemon);
    }
  },

  created() {
    if (!this.getAllPokemons.length) {
      this.fetchAllPokemons();
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #111111;
  z-index: 5;
  padding: 20px;
  text-align: center;
  color: #ffffff;
  overflow-y: auto;

  &-top h1 {
    font-size: 28px;
  }

  &-input input {
    width: 100%;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    outline: none;
  }
}
</style>

