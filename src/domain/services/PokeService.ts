import { pokemonAPI, PokemonDetailAPI } from "../entities/API";

type pokemonOptions = {
  offset?: number;
  limit?: number;
}

export interface AuthInterface {
  getPokemons(options: pokemonOptions): Promise<pokemonAPI>;
  getPokemon(id: string): Promise<PokemonDetailAPI>;
}


export default class PokeService {
  constructor() {

  }

  public async getPokemons({ offset = 20, limit = 20}: pokemonOptions): Promise<pokemonAPI> {
    return fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      .then((response) => {
        return response.json();
      });
  }

  public async getPokemon(id: string): Promise<PokemonDetailAPI> {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        return response.json();
      });
  }
};
