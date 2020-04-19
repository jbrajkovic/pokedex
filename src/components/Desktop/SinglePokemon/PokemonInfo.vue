<template>
  <InfoBox title="Info">
    <div slot="content" class="pokemon-info">
      <div class="info-item" v-for="(value, key) in info" :key="key">
        <p class="capitalize d-flex flex-between">
          {{key.split('_').join(' ')}}:
          <span class="green">{{value}}</span>
        </p>
      </div>
    </div>
  </InfoBox>
</template>

<script>
import InfoBox from "../InfoBox/InfoBox";

export default {
  components: { InfoBox },
  props: ["info"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../../../scss/mixin.scss";

.pokemon-info {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(1, 1fr);

  @include sm {
    grid-gap: 5px 20px;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>