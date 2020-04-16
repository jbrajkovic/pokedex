import Repository from "../Repository";

const resource = "/pokemon-species";

export default {
  get(pokemon) {
    return Repository.get(`${resource}/${pokemon}`);
  },
};
