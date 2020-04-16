<template>
  <InfoBox :typeCol="typeCol">
    <h3 slot="title">Moves</h3>
    <div slot="content" class="moves-box">
        <div class="move" v-for="(move,i) in moves" :key="i">
          <h3 class="green text-center capitalize">{{move.name}}</h3>
          <div class="move-info-container d-flex flex-between">
            <div class="text-center">
              <p>Accuracy</p>
              <p>{{move.accuracy || 0}}</p>
            </div>
            <div class="text-center">
              <p>Power</p>
              <p>{{move.power || 0}}</p>
            </div>
          </div>
        </div>
    </div>
  </InfoBox>
</template>

<script>
import InfoBox from "./InfoBox";

export default {
  components: { InfoBox },
  props: ["typeCol", "moves"],
  data() {
    return {
    };
  },

};
</script>

<style lang="scss" scoped>
@import '../../../scss/variables.scss';

.moves-box {
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr 1fr;


}
</style>