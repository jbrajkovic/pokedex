const state = {
  pages: [],
  startPage: 0,
  countPage: 0,
  activePage: 1,
  visiblePages: [],
};

const getters = {
  getStartPage: (state) => state.startPage,
  getPageCount: (state) => state.countPage,
  getActivePage: (state) => state.activePage,
  getVisiblePages: (state) => state.visiblePages,
};

const actions = {
  filterPages({ commit, rootState }, count) {
    const pokemonCount = count || rootState.Pokedex.searchedPokemons.length;
    const pagesCount = Math.ceil(pokemonCount / 8);
    const pages = [...Array(pagesCount + 1).keys()].slice(1);
    const visiblePages = pages.slice(state.startPage, state.startPage + 3);

    commit("STORE_VISIBLE_PAGES", visiblePages);
    commit("STORE_PAGES_COUNT", pagesCount);
    commit("STORE_PAGES", pages);
  },

  fetchFirst({ commit }) {
    commit("FETCH_FIRST_PAGE");
  },

  fetchLast({ commit }) {
    commit("FETCH_LAST_PAGE");
  },

  setActivePage({ commit }, page) {
    commit("SET_ACTIVE_PAGE", page);
  },

  setStartPage({ commit }, page) {
    commit("SET_START_PAGE", page);
  },

  setVisiblePages({ commit }) {
    commit("CHANGE_VISIBLE_PAGES");
  },
};

const mutations = {
  SET_ACTIVE_PAGE: (state, page) => {
    state.activePage = page;
  },

  SET_START_PAGE: (state, page) => {
    state.startPage = page;
  },

  STORE_PAGES_COUNT: (state, count) => (state.countPage = count),

  FETCH_FIRST_PAGE: (state) => {
    state.startPage = 0;
    state.activePage = 1;
    state.visiblePages = state.pages.slice(0, 3);
  },

  FETCH_LAST_PAGE: (state) => {
    let pagesCount = state.pages.length;
    state.startPage = pagesCount - 3;
    state.activePage = pagesCount;
    state.visiblePages = state.pages.slice(
      state.startPage,
      state.startPage + 3
    );
  },

  STORE_PAGES: (state, pages) => {
    state.pages = pages;
  },

  STORE_VISIBLE_PAGES: (state, pages) => {
    state.visiblePages = pages;
  },

  CHANGE_VISIBLE_PAGES: (state) => {
    state.visiblePages = state.pages.slice(
      state.startPage,
      state.startPage + 3
    );
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
