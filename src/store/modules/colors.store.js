const state = {
  typeColors: {
    dark: {
      color: "#5a5979",
      darkColor: "#47476b",
    },
    dragon: {
      color: "#63cad9",
      darkColor: "#30a9b2",
    },
    grass: {
      color: "#27cb50",
      darkColor: "#13af34",
    },
    bug: {
      color: "#3c9952",
      darkColor: "#378a46",
    },
    steel: {
      color: "#43bd96",
      darkColor: "#288c68",
    },
    fire: {
      color: "#fe4c5a",
      darkColor: "#d94457",
    },
    ghost: {
      color: "#906791",
      darkColor: "#7f4580",
    },
    ground: {
      color: "#694922",
      darkColor: "#4d2e0f",
    },
    normal: {
      color: "#c89aa7",
      darkColor: "#b57e91",
    },
    psychic: {
      color: "#f91b92",
      darkColor: "#d8077e",
    },
    fairy: {
      color: "#ec1269",
      darkColor: "#c5005a",
    },
    water: {
      color: "#86a9fd",
      darkColor: "#3f7eff",
    },
    rock: {
      color: "#8b3e22",
      darkColor: "#6d2916",
    },
    flying: {
      color: "#93b2c7",
      darkColor: "#6091af",
    },
    ice: {
      color: "#c1d5de",
      darkColor: "#91bbc7",
    },
    poison: {
      color: "#9b69da",
      darkColor: "#7f4fc9",
    },
    electric: {
      color: "#e2dd5b",
      darkColor: "#c5bd38",
    },
    fighting: {
      color: "#f06139",
      darkColor: "#de4523",
    },
  },
};

const actions = {
  getTypeColor({ state }, type) {
    return state.typeColors[type].color;
  },
  getTypeDarkColor({ state }, type) {
    return state.typeColors[type].darkColor;
  },
};

export default {
  state,
  actions,
};
