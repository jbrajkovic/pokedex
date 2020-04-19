<template>
  <InfoBox title="Moves">
    <h3 slot="title">Moves</h3>
    <div slot="content" class="moves-box d-flex flex-around">
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
import InfoBox from "../InfoBox/InfoBox";

export default {
  components: { InfoBox },
  props: ["moves"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/mixin.scss";

.moves-box {
  flex-direction: column;

  @include md {
    flex-direction: row;
  }

  .move {
    width: 150px;
    padding: 10px 0;
    margin: 0 auto;

    @include md {
      padding: 0;
    }
  }
}
</style>