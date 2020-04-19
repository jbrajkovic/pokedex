<template>
  <InfoBox title="Abilities">
    <div slot="content" class="abilities-box d-flex flex-around">
      <div class="ability text-center mx-25" v-for="(ability, i) in abilities" :key="i">
        <h3 class="green capitalize">{{ability.name}}</h3>
        <p class="mt-3">{{ability.description}}</p>
      </div>
    </div>
  </InfoBox>
</template>

<script>
import InfoBox from "../InfoBox/InfoBox";

export default {
  components: { InfoBox },
  props: ["abilities"],
  data() {
    return {};
  },
  created() {}
};
</script>

<style lang="scss" scoped>
@import "../../../scss/mixin.scss";

.abilities-box {
  flex-direction: column;

  @include md {
    flex-direction: row;
  }

  .ability {
    padding: 10px 0;

    @include md {
      padding: 0;
    }
  }
}
</style>