import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/typedex",
    name: "TypeDex",
    component: () =>
      import(/* webpackChunkName: "typedex" */ "../views/TypeDex.vue"),
  },
  {
    path: "/favourites",
    name: "Favourites",
    component: () =>
      import(/* webpackChunkName: "favourites" */ "../views/Favourites.vue"),
  },
  {
    path: "/pokemon/:name",
    name: "SinglePokemon",
    component: () =>
      import(
        /* webpackChunkName: "single-pokemon" */ "../views/SinglePokemon.vue"
      ),
  },
  {
    path: "/type/:name",
    name: "SingleType",
    component: () =>
      import(
        /* webpackChunkName: "single-pokemon" */ "../views/SingleType.vue"
      ),
  },
  {
    path: "*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "single-pokemon" */ "../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.fullPath !== "/" && !store.getters.getPokemons.length) {
    next({ path: "/" });
  }

  next();
});

export default router;
