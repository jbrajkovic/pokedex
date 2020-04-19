import { IMG_BASE_URL } from "./constants";
import { isMobile } from "mobile-device-detect";

export default {
  computed: {
    isMobile() {
      return isMobile;
    },
  },
  methods: {
    fetchImg(id) {
      if (!id) return false;

      if (id > 999) return false;

      if (id < 10) return IMG_BASE_URL + "00" + id + ".png";

      if (id < 100) return IMG_BASE_URL + "0" + id + ".png";

      return IMG_BASE_URL + id + ".png";
    },

    getIdFromUrl(url) {
      let idPart = url.split("https://pokeapi.co/api/v2/pokemon/")[1];

      return parseInt(idPart, 10);
    },

    getIdFromSpecies(url) {
      let idPart = url.split("https://pokeapi.co/api/v2/pokemon-species/")[1];

      return parseInt(idPart, 10);
    },

    getTypeBackground(type) {
      let typeColors = this.$store.state.Colors.typeColors;

      return typeColors[type]["color"];
    },

    getTypeDarkenBackground(type) {
      let typeColors = this.$store.state.Colors.typeColors;

      return typeColors[type]["darkColor"];
    },

    isFavourite(id) {
      return this.getFavourites.some((favourite) => {
        return favourite.id === id;
      });
    },

    toggleFavourite(pokemon) {
      this.isFavourite(pokemon.id)
        ? this.removeFromFavourites(pokemon)
        : this.addToFavourites(pokemon);
    },
  },
};
