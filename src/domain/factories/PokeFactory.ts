import PokeService from '../services/PokeService';

export class PokeFactory {
  public static createService() {
    return new PokeService();
  }
}