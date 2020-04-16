<template>
  <div
    class="search-result-box d-flex flex-between my-3 p-20"
    @click="$emit('searchPokemon', id)"
  >
    <v-icon class="w-25 hidden" name="long-arrow-alt-right" scale="1" />
    <h3 class="uppercase flex-2 mx-20">{{pokemon.name}}</h3>
    <v-icon class="w-25" name="long-arrow-alt-right" scale="1" />
  </div>
</template>

<script>
export default {
  props: ["pokemon"],
  computed: {
    id() {
      return this.getIdFromUrl(this.pokemon.url);
    }
  }
};
</script>

<style scoped>
.search-result-box {
  background: #ffffff;
  color: #111111;
}
</style>