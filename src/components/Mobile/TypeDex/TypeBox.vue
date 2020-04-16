<template>
  <div
    class="type-box"
    :style="{background: getTypeBackground(type)}"
    @click="$router.push(`/type/${type}`)"
  >
    <span class="uppercase">{{type}}</span>
  </div>
</template>

<script>

export default {
  props: ["type"],
};
</script>


<style lang="scss" scoped>
.type-box {
  color: #fff;
  border-radius: 20px;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
}
</style>