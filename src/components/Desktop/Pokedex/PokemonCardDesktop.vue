<template>
  <div class="pokemon-card-box d-flex flex-center">
    <div class="pokemon-card">
      <div
        v-if="!cardLoader"
        class="pokemon-card-content"
        :style="{background: getTypeBackground(mainType)}"
        @click="$router.push('/pokemon/' + pokemon.name)"
      >
        <div class="pokemon-card-header d-flex flex-center">#{{cardDetails.id}}</div>
        <div class="pokemon-card-body">
          <p class="card-name capitalize text-center text-shorten">{{pokemon.name}}</p>
          <div class="d-flex flex-center">
            <div class="pokemon-height">
              <p class="text-center mb-3">H</p>
              <p class="text-center">{{cardDetails.height}}</p>
            </div>
            <div class="pokemon-img mx-5">
              <img :src="fetchImg(cardDetails.id)" :alt="pokemon.name" />
            </div>
            <div class="pokemon-weight">
              <p class="text-center mb-3">W</p>
              <p class="text-center">{{cardDetails.weight}}</p>
            </div>
          </div>
        </div>
        <div class="pokemon-card-bottom d-flex flex-center">
          <div class="pokemon-experience">
            <p class="text-center">XP</p>
            <p class="text-center">{{cardDetails.base_experience}}</p>
          </div>
        </div>
      </div>
      <div v-else class="card-loader d-flex flex-center">
        <Spinner />
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from "../../Mobile/Loader/Spinner";
import { RepositoryFactory } from "../../../apiService/RepositoryFactory";

const PokemonsRepository = RepositoryFactory.get("pokemons");

export default {
  components: { Spinner },
  props: ["pokemon"],
  data() {
    return {
      cardDetails: {},
      cardLoader: true
    };
  },
  computed: {
    mainType() {
      return this.types[0].name;
    },

    types() {
      return this.cardDetails.types.map(type => type.type).reverse();
    }
  },
  methods: {
    async fetchPokemonForCard(pokemon) {
      const {
        data: { id, weight, height, base_experience, types }
      } = await PokemonsRepository.getPokemon(pokemon);

      this.cardDetails = { id, weight, height, base_experience, types };
      this.cardLoader = false;
    }
  },
  created() {
    this.fetchPokemonForCard(this.pokemon.name);
  },
  watch: {
    pokemon() {
      this.cardLoader = true;
      this.fetchPokemonForCard(this.pokemon.name);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/variables.scss";

.pokemon-card-box {
  width: $cardDiagonal;
  height: $cardDiagonal;
  margin: 0 auto;

  .pokemon-card {
    width: $pokemonCardWidth;
    height: $pokemonCardWidth;
    border: 1px solid #333333;
    border-radius: 8px;
    overflow: hidden;
    transform: rotate(-45deg);

    &-content {
      transform: rotate(45deg);
      width: 100%;
      height: $cardDiagonal;
      margin-top: $cardContentMarginFix;
      cursor: pointer;

      .pokemon-img img {
        width: calc(#{$cardBodySize} - 20px);
      }
    }

    &-header {
      width: 100%;
      height: $cardHeaderSize;
    }

    &-body {
      width: $cardDiagonal;
      height: $cardBodySize;
      background: #ffffff;
      margin-left: $cardContentMarginFix;

      .card-name {
        width: 100px;
        margin: 0 auto;
      }
    }

    &-bottom {
      width: 100%;
      height: $cardBottomSize;

      .pokemon-experience {
        margin-top: -15px;
      }
    }

    &-header,
    &-bottom {
      color: #ffffff;
    }
  }

  .card-loader {
    width: 100%;
    height: 100%;
    background: #ffffff;
  }
}
</style>