<template>
  <div v-if="isMobile" class="favourites">
    <Favourites />
  </div>
  <div v-else>
    <FavouritesDesktop />
  </div>
</template>

<script>
import Favourites from "../components/Mobile/Favourites/Favourites";
import FavouritesDesktop from "../components/Desktop/Favourites/FavouritesDesktop";

export default {
  components: { Favourites, FavouritesDesktop },
};
</script>
