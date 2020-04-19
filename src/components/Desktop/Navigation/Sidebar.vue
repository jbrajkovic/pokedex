<template>
  <div class="sidebar p-20">
    <div class="sidebar-logo p-10">
      <img src="../../../assets/logo-yellow.png" alt="logo-yellow" />
    </div>
    <ul class="sidebar-list my-25 py-25 border-top border-bottom">
      <li class="sidebar-list-item py-25">
        <router-link to="/" class="d-flex align-center">
          <img class="w-25 pokedex-icon" src="../../../assets/pokeball.png" alt="pokeball" />
          <span class="ml-20">Pokedex</span>
        </router-link>
      </li>
      <li class="sidebar-list-item py-25">
        <router-link to="/typedex" class="d-flex align-center">
          <v-icon name="tag" scale="1.5" />
          <span class="ml-20">TypeDex</span>
        </router-link>
      </li>
      <li class="sidebar-list-item py-25">
        <router-link to="/favourites" class="d-flex align-center">
          <v-icon name="star" scale="1.5" />
          <span class="ml-20">Favourites</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../../scss/variables.scss";
@import "../../../scss/mixin.scss";

a {
  color: #ffffff;
}

.pokedex-icon {
  background: #ffffff;
  border-radius: 50%;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 200px;
  max-width: 85%;
  background: $secondary-color;
  font-size: 23px;
  z-index: 99;
  color: #ffffff;
  overflow-y: auto;

  @include rwd(1301) {
    width: 240px;
  }

  &-logo {
    img {
      width: 100%;
    }
  }

  &-list {
    border-color: #ffffff;

    &-item a {
      transition: all 0.2s ease;

      &:hover {
        color: $lightenSecondary;
      }

      &:hover .pokedex-icon {
        background: $lightenSecondary;
      }
    }
  }
}
</style>