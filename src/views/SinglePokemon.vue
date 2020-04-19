<template>
  <div>
    <SinglePokemon v-if="isMobile" />
    <SinglePokemonDesktop  v-else/>
  </div>
</template>

<script>
import SinglePokemon from '../components/Mobile/SinglePokemon/SinglePokemon'
import SinglePokemonDesktop from '../components/Desktop/SinglePokemon/SinglePokemonDesktop'

export default {
    components: {
        SinglePokemon,
        SinglePokemonDesktop
    }
};
</script>

<style>
</style>