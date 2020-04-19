<template>
  <div class="wrapper search-wrapper">
    <div class="search-desktop py-25">
      <div class="search-box d-flex align-center py-10">
        <v-icon class="search-icon" name="search" scale="1.3" @click="searchPokemons(search)" />
        <input
          v-model="search"
          class="mx-20"
          v-on:keyup.enter="searchPokemons(search)"
          type="text"
          placeholder="SEARCH"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      search: ""
    };
  },
  computed: {},
  methods: {
    ...mapActions(["filterPages"]),

    searchPokemons(search) {
      this.$store.state.Pokedex.searchedPokemons = this.$store.state.Pokedex.allPokemons.filter(
        pokemon => {
          return pokemon.name.includes(search.toLowerCase());
        }
      );
      let count = this.$store.state.Pokedex.searchedPokemons.length;
      this.filterPages(count);
      this.$store.state.Pokedex.filteredPokemons = this.$store.state.Pokedex.searchedPokemons.slice(
        0,
        8
      );

      let query = this.search ? `?search=${this.search}`: '';

      if (!query && this.$route.fullPath === "/") return;

      this.$router.push(`/${query}`);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/variables.scss";
@import "../../../scss/mixin.scss";

.search-wrapper {
  background: #ffffff;
  width: 100%;
  display: none;

  @include md {
    display: block;
  }

  .search-desktop {
    color: $lightenSecondary;
    padding-left: 55px;
    padding-right: 55px;

    @include lg {
      padding-left: 70px;
      padding-right: 70px;
    }

    @include xl {
      margin-left: 200px;
      padding-left: 0;
      padding-right: 0;
    }

    @include rwd(1301) {
      margin-left: 240px;
    }

    .search-box {
      width: 400px;
      max-width: 100%;
      border-bottom: 1px solid $lightenSecondary;

      @include xl {
        margin: 0;
      }

      .search-icon {
        cursor: pointer;
      }

      input {
        width: 100%;
        font-size: 23px;
        border: none;
        outline: none;
      }
    }
  }
}
</style>