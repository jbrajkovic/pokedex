<template>
  <div>
    <div class="favourites-desktop wrapper">
      <div class="favourite-list-desktop">
        <InfoBox title="FAVOURITES">
          <div slot="content" v-if="getFavourites.length">
            <div
              class="favourite-pokemon d-flex flex-between py-25 border-bottom border-light"
              v-for="(pokemon, i ) in getFavourites"
              :key="i"
            >
              <v-icon
                class="favourite-icon"
                name="star"
                color="#fbcd3c"
                scale="2"
                @click.stop="removeFavourite(pokemon)"
              />
              <p class="favourite-id mx-35 w-50">{{pokemon.id}}</p>
              <h3 class="capitalize flex-2 mx-35 text-shorten">{{pokemon.name}}</h3>
              <p class="favourite-link" @click="$router.push('/pokemon/' + pokemon.name)">
                <span class="link-arrow">&gt;</span>
                <span class="link-text">view pokemon</span>
              </p>
            </div>
          </div>
          <div v-else slot="content" class="empty-favourites wrapper py-20 text-center">
            <v-icon name="regular/star" scale="3.3" />
            <p class="empty-message mt-10">You didn't choose your favourite pokemons</p>
          </div>
        </InfoBox>
      </div>
    </div>
  </div>
</template>

<script>
import InfoBox from "../InfoBox/InfoBox";

import { mapActions, mapGetters } from "vuex";

export default {
  components: { InfoBox },
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
@import "../../../scss/mixin.scss";

.favourite-list-desktop {
  padding: 30px 0;

  @include xl {
    margin-left: 200px;
  }

  @include rwd(1301) {
    margin-left: 240px;
  }

  .favourite-pokemon {
    font-size: 25px;

    &:last-child {
      border-bottom: none;
    }

    .favourite-icon {
      cursor: pointer;
    }

    .favourite-link,
    .favourite-id {
      color: #aaaaaa;
    }

    .favourite-id {
      display: none;
      @include md {
        display: inline-block;
        width: 170px;
      }
    }

    .favourite-link {
      cursor: pointer;

      .link-text {
        display: none;

        @include md {
          display: inline-block;
          width: 170px;
        }
      }

      .link-arrow {
        @include md {
          display: none;
        }
      }
    }
  }
}
</style>