import { RepositoryFactory } from "../../apiService/RepositoryFactory";

const TypesRepository = RepositoryFactory.get("types");

const state = {
  pokemonsByType: [],
  singleTypeLoader: false,
};

const getters = {
  getPokemonsByType: (state) => state.pokemonsByType,
  getSingleTypeLoader: (state) => state.singleTypeLoader,
};

const actions = {
  async fetchPokemonsByType({ commit }, type) {
    commit("TOGGLE_SINGLE_TYPE_LOADER", true);

    const { data } = await TypesRepository.getType(type);

    commit("STORE_POKEMONS_BY_TYPE", data.pokemon);
    commit("TOGGLE_SINGLE_TYPE_LOADER");
  },
};

const mutations = {
  STORE_POKEMONS_BY_TYPE: (state, pokemonsByType) => (state.pokemonsByType = pokemonsByType),

  TOGGLE_SINGLE_TYPE_LOADER: (state, loader = false) => (state.singleTypeLoader = loader),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
