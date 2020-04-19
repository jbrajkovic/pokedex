<template>
  <div class="pagination text-center">
    <div class="pagination-pages d-flex flex-center">
      <button class="page page-first" :disabled="getActivePage === 1" @click="first()">&lt;&lt;</button>
      <button class="page page-previous" :disabled="getActivePage === 1" @click="prev()">&lt;</button>
      <button
        class="page page-number"
        v-for="page in getVisiblePages"
        :key="page"
        :class="{active: page === getActivePage}"
        @click="filterPage(page)"
      >{{page}}</button>
      <button class="page page-next" :disabled="getActivePage === getPageCount" @click="next()">&gt;</button>
      <button
        class="page page-last"
        :disabled="getActivePage === getPageCount"
        @click="last()"
      >&gt;&gt;</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "getActivePage",
      "getStartPage",
      "getPageCount",
      "getVisiblePages",
      "getSearchedPokemons"
    ]),

    lastVisible() {
      return this.getStartPage + 3 === this.getActivePage;
    }
  },
  methods: {
    ...mapActions([
      "setActivePage",
      "fetchFirst",
      "fetchLast",
      "setVisiblePages",
      "setStartPage",
      "filterPages"
    ]),

    filterPage(page) {
      window.scrollTo(0, 0);
      this.setActivePage(page);

      this.filter();
    },

    first() {
      window.scrollTo(0, 0);
      this.fetchFirst();

      this.$store.state.Pokedex.filteredPokemons = this.$store.state.Pokedex.searchedPokemons.slice(
        0,
        8
      );
    },

    last() {
      window.scrollTo(0, 0);
      this.fetchLast();

      this.$store.state.Pokedex.filteredPokemons = this.$store.state.Pokedex.searchedPokemons.slice(
        -7
      );
    },

    next() {
      window.scrollTo(0, 0);
      if (this.lastVisible) {
        this.setStartPage(this.getStartPage + 1);
      }

      this.setActivePage(this.getActivePage + 1);
      this.setVisiblePages();
      this.filter();
    },

    prev() {
      window.scrollTo(0, 0);
      if (this.getActivePage === this.getStartPage + 1) {
        this.setStartPage(this.getStartPage - 1);
      }
      this.setActivePage(this.getActivePage - 1);
      this.setVisiblePages();
      this.filter();
    },

    filter() {
      const offset = this.getActivePage * 8 - 8;

      this.$store.state.Pokedex.filteredPokemons = this.$store.state.Pokedex.searchedPokemons.slice(
        offset,
        offset + 8
      );
    }
  },
  created() {
    this.filterPages();
  }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/mixin.scss";
@import "../../../scss/variables.scss";

.pagination {
  padding: 5px 0 20px;
  position: absolute;
  bottom: 25px;
  left: 0;
  right: 0;
  
  @include xl {
    margin-left: 200px;
  }

  @include rwd(1301) {
    margin-left: 240px;
  }

  .pagination-pages {
    .page {
      padding: 10px;
      background: #ffffff;
      border: 1px solid $lightenSecondary;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      outline: none;
      cursor: pointer;
    }

    .active {
      width: 55px;
      height: 55px;
    }
  }
}
</style>