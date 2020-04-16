import { RepositoryFactory } from "../../apiService/RepositoryFactory";

const PokemonsRepository = RepositoryFactory.get("pokemons");

const state = {
  limit: 8,
  offset: 0,
  pokemons: [],
  allPokemons: [],
  pokedexLoader: false,
  observerLoader: false,
};

const getters = {
  getPokemons: (state) => state.pokemons,
  getAllPokemons: (state) => state.allPokemons,
  getPokedexLoader: (state) => state.pokedexLoader,
  getObserverLoader: (state) => state.observerLoader,
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

  async fetchAllPokemons({commit}) {
    const {data} = await PokemonsRepository.getAll();

    commit('STORE_ALL_POKEMONS', data.results);
  }
};

const mutations = {
  STORE_POKEMONS: (state, pokemons) => {
    state.offset += state.limit;
    state.pokemons = [...state.pokemons, ...pokemons];
  },

  STORE_ALL_POKEMONS: (state, pokemons) => {
    state.allPokemons = Object.freeze(pokemons);
  },

  TOGGLE_POKEDEX_LOADER: (state, loader = false) =>
    (state.pokedexLoader = loader),

  TOGGLE_OBSERVER_LOADER: (state, loader = false) =>
    (state.observerLoader = loader),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
