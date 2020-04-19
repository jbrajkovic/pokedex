<template>
  <div id="app" class="app" :class="{'bg-light': !isMobile}">
    <!-- MOBILE -->
    <div v-if="isMobile">
      <Navigation />

      <transition name="fade" mode="out-in">
        <keep-alive include="Home, TypeDex, SingleType, Favourites">
          <router-view :key="$route.fullPath"></router-view>
        </keep-alive>
      </transition>
    </div>

    <!-- DESKTOP -->
    <div v-else>
      <NavigationDesktop />
      <SearchDesktop />
      <transition name="fade" mode="out-in">
        <keep-alive include="Home, TypeDex, SingleType, Favourites">
          <router-view :key="$route.fullPath"></router-view>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Mobile/Navigation/TopBar.vue";
import NavigationDesktop from "@/components/Desktop/Navigation/Navigation.vue";
import SearchDesktop from "@/components/Desktop/Search/Search.vue";

export default {
  components: {
    Navigation,
    NavigationDesktop,
    SearchDesktop
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";

.app {
  min-height: 100vh;
  position: relative;
}

.bg-light {
  background: #eeeeee;
}
</style>
