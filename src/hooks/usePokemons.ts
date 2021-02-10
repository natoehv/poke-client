import { useState, useEffect, useRef } from 'react';
import { PokemonDetailAPI } from '../domain/entities/API';
import { PokeFactory } from '../domain/factories/PokeFactory'

type hookProps = {
  search?: string;
  page?: number;
}

const usePokemons = ({ search = '', page = 1 }: hookProps ) => {
  const limit = 20;
  const [offset, setOffset] = useState(limit * page);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setOffset(page * limit);
  }, [page]);

  const [pokemonDetails, setPokemonDetails] = useState<Array<PokemonDetailAPI>>([]);
  const [filttered, setFilttered] = useState<Array<PokemonDetailAPI>>([]);

  const [count, setCount] = useState(0);
  const service = useRef(PokeFactory.createService());

  const searchFilter = (search: string, pokemon: PokemonDetailAPI) => {
    return pokemon.name.includes(search)
      || (pokemon.types && pokemon.types.find(type => type.type.name.includes(search)))
  }

  /** local filter */
  useEffect(() => {
    if (search !== '') {
      setFilttered(pokemonDetails.filter((pokemon) => searchFilter(search, pokemon)))
    } else {
      setFilttered(pokemonDetails)
    }
  }, [search, pokemonDetails]);

  useEffect(() => {
    setLoading(true);
    service.current.getPokemons({ offset, limit}).then(async (pokemons) => {
      setCount(Math.floor(pokemons.count / limit))
      const pokemonDetails = await Promise.all(pokemons.results.map(({ url }) => {
        const splitted = url.split('/');
        const pokeID = splitted[splitted.length-2];
        return service.current.getPokemon(pokeID).then((pokemon) => {
          setLoading(false);
          return pokemon;
        });
      }))
      setPokemonDetails(pokemonDetails)
    });
  }, [offset]);

  return {
    count,
    filttered,
    loading,
  }
}

export default usePokemons;
