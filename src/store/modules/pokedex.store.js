import { RepositoryFactory } from "../../apiService/RepositoryFactory";

const PokemonsRepository = RepositoryFactory.get("pokemons");

const state = {
  limit: 8,
  offset: 0,
  pokemons: [],
  allPokemons: [],
  pokedexLoader: false,
  observerLoader: false,
  filteredPokemons: [],
  searchedPokemons: [],
  paginationLoader: false,
};

const getters = {
  getPokemons: (state) => state.pokemons,
  getAllPokemons: (state) => state.allPokemons,
  getPokedexLoader: (state) => state.pokedexLoader,
  getObserverLoader: (state) => state.observerLoader,
  getFilteredPokemons: (state) => state.filteredPokemons,
  getSearchedPokemons: (state) => state.searchedPokemons,
  getPaginationLoader: (state) => state.paginationLoader,
};

const actions = {
  async fetchPokemons({ commit, state }) {
    commit("TOGGLE_POKEDEX_LOADER", true);
    const { limit, offset } = state;
    const { data } = await PokemonsRepository.get(offset, limit);

    commit("STORE_POKEMONS", data.results);
    commit("TOGGLE_POKEDEX_LOADER");
  },

  async loadMore({ commit, state }) {
    commit("TOGGLE_OBSERVER_LOADER", true);
    const { limit, offset } = state;
    const { data } = await PokemonsRepository.get(offset, limit);

    commit("STORE_POKEMONS", data.results);
    commit("TOGGLE_OBSERVER_LOADER");
  },

  async fetchAllPokemons({ commit }) {
    const { data } = await PokemonsRepository.getAll();

    commit("STORE_ALL_POKEMONS", data.results);
  },

  /* ----- DESKTOP ----- */

  async fetchPokemonsForPagination({ commit }) {
    commit("TOGGLE_PAGINATION_LOADER", true);
    const { data } = await PokemonsRepository.getAll();

    commit("STORE_DESKTOP_POKEMONS", data.results);
    commit("TOGGLE_PAGINATION_LOADER");
  },

  async filterPokemons({ commit }, start) {
    commit("TOGGLE_PAGINATION_LOADER", true);

    commit("FILTER_POKEMONS", start);

    commit("TOGGLE_PAGINATION_LOADER");
  },
};

const mutations = {
  STORE_POKEMONS: (state, pokemons) => {
    state.offset += state.limit;
    state.pokemons = [...state.pokemons, ...pokemons];
  },

  FILTER_POKEMONS: (state, start) => {
    state.filteredPokemons = state.searchedPokemons.slice(
      start,
      start + state.limit
    );
  },

  STORE_ALL_POKEMONS: (state, pokemons) =>
    (state.allPokemons = Object.freeze(pokemons)),

  STORE_DESKTOP_POKEMONS: (state, pokemons) => {
    state.allPokemons = Object.freeze(pokemons);
    state.searchedPokemons = state.allPokemons;
    state.filteredPokemons = state.searchedPokemons.slice(0, state.limit);
  },

  TOGGLE_POKEDEX_LOADER: (state, loader = false) =>
    (state.pokedexLoader = loader),

  TOGGLE_OBSERVER_LOADER: (state, loader = false) =>
    (state.observerLoader = loader),

  TOGGLE_PAGINATION_LOADER: (state, loader = false) =>
    (state.paginationLoader = loader),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
