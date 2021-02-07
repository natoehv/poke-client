import PokeService from '../services/PokeService';

export class PokeFactory {
  public static createService() {
    const api = 'https://pokeapi.co/api/v2';
    return new PokeService({ path: api });
  }
}