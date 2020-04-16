<template>
  <div class="box">
    <div class="box-name" :style="{background: typeCol}">
      <slot name="title"></slot>
    </div>
    <div class="box-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["typeCol"]
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  min-height: 150px;
  background: #ffffff;
}

.box-name {
  padding: 5px 40px;
  background: green;
  color: #ffffff;
  width: 60%;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  text-align: center;
  margin-left: calc(100vw - (100vw + 5vw));
}

.box-content {
  padding: 25px 0;
}
</style>

