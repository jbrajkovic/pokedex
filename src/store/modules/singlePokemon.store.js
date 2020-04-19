import axios from "axios";
import { RepositoryFactory } from "../../apiService/RepositoryFactory";

const PokemonsRepository = RepositoryFactory.get("pokemons");
const SpeciesRepository = RepositoryFactory.get("species");

const state = {
  evolution: [],
  pokemonInfo: {},
  abilities: null,
  singlePokemonId: null,
  singlePokemonName: '',
  singlePokemonTypes: [],
  singlePokemonMoves: [],
  singlePokemonLoader: false
};

const getters = {
  getSinglePokemonLoader: (state) => state.singlePokemonLoader,
  getSinglePokemonTypes: (state) => state.singlePokemonTypes,
  getSinglePokemonMoves: (state) => state.singlePokemonMoves,
  getSinglePokemonName: (state) => state.singlePokemonName,
  getSinglePokemonId: (state) => state.singlePokemonId,
  getEvolutionChain: (state) => state.evolution,
  getPokemonInfo: (state) => state.pokemonInfo,
  getAbilities: (state) => state.abilities,
};

const actions = {
  async fetchSinglePokemon({ commit }, pokemon) {
    commit("TOGGLE_SINGLE_POKEMON_LOADER", true);

    const {
      data: { name, base_experience, id, abilities, height, weight, moves, types },
    } = await PokemonsRepository.getPokemon(pokemon);

    const {
      data: { color, habitat, evolution_chain, capture_rate },
    } = await SpeciesRepository.get(id);

    const { data: evolution } = await axios.get(evolution_chain.url);

    const abilityRequests = abilities.map((current) => {
      return axios.get(current.ability.url);
    });

    const moveRequests = moves.map((current) => {
      return axios.get(current.move.url);
    });

    let abilitiesResponse, movesResponse;

    await axios
      .all([...abilityRequests])
      .then((res) => (abilitiesResponse = res.map((curr) => curr.data)));

    await axios
      .all([...moveRequests])
      .then((res) => (movesResponse = res.map((curr) => curr.data)));

    const infoPayload = {
      habitat: habitat ? habitat.name : "-",
      color: color ? color.name : "-",
      base_experience,
      capture_rate,
      height,
      weight,
    };
    commit("STORE_MOVES", movesResponse);
    commit("STORE_POKEMON_TYPES", types);
    commit("STORE_SINGLE_POKEMON_ID", id);
    commit("STORE_SINGLE_POKEMON_NAME", name);
    commit("STORE_POKEMON_INFO", infoPayload);
    commit("STORE_ABILITIES", abilitiesResponse);
    commit("STORE_EVOLUTION_CHAIN", evolution.chain);

    commit("TOGGLE_SINGLE_POKEMON_LOADER");
  },
};

const mutations = {
  STORE_SINGLE_POKEMON_NAME: (state, name) => (state.singlePokemonName = name),

  STORE_POKEMON_TYPES: (state, types) => (state.singlePokemonTypes = types),

  STORE_SINGLE_POKEMON_ID: (state, id) => (state.singlePokemonId = id),

  STORE_POKEMON_INFO: (state, info) => (state.pokemonInfo = info),

  STORE_ABILITIES: (state, abilities) => {
    state.abilities = abilities.reduce((abilities, ability) => {
      const { name, effect_entries } = ability;

      abilities.push({
        name,
        description: effect_entries[0].short_effect,
      });

      return abilities;
    }, []);
  },

  STORE_MOVES: (state, moves) => {
    state.singlePokemonMoves = moves.slice(0, 4).reduce((acc, move) => {
      const { name, power, accuracy } = move;

      acc.push({ name, power, accuracy });

      return acc;
    }, []);
  },

  STORE_EVOLUTION_CHAIN: (state, evolution) => (state.evolution = evolution),

  TOGGLE_SINGLE_POKEMON_LOADER: (state, loader = false) => {
    state.singlePokemonLoader = loader;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
