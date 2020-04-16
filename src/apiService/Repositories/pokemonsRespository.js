import Repository from "../Repository";

const resource = "/pokemon";
const countPokemon = 807;

export default {
  get(offset, limit) {
    return Repository.get(`${resource}?offset=${offset}&limit=${limit}`);
  },

  getPokemon(pokemon) {
    return Repository.get(`${resource}/${pokemon}`);
  },

  getAll() {
    return Repository.get(`${resource}?limit=${countPokemon}`)
  }
};
