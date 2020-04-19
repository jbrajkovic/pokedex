<template>
  <div class="single-pokemon">
    <div class="single-pokemon wrapper">
      <div v-if="!getSinglePokemonLoader" class="single-pokemon-content">
        <h1 class="pokemon-name capitalize">#{{getSinglePokemonId}} {{getSinglePokemonName}}</h1>
        <div class="pokemon-types d-flex flex-center">
          <div
            class="type mx-5"
            v-for="(type, i) in types"
            :key="i"
            :style="{background: getTypeBackground(type.name)}"
          >
            <span>{{type.name}}</span>
          </div>
        </div>
        <div class="pokemon-favourite text-right">
          <v-icon
            name="star"
            class="favourite-icon"
            :color="!isFavourite(singlePokemon.id) ? '': '#fbcd3c'"
            scale="3"
            @click="toggleFavourite(singlePokemon)"
          />
        </div>
        <div class="pokemon-image">
          <img :src="pokemonImage" :alt="getSinglePokemonName" />
        </div>
        <div class="pokemon-info">
          <PokemonInfo :info="getPokemonInfo" />
        </div>
        <div class="pokemon-abilities">
          <PokemonAbilities :abilities="getAbilities" />
        </div>
        <div class="pokemon-moves">
          <PokemonMoves :moves="getSinglePokemonMoves" />
        </div>
        <div class="pokemon-evolution">
          <PokemonEvolution :evolution="getEvolutionChain" />
        </div>
        <div class="previous-button" v-if="getSinglePokemonId > 1" @click="previous(getSinglePokemonId)">&lt;&lt; previous</div>
        <div class="next-button text-right" v-if="getSinglePokemonId < 807" @click="next(getSinglePokemonId)">next &gt;&gt;</div>
      </div>
      <div class="single-pokemon-loader" v-else>
        <Spinner />
      </div>
    </div>
  </div>
</template>

<script>
import PokemonInfo from "./PokemonInfo";
import PokemonMoves from "./PokemonMoves";
import PokemonEvolution from "./PokemonEvolution";
import PokemonAbilities from "./PokemonAbilities";
import Spinner from "../Loader/LoaderDesktop";

import { mapActions, mapGetters } from "vuex";

export default {
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

    mainType() {
      return this.types[0].name;
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
      if (id === 807) return false;
      this.$router.push({ name: "SinglePokemon", params: { name: id + 1 } });
    }
  },
  created() {
    this.fetchSinglePokemon(this.name);
  },
  watch: {
    $route(to) {
      this.name = to.params.name;
      console.log(this.name)
      this.fetchSinglePokemon(this.name);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/mixin.scss";

.single-pokemon-content, .single-pokemon-loader {
  @include xl {
    margin-left: 200px;
  }

  @include rwd(1301) {
    margin-left: 240px;
  }
}

.single-pokemon-content {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "name favourite"
    "image image"
    "types types"
    "prev next"
    "info  info"
    "abilities abilities"
    "moves moves"
    "evolution evolution";
  padding: 30px 0;

  @include md {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "name types favourite"
      "image info info"
      "abilities abilities abilities"
      "moves moves moves"
      "evolution evolution evolution"
      "prev . next";
  }

  @include xl {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "name types . favourite"
      "image info info ."
      "abilities abilities abilities abilities"
      "moves moves moves moves"
      "evolution evolution evolution evolution"
      "prev . . next";
  }

  .pokemon-name {
    grid-area: name;
  }

  .pokemon-types {
    grid-area: types;

    @include md {
      justify-content: flex-start;
    }

    .type {
      padding: 5px 12px;
      background: green;
      color: #fff;
      border-radius: 30px;
      text-transform: uppercase;
      font-weight: bold;
    }
  }

  .pokemon-favourite {
    grid-area: favourite;

    .favourite-icon {
      cursor: pointer;
    }
  }

  .pokemon-image {
    grid-area: image;

    width: 150px;
    height: 150px;
    background: #ffffff;
    margin: 0 auto;
    border-radius: 50%;
    padding: 3px;

    @include md {
      border-radius: 0;
      margin: 0;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .pokemon-info {
    grid-area: info;
  }

  .pokemon-abilities {
    grid-area: abilities;
  }

  .pokemon-moves {
    grid-area: moves;
  }

  .pokemon-evolution {
    grid-area: evolution;
  }

  .previous-button,
  .next-button {
    @include sm {
      padding: 10px;
      border: 1px solid #cccccc;
      background: #ffffff;
      text-align: center;
      border-radius: 3px;
      text-transform: capitalize;
      cursor: pointer;
    }
  }

  .previous-button {
    grid-area: prev;
  }

  .next-button {
    grid-area: next;
  }
}
</style>