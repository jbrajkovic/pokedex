<template>
  <div class="sidemenu">
    <div class="sidemenu-logo p-25 border-bottom">
      <img src="../../../assets/logo-black.png" alt="logo-black" />
    </div>
    <ul class="sidemenu-list mx-25 py-25 border-bottom">
      <li class="sidemenu-list-item py-25">
        <router-link to="/" class="d-flex align-center">
          <img src="../../../assets/pokeball.png" class="w-25" alt="pokeball" />
          <span class="ml-20">Pokedex</span>
        </router-link>
      </li>
      <li class="sidemenu-list-item py-25">
        <router-link to="/typedex" class="d-flex align-center">
          <v-icon name="tag" scale="1.5" />
          <span class="ml-20">TypeDex</span>
        </router-link>
      </li>
      <li class="sidemenu-list-item py-25">
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
@import "../../../scss/transition";

.sidemenu {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 300px;
  max-width: 85%;
  background: #ffffff;
  font-size: 23px;
  z-index: 99;
  overflow-y: auto;

  &-logo {
    img {
      width: 100%;
    }
  }
}
</style>