import Vue from "vue";
import VueLodash from "vue-lodash";
import sortedIndexBy from "lodash/sortedIndexBy";

Vue.use(VueLodash, { name: "custom", lodash: { sortedIndexBy } });

export const insertIntoSortedArray = function(array, value, iteratee) {
  let sortedIndex = Vue.lodash.sortedIndexBy(array, value, iteratee);

  array.splice(sortedIndex, 0, value);
};
