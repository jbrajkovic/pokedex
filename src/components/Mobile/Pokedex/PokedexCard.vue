<template>
  <div
    class="pokedex-card d-flex flex-between border-bottom border-light py-20"
    @click="$router.push('/pokemon/' + pokemon.name)"
  >
    <img
      class="pokedex-card-img p-5 w-60 border radius-50 border-light"
      :src="imgUrl"
      :alt="pokemon.name"
    />
    <div class="pokedex-card-info flex-2 mx-25 overflow-hidden">
      <p class="pokedex-card-id">#{{id}}</p>
      <h2 class="pokedex-card-name capitalize text-shorten fw-300">{{pokemon.name}}</h2>
    </div>
    <v-icon
      v-if="!isFavourite(id)"
      name="regular/star"
      scale="2.2"
      @click.stop="toggleFavourite(cardPokemon)"
    />
    <v-icon v-else name="star" color="#fbcd3c" scale="2.2" @click.stop="toggleFavourite(cardPokemon)" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PokedexCard",
  props: ["pokemon"],
  computed: {
    ...mapGetters(["getFavourites"]),

    cardPokemon() {
      return {
        name: this.pokemon.name,
        id: this.id
      };
    },

    imgUrl() {
      return this.fetchImg(this.id);
    },

    id() {
      return this.getIdFromUrl(this.pokemon.url);
    }
  },
  methods: {
    ...mapActions(["addToFavourites", "removeFromFavourites"])
  }
};
</script>

<style lang="scss" scoped>
.pokedex-card {
  &-name {
    font-size: 30px;
  }
}
</style>