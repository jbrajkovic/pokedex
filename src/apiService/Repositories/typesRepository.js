import Repository from "../Repository";

const resource = "/type";

export default {
  get() {
    return Repository.get(`${resource}`);
  },

  getType(type) {
    return Repository.get(`${resource}/${type}`);
  }
};
