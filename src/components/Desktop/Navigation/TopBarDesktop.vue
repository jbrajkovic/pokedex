<template>
  <div class="topbar-desktop py-25">
    <div class="wrapper d-flex flex-between">
      <v-icon class="menu-bar" name="bars" scale="1.5" @click="showSideMenu = !showSideMenu" />
      <img src="../../../assets/logo-yellow.png" alt="logo-yellow" />

      <nav class="nav">
        <ul class="d-flex">
          <li class="mx-20 uppercase">
            <router-link to="/">Pokedex</router-link>
          </li>
          <li class="mx-20 uppercase">
            <router-link to="/typedex">TypeDex</router-link>
          </li>
          <li class="mx-20 uppercase">
            <router-link to="/favourites">Favourites</router-link>
          </li>
        </ul>
      </nav>

      <v-icon class="search-icon" name="search" scale="1.5" @click="showSearch = !showSearch" />
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
import Sidemenu from "../../Mobile/Navigation/Sidemenu";
import Search from "../../Mobile/Search/Search";

export default {
  name: "TopBarDesktop",
  components: {
    Sidemenu,
    Search
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
@import "../../../scss/mixin";
@import "../../../scss/transition";

a {
  color: #ffffff;
}

.topbar-desktop {
  background: $secondary-color;
  color: #ffffff;

  .menu-bar {
    @include md {
      display: none;
    }
  }

  img {
    width: 100px;
  }

  .nav {
    display: none;

    @include md {
      display: inline-block;
    }

    a:hover {
      color: $lightenSecondary;
    }
  }

  .search-icon {
    cursor: pointer;
    @include md {
      display: none;
    }
  }

  .sidemenu-backdrop {
    background-color: rgba(19, 15, 64, 0.4);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;
  }
}
</style>