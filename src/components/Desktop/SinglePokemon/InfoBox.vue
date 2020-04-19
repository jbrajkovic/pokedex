<template>
  <div class="info-box">
    <div class="info-box-header bg-primary" :style="{background: color}">
      <h3 class="capitalize">{{title}}</h3>
    </div>
    <div class="info-box-content">content</div>
  </div>
</template>

<script>
export default {
  props: ["title", "color"]
};
</script>

<style lang="scss" scoped>
.info-box {
  width: 100%;
  min-height: 150px;
  background: #ffffff;

  .info-box-header {
    padding: 10px 20px;
    color: #ffffff;
  }

  .info-box-content {
    padding: 20px;
  }
}
</style>