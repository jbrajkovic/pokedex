<template>
  <div id="app">
    <Navigation />
    <transition name="fade" mode="out-in">
      <keep-alive include="Home, TypeDex, SingleType, Favourites">
        <router-view :key="$route.fullPath"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Navigation from "@/components/Mobile/Navigation/TopBar.vue";
export default {
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
