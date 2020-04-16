<template>
  <div v-if="!getTypesLoader">
    <Subheader :title="'TypeDex'" />
    <div class="types wrapper p-20">
      <TypeBox v-for="(type, i) in getTypes" :key="i" :type="type.name" />
    </div>
  </div>

  <div v-else class="typedex-loader text-center my-25 py-25">
    <Spinner />
  </div>
</template>

<script>
import TypeBox from "./TypeBox";
import Spinner from "../Loader/Spinner";
import Subheader from "../../../components/Mobile/Navigation/Subheader";

import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    TypeBox,
    Subheader,
    Spinner
  },
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
.types {
  display: grid;
  grid-gap: 15px;
  grid-row-gap: 30px;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
}
</style>