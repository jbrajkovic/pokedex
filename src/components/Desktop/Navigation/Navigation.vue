<template>
  <div class="navigation-desktop">
    <TopBarDesktop class="top" />
    <Sidebar class="side" />
  </div>
</template>

<script>
import TopBarDesktop from "./TopBarDesktop";
import Sidebar from "./Sidebar";

export default {
  components: {
    TopBarDesktop,
    Sidebar
  }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/mixin.scss";

.top {
  @include xl {
    display: none;
  }
}

.side {
  display: none;

  @include xl {
    display: block;
  }
}
</style>