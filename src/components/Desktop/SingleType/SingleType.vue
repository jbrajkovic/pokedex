<template>
  <div>
    <div class="single-type-desktop wrapper">
      <div class="single-type-list-desktop">
        <InfoBox v-if="!getSingleTypeLoader" :title="type.toUpperCase()" :color="getTypeBackground(type)">
          <div slot="content">
            <div
              class="type-pokemon d-flex flex-between py-25 border-bottom border-light"
              v-for="(single, i ) in getPokemonsByType"
              :key="i"
              v-show="getIdFromUrl(single.pokemon.url) < 1000"
            >
              <p class="type-pokemon-id">#{{getIdFromUrl(single.pokemon.url)}}</p>
              <h3 class="capitalize flex-2 mx-35 text-shorten">{{single.pokemon.name}}</h3>
              <p class="type-pokemon-link" @click="$router.push('/pokemon/' + single.pokemon.name)">
                <span class="link-arrow">&gt;</span>
                <span class="link-text">view pokemon</span>
              </p>
            </div>
          </div>
        </InfoBox>
        <div v-else>
          <Spinner />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from "../Loader/LoaderDesktop";
import InfoBox from "../InfoBox/InfoBox";

import { mapActions, mapGetters } from "vuex";

export default {
  components: { InfoBox, Spinner },
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

<style lang="scss" scoped>
@import "../../../scss/mixin.scss";

.single-type-list-desktop {
  padding: 30px 0;

  @include xl {
    margin-left: 200px;
  }

  @include rwd(1301) {
    margin-left: 240px;
  }

  .type-pokemon {
    font-size: 25px;

    &:last-child {
      border-bottom: none;
    }

    &-link,
    &-id {
      color: #aaaaaa;
    }

    &-id {
      width: 30px;

      @include md {
        width: 170px;
      }
    }

    &-link {
      cursor: pointer;
      .link-text {
        display: none;

        @include md {
          display: inline-block;
          width: 170px;
          text-align: right;
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