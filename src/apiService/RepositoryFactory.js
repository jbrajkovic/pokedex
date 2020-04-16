import PokemonRepository from "./Repositories/pokemonsRespository";
import SpeciesRepository from "./Repositories/speciesRespository";
import TypesRepository   from "./Repositories/typesRepository";

const repositories = {
  pokemons: PokemonRepository,
  types   : TypesRepository,
  species : SpeciesRepository
};

export const RepositoryFactory = {
  get: name => repositories[name]
};
