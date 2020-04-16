<template>
  <InfoBox :typeCol="typeCol">
    <h3 slot="title">Info</h3>
    <div slot="content" class="info-box p-25">
        <div class="info-item" v-for="(value, key) in info" :key="key">
            <p class="capitalize mb-5">{{key.split('_').join(' ')}}</p>
            <p class="green">{{value}}</p>
        </div>
    </div>
  </InfoBox>
</template>

<script>
import InfoBox from "./InfoBox";

export default {
  components: { InfoBox },
  props: ["typeCol", "info"],
  data() {
    return {
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../../../scss/variables.scss';

.info-box {
    background: $primary-color;
    border-radius: 15px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
}


</style>