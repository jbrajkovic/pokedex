<template>
  <InfoBox title="Evolution">
    <div slot="content" class="abilities-box d-flex flex-center">
      <div
        class="evolution-pokemon d-flex flex-center"
        v-for="(pokemon,i) in evolutionPokemons"
        :key="i"
      >
        <div class="text-center">
          <img class="evolution-image w-50 mx-10" :src="fetchImg(pokemon.id)" :alt="pokemon.name" />
          <small class="capitalize d-block">{{pokemon.name}}</small>
        </div>
        <v-icon v-if="i !== evolutionPokemons.length - 1" name="long-arrow-alt-right" scale="2" />
      </div>
    </div>
  </InfoBox>
</template>

<script>
import InfoBox from "../InfoBox/InfoBox";

export default {
  components: { InfoBox },
  props: ["evolution"],
  data() {
    return {
      evolutionPokemons: []
    };
  },
  methods: {
    formatEvolution() {
      let currentChain = this.evolution;
      let formatedSpecies = this.formatSpecies(currentChain.species);
      this.evolutionPokemons.push(formatedSpecies);

      while (currentChain.evolves_to.length) {
        currentChain = currentChain.evolves_to[0];
        let formatedSpecies = this.formatSpecies(currentChain.species);
        this.evolutionPokemons.push(formatedSpecies);
      }
    },
    formatSpecies(species) {
      const { name, url } = species;

      return {
        name,
        id: this.getIdFromSpecies(url)
      };
    }
  },
  mounted() {
    this.formatEvolution();
  }
};
</script>

<style lang="scss" scoped>
@import '../../../scss/mixin.scss';

.evolution-image {
    width: 50px;

    @include sm {
        width: 70px;
    }

    @include md {
        width: 100px
    }

    @include lg {
        width: 120px
    }

    @include xl {
        width: 140px
    }
}

</style>