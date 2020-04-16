import { RepositoryFactory } from "../../apiService/RepositoryFactory";

const TypesRepository = RepositoryFactory.get("types");

const state = {
  types: [],
  typesLoader: false,
};

const getters = {
  getTypes: (state) => state.types,
  getTypesLoader: (state) => state.typesLoader,
};

const actions = {
  async fetchTypes({ commit }) {
    commit("TOGGLE_TYPES_LOADER", true);

    const { data } = await TypesRepository.get();

    //Use splice to avoid unknown types
    commit("STORE_TYPES", data.results.splice(0,18));
    commit("TOGGLE_TYPES_LOADER");
  },
};

const mutations = {
  STORE_TYPES: (state, types) => (state.types = types),

  TOGGLE_TYPES_LOADER: (state, loader = false) => (state.typesLoader = loader),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
