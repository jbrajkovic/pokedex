<template>
  <div v-if="true">
    <Subheader :title="'Favourites'" />
    <div v-if="getFavourites.length" class="favourite-pokemons wrapper py-20">
      <div
        class="favourite-pokemon d-flex flex-between py-25 border-bottom border-light"
        v-for="(pokemon, i ) in getFavourites"
        :key="i"
        @click="$router.push('/pokemon/' + pokemon.name)"
      >
        <v-icon name="star" color="#fbcd3c" scale="2" @click.stop="removeFavourite(pokemon)" />
        <h3 class="capitalize flex-2 mx-35 text-shorten">{{pokemon.name}}</h3>
        <p>&gt;</p>
      </div>
    </div>
    <div v-else class="empty-favourites wrapper py-20 text-center">
        <v-icon name="regular/star" scale="3.3"/>
        <p class="empty-message mt-10">You didn't choose your favourite pokemons</p>
      </div>
  </div>

  <div v-else>Loading...</div>
</template>

<script>
import Subheader from "../Navigation/Subheader";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Subheader
  },
  computed: {
    ...mapGetters(["getFavourites"])
  },
  methods: {
    ...mapActions(["removeFromFavourites"]),

    removeFavourite(pokemon) {
      if (confirm(`Delete ${pokemon.name} from favourites`)) {
        this.removeFromFavourites(pokemon);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.favourite-pokemon {
  font-size: 25px;
}
</style>