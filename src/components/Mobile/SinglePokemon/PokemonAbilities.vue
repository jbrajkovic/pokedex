<template>
  <InfoBox :typeCol="typeCol">
    <h3 slot="title">Abilities</h3>
    <div slot="content" class="abilities-box m-20">
      <div
        class="ability text-center p-20"
        :class="{'border-bottom': i !== abilities.length-1}"
        v-for="(ability, i) in abilities"
        :key="i"
      >
        <h3 class="green capitalize">{{ability.name}}</h3>
        <p class="mt-3">{{ability.description}}</p>
      </div>
    </div>
  </InfoBox>
</template>

<script>
import InfoBox from "./InfoBox";

export default {
  components: { InfoBox },
  props: ["typeCol", "abilities"],
  data() {
    return {};
  },
  created() {}
};
</script>

<style lang="scss" scoped>
@import "../../../scss/variables.scss";

.abilities-box {
  margin: 0 30px;

  .ability {
      border-color: lightgreen;
  }
}
</style>