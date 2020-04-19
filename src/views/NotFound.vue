<template>
  <div v-if="isMobile" class="not-found text-center m-25 p-25">
    <h1 class="my-10">ERROR 404!</h1>
    <p>Page Not Found</p>
  </div>
  <div v-else class="not-found-desktop text-center m-25 p-25">
    <h1 class="my-10">ERROR 404!</h1>
    <p>Page Not Found</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../scss/mixin.scss';

.not-found-desktop {
  @include xl {
    margin-left: 200px;
  }

  @include rwd(1301) {
    margin-left: 240px;
  }
}

</style>