<template>
  <div class="topbar py-25">
    <div class="wrapper d-flex flex-between">
      <v-icon name="bars" scale="1.5" @click="showSideMenu = !showSideMenu" />
      <img src="../../../assets/logo-black.png" alt="logo-black"/>
      <v-icon name="search" scale="1.5" @click="showSearch = !showSearch" />
    </div>
    <transition name="slide">
      <Sidemenu v-show="showSideMenu" />
    </transition>

    <div v-show="showSideMenu" class="sidemenu-backdrop" @click.self="showSideMenu = false"></div>

    <transition name="slide-up">
      <Search v-if="showSearch" @closeSearch="showSearch = false" />
    </transition>
  </div>
</template>

<script>
import Search from "../Search/Search";
import Sidemenu from "./Sidemenu";

export default {
  name: "TopBar",
  components: {
    Search,
    Sidemenu
  },
  data() {
    return {
      showSearch: false,
      showSideMenu: false
    };
  },
  watch: {
    $route() {
      this.showSearch = false;
      this.showSideMenu = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/variables";
@import "../../../scss/transition";

.topbar {
  background: $primary-color;

  img {
    width: 100px;
  }

  .sidemenu-backdrop {
    background-color: rgba(19, 15, 64, 0.4);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
  }
}
</style>