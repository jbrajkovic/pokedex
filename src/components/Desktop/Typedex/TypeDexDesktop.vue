<template>
  <div>
    <div v-if="!getTypesLoader" class="typedex-desktop wrapper">
      <div class="type-boxes-desktop">
        <TypeBox v-for="(type,i) in getTypes" :key="i" :type="type.name" />
      </div>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import TypeBox from "./TypeDexBox";
import Spinner from "../Loader/LoaderDesktop";

import { mapActions, mapGetters } from "vuex";

export default {
  components: { TypeBox, Spinner },
  computed: {
    ...mapGetters(["getTypes", "getTypesLoader"])
  },
  methods: {
    ...mapActions(["fetchTypes"])
  },
  created() {
    this.fetchTypes();
  }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/mixin.scss";

.type-boxes-desktop {
  display: grid;
  gap: 30px 120px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  padding: 30px 0;

  @include xl {
    grid-template-columns: repeat(3, 1fr);
    margin-left: 200px;
  }

  @include rwd(1301) {
    margin-left: 240px;
  }
}
</style>