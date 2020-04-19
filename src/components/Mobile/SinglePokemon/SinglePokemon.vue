<template>
  <div v-if="!getSinglePokemonLoader" class="single-pokemon wrapper">
    <div class="single-pokemon-top-options py-20 d-flex flex-between">
      <v-icon name="reply" scale="2" @click="$router.go(-1)" />
      <p class="single-pokemon-id">#{{getSinglePokemonId}}</p>
      <v-icon
        name="star"
        :color="!isFavourite(singlePokemon.id) ? '': '#fbcd3c'"
        scale="2.3"
        @click="toggleFavourite(singlePokemon)"
      />
    </div>

    <div class="single-pokemon-top-navigation mb-20 d-flex flex-between">
      <small :class="{hidden: getSinglePokemonId === 1}" class="w-70 text-left" @click="previous(getSinglePokemonId)">&lt;&lt; Prev</small>
      <h2 class="single-pokemon-name capitalize text-center">{{getSinglePokemonName}}</h2>
      <small :class="{hidden: getSinglePokemonId === 807}" class="w-70 text-right" @click="next(getSinglePokemonId)">Next &gt;&gt;</small>
    </div>

    <div class="single-pokemon-image p-20 d-flex flex-center" :style="{background: typeColor}">
      <img :src="pokemonImage" class="radius-50 p-10" :alt="getSinglePokemonName" />
    </div>

    <div class="single-pokemon-types d-flex flex-center p-20">
      <div
        class="single-pokemon-type-box uppercase py-3 px-15 mx-5"
        :style="{background: getTypeBackground(type.name)}"
        v-for="(type, i) in types"
        :key="i"
      >
        <span>{{type.name}}</span>
      </div>
    </div>

    <div class="single-pokemon-info">
      <PokemonInfo :typeCol="typeColor" :info="getPokemonInfo" />
    </div>

    <div class="single-pokemon-abilities">
      <PokemonAbilities :typeCol="typeColor" :abilities="getAbilities" />
    </div>

    <div class="single-pokemon-moves">
      <PokemonMoves :typeCol="typeColor" :moves="getSinglePokemonMoves" />
    </div>

    <div class="single-pokemon-evolution">
      <PokemonEvolution :typeCol="typeColor" :evolution="getEvolutionChain" />
    </div>
  </div>
  <div v-else class="single-pokemon-loader text-center my-25 py-25">
    <Spinner />
  </div>
</template>

<script>
import Spinner from "../Loader/Spinner";
import PokemonInfo from "./PokemonInfo";
import PokemonMoves from "./PokemonMoves";
import PokemonAbilities from "./PokemonAbilities";
import PokemonEvolution from "./PokemonEvolution";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "SinglePokemon",
  components: {
    PokemonInfo,
    PokemonAbilities,
    PokemonMoves,
    PokemonEvolution,
    Spinner
  },
  data() {
    return {
      info: {},
      pokemon: {},
      loading: true,
      pokemonImg: "",
      name: this.$route.params.name
    };
  },
  computed: {
    ...mapGetters([
      "getPokemons",
      "getAbilities",
      "getFavourites",
      "getPokemonInfo",
      "getEvolutionChain",
      "getSinglePokemonId",
      "getSinglePokemonName",
      "getSinglePokemonTypes",
      "getSinglePokemonMoves",
      "getSinglePokemonLoader"
    ]),

    singlePokemon() {
      return {
        name: this.getSinglePokemonName,
        id: this.getSinglePokemonId
      };
    },

    pokemonImage() {
      return this.fetchImg(this.getSinglePokemonId);
    },

    typeColor() {
      return this.getTypeBackground(this.types[0].name);
    },

    types() {
      return this.getSinglePokemonTypes.map(type => type.type).reverse();
    }
  },
  methods: {
    ...mapActions([
      "addToFavourites",
      "fetchSinglePokemon",
      "removeFromFavourites"
    ]),

    previous(id) {
      if (id === 1) return false;
      this.$router.push({ name: "SinglePokemon", params: { name: id - 1 } });
    },
    next(id) {
      if(id === 807) return false
      this.$router.push({ name: "SinglePokemon", params: { name: id + 1 } });
    }
  },
  created() {
    this.fetchSinglePokemon(this.name);
  },
  watch: {
    $route(to) {
      this.name = to.params.name;
      this.fetchSinglePokemon(this.name);
    }
  }
};
</script>

<style lang="scss" scoped>
.single-pokemon {
  &-image {
    width: 100vw;
    margin-left: calc(100vw - (100vw + 5vw));
    background: green;

    img {
      width: 45%;
      background: #ffffff;
    }
  }

  &-name,
  &-id {
    font-size: 30px;
  }

  &-type-box {
    padding: 3px 9px 6px;
    border-radius: 25px;
    background: chocolate;
    color: #ffffff;
  }
}
</style>