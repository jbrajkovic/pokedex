import { insertIntoSortedArray } from "../../helpers";

const state = {
  favourites: [],
};

const getters = {
  getFavourites: (state) => state.favourites,
};

const mutations = {
  STORE_FAVOURITE: (state, data) =>
    insertIntoSortedArray(state.favourites, data, "id"),

  REMOVE_FAVOURITE: (state, id) => {
    let pokemonIndex = state.favourites.findIndex(
      (pokemon) => pokemon.id === id
    );

    state.favourites.splice(pokemonIndex, 1);
  },
};

const actions = {
  addToFavourites({ commit }, pokemon) {
    let { id, name } = pokemon;

    commit("STORE_FAVOURITE", { id, name });
  },
  removeFromFavourites({ commit }, pokemon) {
    commit("REMOVE_FAVOURITE", pokemon.id);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
