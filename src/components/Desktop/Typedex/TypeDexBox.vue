<template>
  <div class="typedex-box d-flex bg-primary">
    <div
      class="typedex-box-title text-center uppercase p-20 flex-2"
      :style="{background: getTypeBackground(type)}"
    >{{type}}</div>
    <div
      class="typedex-box-navigation p-20"
      :style="{background: getTypeDarkenBackground(type)}"
      @click="$router.push(`/type/${type}`)"
    >&gt;</div>
  </div>
</template>

<script>
export default {
  props: ["type"]
};
</script>

<style lang="scss" scoped>
.typedex-box {
  color: #ffffff;

  &-navigation {
    background: lighten(orange, 15);
    cursor: pointer;
  }
}
</style>