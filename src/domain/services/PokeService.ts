import { pokemonAPI, PokemonDetailAPI } from "../entities/API";

type pokemonOptions = {
  offset?: number;
  limit?: number;
}

type pokeServiceProps = {
  path: string;
}

export interface AuthInterface {
  getPokemons(options: pokemonOptions): Promise<pokemonAPI>;
  getPokemon(id: string): Promise<PokemonDetailAPI>;
}


export default class PokeService {
  private path: string = '';
  constructor({ path }: pokeServiceProps) {
    this.path = path;
  }

  public async getPokemons({ offset = 20, limit = 20}: pokemonOptions): Promise<pokemonAPI> {
    return fetch(`${this.path}/pokemon?offset=${offset}&limit=${limit}`)
      .then((response) => {
        return response.json();
      });
  }

  public async getPokemon(id: string): Promise<PokemonDetailAPI> {
    return fetch(`${this.path}/pokemon/${id}`)
      .then((response) => {
        return response.json();
      });
  }
};
